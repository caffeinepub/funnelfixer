import { Heart } from "lucide-react";
import { SiFacebook } from "react-icons/si";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="/assets/WhatsApp Image 2026-02-03 at 12.21.21 AM.jpeg"
              alt="FunnelFixer Logo"
              className="h-8 w-auto"
            />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <SiFacebook className="h-4 w-4 text-[#1877F2]" />
            <p className="text-center">
              This site is not a part of Facebook or Meta Platforms Inc. and is
              not endorsed by Facebook in any way.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025. Built with</span>
            <Heart className="h-4 w-4 fill-warm-orange text-warm-orange animate-pulse" />
            <span>using</span>
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-warm-orange transition-colors"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
