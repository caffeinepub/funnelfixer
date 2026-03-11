import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateUser } from "@/hooks/useQueries";
import { useNavigate } from "@tanstack/react-router";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

function parseBackendError(error: unknown): string {
  const msg = error instanceof Error ? error.message : String(error);
  if (msg.includes("already exists")) {
    return "Yeh email already registered hai. Koi doosra email try karein.";
  }
  if (msg.includes("empty")) {
    return "Naam aur email dono zaroori hain.";
  }
  return "Submit nahi hua. Internet check karein aur dobara try karein.";
}

export function OptInPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    mutate: createUser,
    isPending,
    isSuccess,
    isError,
    error,
    reset,
  } = useCreateUser();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setShowConfirmation(true);
      setErrorMsg("");
      setTimeout(() => {
        navigate({ to: "/presentation" });
      }, 2000);
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (isError && error) {
      setErrorMsg(parseBackendError(error));
    }
  }, [isError, error]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    reset();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setErrorMsg("Naam zaroor bharein.");
      return;
    }
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMsg("Sahi email address bharein.");
      return;
    }

    createUser({ name: trimmedName, email: trimmedEmail });
  };

  const handleRetry = () => {
    if (!name.trim() || !email.trim()) return;
    setErrorMsg("");
    reset();
    createUser({ name: name.trim(), email: email.trim() });
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-orange/10 via-background to-cool-blue/10">
        <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
          <CheckCircle2 className="h-20 w-20 text-warm-orange mx-auto animate-bounce" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Thank You! 💌
          </h2>
          <p className="text-xl text-muted-foreground max-w-md">
            Ab aap training dekh sakte hain
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/10 via-background to-cool-blue/10" />

      <div className="relative container py-16 md:py-24">
        <div
          className={`max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Sirf <span className="text-warm-orange">15 Minutes</span> Mein
              Seekhiye
              <br />
              <span className="text-cool-blue">Profitable Funnel System</span>{" "}
              Banana
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Yeh training aapko dikhayegi ki kaise ek automated system banate
              hain jo aapke liye 24/7 kaam kare.
            </p>
          </div>

          <div
            className={`bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-8 mb-12 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Yeh Training <span className="text-destructive">NAHI</span> Hai:
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-destructive mr-3 text-xl">✗</span>
                <span className="text-muted-foreground">
                  Koi spam ya fake promises
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-3 text-xl">✗</span>
                <span className="text-muted-foreground">
                  Get-rich-quick schemes ya hype
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-3 text-xl">✗</span>
                <span className="text-muted-foreground">
                  Koi shortcuts ya magic tricks
                </span>
              </li>
            </ul>
          </div>

          <div
            className={`bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-12 shadow-2xl transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">
                  Aapka Naam
                </Label>
                <Input
                  id="name"
                  data-ocid="optin.name.input"
                  type="text"
                  placeholder="Apna naam enter karein"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrorMsg("");
                  }}
                  required
                  className="h-12 text-base"
                  disabled={isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  Email Address
                </Label>
                <Input
                  id="email"
                  data-ocid="optin.email.input"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorMsg("");
                  }}
                  required
                  className="h-12 text-base"
                  disabled={isPending}
                />
              </div>

              {errorMsg && (
                <div
                  data-ocid="optin.error_state"
                  className="flex flex-col gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30"
                >
                  <div className="flex items-start gap-2 text-destructive text-sm">
                    <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleRetry}
                    className="flex items-center gap-2 text-sm font-semibold text-warm-orange hover:underline self-start"
                  >
                    Dobara Try Karein
                  </button>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                data-ocid="optin.submit_button"
                disabled={isPending}
                className="w-full text-lg py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
                style={{
                  backgroundColor: isPending ? "#b8490a" : "#e8650a",
                  color: "#ffffff",
                  border: "none",
                  opacity: isPending ? 0.7 : 1,
                }}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submit ho raha hai...
                  </>
                ) : (
                  "Yes, I Want to Learn"
                )}
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                🔒 No spam. Just real system-building guidance.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
