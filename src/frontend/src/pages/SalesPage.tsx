import { Button } from "@/components/ui/button";
import { useIncrementSalesPageViews } from "@/hooks/useQueries";
import { Gift, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function SalesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const { mutate: incrementViews } = useIncrementSalesPageViews();

  useEffect(() => {
    setIsVisible(true);
    incrementViews();
  }, [incrementViews]);

  const whatsappLink = "https://wa.me/918318305796?text=SYSTEMLEAD";

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-warm-orange/10 via-background to-cool-blue/10">
      <div className="container py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Headline */}
          <div
            className={`text-center space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Yeh Sirf Ek <span className="text-warm-orange">Purchase</span>{" "}
              Nahi Hai
              <br />
              Yeh Ek{" "}
              <span className="text-cool-blue">Long-Term Commitment</span> Hai
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Main aapko sirf course nahi de raha. Main aapke saath journey par
              chal raha hoon.
            </p>
          </div>

          {/* Benefits */}
          <div
            className={`bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-8 md:p-12 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Aapko Milega:
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-warm-orange/20 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Complete System Setup
                  </h3>
                  <p className="text-muted-foreground">
                    Step-by-step guidance ke saath apna pura funnel system setup
                    karein
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cool-blue/20 flex items-center justify-center">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Personal Guidance
                  </h3>
                  <p className="text-muted-foreground">
                    Direct WhatsApp support aur doubt clearing sessions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-warm-orange/20 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Ongoing Follow-up
                  </h3>
                  <p className="text-muted-foreground">
                    Regular check-ins aur optimization tips for better results
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Not For Everyone */}
          <div
            className={`bg-destructive/10 border-2 border-destructive/30 rounded-xl p-8 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-destructive">
              ⚠️ Yeh Sabke Liye NAHI Hai
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Agar aap quick results chahte hain bina kaam kiye, ya shortcuts
              dhundh rahe hain, toh yeh program aapke liye nahi hai. Yeh unke
              liye hai jo seriously ek sustainable business banana chahte hain.
            </p>
          </div>

          {/* WhatsApp Requirement */}
          <div
            className={`bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-8 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="h-12 w-12 text-[#25D366]" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              WhatsApp Par Personal Onboarding
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Main har student ke saath personally WhatsApp par connect hota
              hoon. Yeh ensure karta hai ki aap sahi direction mein ja rahe hain
              aur koi confusion nahi hai.
            </p>
          </div>

          {/* Coupon Section — mobile-first, stacked layout */}
          <div
            className={`relative overflow-hidden rounded-2xl border-2 border-warm-orange/50 shadow-2xl transition-all duration-1000 delay-900 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.22 35 / 0.15) 0%, oklch(0.62 0.15 240 / 0.12) 100%)",
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-warm-orange/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cool-blue/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative p-6 md:p-12 space-y-6">
              <div className="flex items-center justify-center">
                <Gift className="h-12 w-12 text-warm-orange animate-bounce" />
              </div>

              <h2 className="text-2xl md:text-4xl font-serif font-bold text-center">
                🎁 Wait! Claim Your Exclusive Coupon Code
              </h2>

              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-border/50">
                <p className="text-center text-muted-foreground mb-4">
                  Apna special coupon code claim karne ke liye:
                </p>
                <div
                  className="rounded-lg p-4 md:p-6 mb-4"
                  style={{
                    background: "oklch(0.72 0.22 35 / 0.10)",
                    border: "2px solid oklch(0.72 0.22 35 / 0.45)",
                  }}
                >
                  <p className="text-center text-2xl md:text-3xl font-bold font-mono text-warm-orange tracking-wider">
                    SYSTEMLEAD
                  </p>
                </div>
                <p className="text-center text-muted-foreground text-sm md:text-base">
                  Message{" "}
                  <span className="font-semibold text-foreground">
                    &apos;SYSTEMLEAD&apos;
                  </span>{" "}
                  on WhatsApp to claim your coupon
                </p>
              </div>

              {/* Mobile: full-width button on top, image below */}
              <div className="flex flex-col items-center gap-6 w-full">
                {/* CTA — always full width on mobile */}
                <div className="w-full space-y-4">
                  <Button
                    data-ocid="sales.whatsapp_button"
                    size="lg"
                    onClick={() => window.open(whatsappLink, "_blank")}
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-base md:text-lg px-4 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 shrink-0" />
                    <span>Chat on WhatsApp &amp; Claim Coupon</span>
                  </Button>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✓</span>
                      <span>Instant response aur personal guidance</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✓</span>
                      <span>Exclusive discount with coupon code</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✓</span>
                      <span>Direct access to Ashfaq Sheikh</span>
                    </p>
                  </div>
                </div>

                {/* Mockup image — always below on mobile */}
                <div className="w-full flex justify-center">
                  <img
                    src="/assets/generated/whatsapp-mockup.dim_400x600.png"
                    alt="WhatsApp Chat"
                    className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
                    style={{ maxWidth: "min(260px, 100%)" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div
            className={`text-center space-y-6 transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
              &ldquo;Yaad rakhein: Yeh sirf ek transaction nahi hai. Yeh aapki
              journey ki shuruaat hai. Aur main aapke saath hoon har step
              par.&rdquo;
            </p>
            <p className="font-semibold text-warm-orange text-xl">
              - Ashfaq Sheikh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
