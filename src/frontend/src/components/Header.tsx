import { useNavigate } from "@tanstack/react-router";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={() => navigate({ to: "/" })}
          className="flex items-center space-x-2 transition-transform hover:scale-105"
        >
          <img
            src="/assets/WhatsApp Image 2026-02-03 at 12.21.21 AM.jpeg"
            alt="FunnelFixer Logo"
            className="h-10 w-auto"
          />
        </button>
      </div>
    </header>
  );
}
