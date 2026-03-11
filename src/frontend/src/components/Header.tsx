import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export function Header() {
  const navigate = useNavigate();
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={() => navigate({ to: "/" })}
          className="flex items-center space-x-2 transition-transform hover:scale-105"
        >
          {!logoError ? (
            <img
              src="/assets/generated/funnel-fixer-secondary-logo.dim_512x512.png"
              alt="FunnelFixer Logo"
              className="h-10 w-auto"
              onError={() => setLogoError(true)}
            />
          ) : null}
          <span
            className="font-serif font-bold text-xl"
            style={{ color: "oklch(0.72 0.22 35)" }}
          >
            FunnelFixer
          </span>
        </button>
      </div>
    </header>
  );
}
