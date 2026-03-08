import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function PresentationPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showPresentation, setShowPresentation] = useState(false);
  const presentationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
              Ab Dekhiye Kaise <span className="text-warm-orange">System</span>{" "}
              Banate Hain
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Is video mein main aapko step-by-step dikhaunga ki kaise ek
              profitable funnel system setup karte hain.
            </p>
          </div>

          {/* Mentor Section */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              <img
                src="/assets/uploads/WhatsApp-Image-2026-03-09-at-2.08.08-AM-1.jpeg"
                alt="Ashfaq Sheikh"
                className="rounded-2xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full border border-border/50 shadow-xl">
                <p className="font-semibold text-warm-orange">
                  Your Guidance: Ashfaq Sheikh
                </p>
              </div>
            </div>
          </div>

          {/* Expectations */}
          <div
            className={`bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Is Video Mein Aap Seekhenge:
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="text-4xl">🎯</div>
                <h3 className="font-semibold">Funnel Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  Kaise ek converting funnel design karte hain
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl">⚙️</div>
                <h3 className="font-semibold">System Setup</h3>
                <p className="text-sm text-muted-foreground">
                  Step-by-step automation setup process
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl">💰</div>
                <h3 className="font-semibold">Monetization</h3>
                <p className="text-sm text-muted-foreground">
                  Kaise consistent income generate karein
                </p>
              </div>
            </div>
          </div>

          {/* Video 1 Section */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-center text-base md:text-lg font-semibold text-cool-blue mb-4">
              🎬 6 Min Ki Free Training — Dekhein Kaise Funnel Kaam Karta Hai
            </p>
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-4 shadow-2xl">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black/50">
                <iframe
                  src="https://www.youtube.com/embed/O23vqlIDQmU"
                  title="FunnelFixer Training Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            {/* Presentation Reveal Button */}
            <div className="flex justify-center mt-8">
              <Button
                size="lg"
                data-ocid="presentation.reveal_button"
                onClick={() => {
                  setShowPresentation(true);
                  setTimeout(() => {
                    presentationRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 50);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Play className="h-5 w-5 fill-white" />
                17 Min Ki Full Presentation Dekhein
              </Button>
            </div>

            {/* Presentation Video (conditionally rendered) */}
            <div ref={presentationRef}>
              {showPresentation && (
                <div
                  className="mt-10 transition-all duration-700 opacity-100 translate-y-0"
                  style={{ animation: "fadeSlideIn 0.6s ease forwards" }}
                >
                  <p className="text-center text-base md:text-lg font-semibold text-warm-orange mb-4">
                    🎯 17 Min Ki Detailed Presentation
                  </p>
                  <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-4 shadow-2xl">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black/50">
                      <iframe
                        src="https://www.youtube.com/embed/XWID-7Pqhvw"
                        title="FunnelFixer Detailed Presentation"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Authority Text */}
          <div
            className={`text-center space-y-6 transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
              "Main sirf theory nahi sikhata. Main aapko wahi system dikhata
              hoon jo maine khud use karke results generate kiye hain. Yeh
              practical, tested aur proven hai."
            </p>
            <p className="font-semibold text-warm-orange">- Ashfaq Sheikh</p>
          </div>

          {/* CTA — always at bottom, after presentation section */}
          <div
            className={`text-center space-y-6 transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Tayyar Hain Apna System Banana?
            </h2>
            <Button
              size="lg"
              onClick={() => navigate({ to: "/sales" })}
              className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
              style={{
                backgroundColor: "#e8650a",
                color: "#ffffff",
                border: "none",
              }}
            >
              Next Step Dekhein
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
