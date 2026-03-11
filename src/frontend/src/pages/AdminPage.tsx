import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActor } from "@/hooks/useActor";
import {
  AlertCircle,
  Download,
  Key,
  Loader2,
  LogOut,
  RefreshCw,
  Users,
  Webhook,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { backendInterface } from "../backend";

interface AdminBackend extends backendInterface {
  adminLogin(password: string): Promise<boolean>;
  setWebhookUrl(password: string, url: string): Promise<boolean>;
  getWebhookUrl(password: string): Promise<string>;
}

interface Lead {
  name: string;
  email: string;
  timestamp: bigint;
}

function formatDate(timestamp: bigint): string {
  const ms = Number(timestamp / 1_000_000n);
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function downloadCSV(leads: Lead[]) {
  const header = "Name,Email,Date\n";
  const rows = leads
    .map((l) => `"${l.name}","${l.email}","${formatDate(l.timestamp)}"`)
    .join("\n");
  const blob = new Blob([header + rows], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "funnelfixer-leads.csv";
  a.click();
  URL.revokeObjectURL(url);
}

async function retryCall<T>(
  fn: () => Promise<T>,
  retries = 3,
  delayMs = 1500,
): Promise<T> {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
  throw new Error("Max retries reached");
}

export function AdminPage() {
  const { actor: _actor, isFetching: actorLoading } = useActor();
  const actor = _actor as AdminBackend | null;
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showRetry, setShowRetry] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);

  const [webhookUrl, setWebhookUrl] = useState("");
  const [webhookInput, setWebhookInput] = useState("");
  const [isSavingWebhook, setIsSavingWebhook] = useState(false);
  const [webhookMsg, setWebhookMsg] = useState("");

  const loadLeads = useCallback(async () => {
    if (!actor) return;
    setIsLoadingLeads(true);
    try {
      const users = await retryCall(() => actor.getAllUsers());
      setLeads(users as Lead[]);
    } catch {
      // ignore
    } finally {
      setIsLoadingLeads(false);
    }
  }, [actor]);

  const loadWebhookUrl = useCallback(
    async (pw: string) => {
      if (!actor) return;
      try {
        const url = await retryCall(() => actor.getWebhookUrl(pw));
        setWebhookUrl(url as string);
        setWebhookInput(url as string);
      } catch {
        // ignore
      }
    },
    [actor],
  );

  const doLogin = useCallback(
    async (pw: string) => {
      if (!actor) return false;
      const ok = await retryCall(() => actor.adminLogin(pw));
      return ok;
    },
    [actor],
  );

  const handleAutoLogin = useCallback(
    async (pw: string) => {
      if (!actor || !pw) return;
      try {
        const ok = await doLogin(pw);
        if (ok) {
          setIsLoggedIn(true);
          loadLeads();
          loadWebhookUrl(pw);
        }
      } catch {
        // ignore on auto-login
      }
    },
    [actor, doLogin, loadLeads, loadWebhookUrl],
  );

  useEffect(() => {
    const storedPw = sessionStorage.getItem("admin_pw") ?? "";
    if (storedPw) {
      setPassword(storedPw);
      handleAutoLogin(storedPw);
    }
  }, [handleAutoLogin]);

  const attemptLogin = async (pw: string) => {
    if (!actor) {
      setLoginError("System load ho raha hai, thodi der baad try karein.");
      setShowRetry(true);
      return;
    }
    setIsLoggingIn(true);
    setLoginError("");
    setShowRetry(false);
    try {
      const ok = await doLogin(pw);
      if (ok) {
        sessionStorage.setItem("admin_pw", pw);
        setIsLoggedIn(true);
        loadLeads();
        loadWebhookUrl(pw);
      } else {
        setLoginError("Galat password. Dobara try karein.");
      }
    } catch {
      setLoginError("Connection issue. Dobara try karein.");
      setShowRetry(true);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await attemptLogin(password);
  };

  const handleSaveWebhook = async () => {
    if (!actor) return;
    setIsSavingWebhook(true);
    setWebhookMsg("");
    try {
      const ok = await retryCall(() =>
        actor.setWebhookUrl(password, webhookInput),
      );
      if (ok) {
        setWebhookUrl(webhookInput);
        setWebhookMsg("Webhook URL save ho gayi!");
      } else {
        setWebhookMsg("Save nahi hua. Dobara try karein.");
      }
    } catch {
      setWebhookMsg("Error aaya. Dobara try karein.");
    } finally {
      setIsSavingWebhook(false);
      setTimeout(() => setWebhookMsg(""), 3000);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_pw");
    setIsLoggedIn(false);
    setPassword("");
    setLeads([]);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-background to-blue-50">
        <div className="w-full max-w-sm px-4">
          <div className="bg-card border border-border/50 rounded-2xl shadow-xl p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto">
                <Key className="w-6 h-6 text-orange-500" />
              </div>
              <h1 className="text-2xl font-serif font-bold">Admin Login</h1>
              <p className="text-sm text-muted-foreground">
                FunnelFixer Dashboard
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-password">Password</Label>
                <Input
                  id="admin-password"
                  data-ocid="admin.password.input"
                  type="password"
                  placeholder="Admin password daalo"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setLoginError("");
                    setShowRetry(false);
                  }}
                  required
                  className="h-11"
                  disabled={isLoggingIn}
                />
              </div>
              {loginError && (
                <div
                  data-ocid="admin.login.error_state"
                  className="flex items-start gap-2 text-sm text-destructive p-3 rounded-lg bg-destructive/10"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{loginError}</span>
                </div>
              )}
              <Button
                type="submit"
                data-ocid="admin.login.submit_button"
                disabled={isLoggingIn || actorLoading}
                className="w-full h-11 font-semibold"
                style={{
                  backgroundColor: "#e8650a",
                  color: "#fff",
                  border: "none",
                }}
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Login ho raha hai...
                  </>
                ) : actorLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    System load ho raha hai...
                  </>
                ) : (
                  "Login Karein"
                )}
              </Button>
              {showRetry && !isLoggingIn && (
                <Button
                  type="button"
                  data-ocid="admin.login.retry_button"
                  variant="outline"
                  className="w-full h-11 gap-2"
                  onClick={() => attemptLogin(password)}
                >
                  <RefreshCw className="w-4 h-4" />
                  Dobara Try Karein
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/40 via-background to-blue-50/40">
      <div className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-serif font-bold">🐺 FunnelFixer</span>
            <span className="text-sm text-muted-foreground">Admin Panel</span>
          </div>
          <Button
            data-ocid="admin.logout.button"
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="gap-2 text-muted-foreground"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="container py-8 space-y-8 max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-card border border-border/50 rounded-xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{leads.length}</p>
              <p className="text-xs text-muted-foreground">Total Leads</p>
            </div>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Webhook className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-semibold">
                {webhookUrl ? "Connected" : "Not Set"}
              </p>
              <p className="text-xs text-muted-foreground">Make.com Webhook</p>
            </div>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Download className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm font-semibold">CSV Export</p>
              <p className="text-xs text-muted-foreground">
                Systeme.io ke liye
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Webhook className="w-5 h-5 text-blue-500" />
            <h2 className="text-lg font-semibold">Make.com Webhook URL</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Make.com account banakar webhook URL yahan paste karein. Har naye
            lead ke submit hone par Make.com automatically trigger hoga.
          </p>
          <div className="flex gap-3">
            <Input
              data-ocid="admin.webhook.input"
              type="url"
              placeholder="https://hook.eu1.make.com/..."
              value={webhookInput}
              onChange={(e) => setWebhookInput(e.target.value)}
              className="flex-1 h-11"
            />
            <Button
              data-ocid="admin.webhook.save_button"
              onClick={handleSaveWebhook}
              disabled={isSavingWebhook}
              className="h-11 px-6 font-semibold"
              style={{
                backgroundColor: "#3b6ccc",
                color: "#fff",
                border: "none",
              }}
            >
              {isSavingWebhook ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Save"
              )}
            </Button>
          </div>
          {webhookMsg && (
            <p
              data-ocid="admin.webhook.success_state"
              className="text-sm text-green-600 font-medium"
            >
              {webhookMsg}
            </p>
          )}
        </div>

        <div className="bg-card border border-border/50 rounded-2xl overflow-hidden">
          <div className="p-6 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-semibold">Leads List</h2>
              <span className="text-sm text-muted-foreground">
                ({leads.length})
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                data-ocid="admin.leads.refresh_button"
                variant="outline"
                size="sm"
                onClick={loadLeads}
                disabled={isLoadingLeads}
                className="gap-2"
              >
                <RefreshCw
                  className={`w-4 h-4 ${isLoadingLeads ? "animate-spin" : ""}`}
                />
                Refresh
              </Button>
              <Button
                data-ocid="admin.leads.download_button"
                variant="outline"
                size="sm"
                onClick={() => downloadCSV(leads)}
                disabled={leads.length === 0}
                className="gap-2"
              >
                <Download className="w-4 h-4" />
                CSV Download
              </Button>
            </div>
          </div>

          {isLoadingLeads ? (
            <div
              data-ocid="admin.leads.loading_state"
              className="flex items-center justify-center gap-2 py-12 text-muted-foreground"
            >
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Leads load ho rahe hain...</span>
            </div>
          ) : leads.length === 0 ? (
            <div
              data-ocid="admin.leads.empty_state"
              className="py-12 text-center"
            >
              <Users className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-muted-foreground">Abhi koi lead nahi hai.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table data-ocid="admin.leads.table" className="w-full">
                <thead>
                  <tr className="bg-muted/40 text-left">
                    <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Naam
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {leads.map((lead, idx) => (
                    <tr
                      key={lead.email}
                      data-ocid={`admin.leads.row.${idx + 1}`}
                      className="hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {idx + 1}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        {lead.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {lead.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {formatDate(lead.timestamp)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
