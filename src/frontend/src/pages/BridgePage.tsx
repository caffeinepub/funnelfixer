import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function BridgePage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-warm-orange/10 via-background to-cool-blue/10">
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div
          className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
            Kya Aap Bhi Affiliate Marketing Mein
            <span className="text-warm-orange"> Mehnat Kar Rahe Hain</span> Par
            <span className="text-cool-blue"> Results Nahi Aa Rahe?</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Agar aap din-raat links share kar rahe hain, lekin sales nahi ho
            rahi... toh yeh message aapke liye hai.
          </p>
        </div>
      </section>

      {/* Meet Your Guide Section */}
      <section className="container py-16">
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
              Miliye Apne Guide Se -{" "}
              <span className="text-warm-orange">Ashfaq Sheikh</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img
                  src="/assets/WhatsApp Image 2026-02-03 at 12.36.53 AM.jpeg"
                  alt="Ashfaq Sheikh"
                  className="rounded-xl shadow-2xl w-full max-w-sm transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi, main Ashfaq Sheikh hoon. Maine bhi wahi galtiyan ki hain
                  jo aap kar rahe hain. Lekin ab main aapko woh system sikhaunga
                  jo{" "}
                  <span className="font-semibold text-foreground">
                    actually kaam karta hai
                  </span>
                  .
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Yeh sirf links share karne ka game nahi hai. Yeh ek{" "}
                  <span className="font-semibold text-warm-orange">
                    system build karne
                  </span>{" "}
                  ka game hai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meri Story Section */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          {/* Hook Headline */}
          <div
            className={`text-center space-y-4 mb-12 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-snug">
              "Dahi Vada Bechne Wala...{" "}
              <span className="text-warm-orange">
                Jisne 4 Saal Mein 7 Business Try Kiye
              </span>
              "
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto italic">
              Yeh story hai ek aisi journey ki, jo shuru hui struggle se aur
              pahunchi ek 24/7 kaam karne wale system tak.
            </p>
          </div>

          {/* Story Timeline Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              {
                delay: "delay-[100ms]",
                emoji: "🏪",
                title: "2022 - Shuruaat",
                text: "Dahi vada chaat ka stall lagata tha family ke liye. Online earning ki zaroorat thi. YouTube channel banaya as a motivational speaker.",
                highlight: false,
              },
              {
                delay: "delay-[200ms]",
                emoji: "🤝",
                title: "MLM Mein 3 Saal",
                text: "Ek MLM company mein as a leader kaam kiya. Team banai, leadership seekhi. Income bhi aayi, lekin system nahi tha.",
                highlight: false,
              },
              {
                delay: "delay-[300ms]",
                emoji: "🌏",
                title: "Dropshipping & USA Business",
                text: "Suna ki India se USA mein dropshipping ho sakta hai. Try kiya. Kuch seekha. Lekin clear direction nahi tha.",
                highlight: false,
              },
              {
                delay: "delay-[400ms]",
                emoji: "📦",
                title: "Affiliate & Digital Products",
                text: "Affiliate marketing try ki. Fir digital products discover kiye — no delivery, no stock. Interesting tha!",
                highlight: false,
              },
              {
                delay: "delay-[500ms]",
                emoji: "📈",
                title: "Ecommerce & Share Market",
                text: "Indian dropshipping, ecommerce try ki. Share market ka course bhi liya. Sab kuch try karta raha.",
                highlight: false,
              },
              {
                delay: "delay-[600ms]",
                emoji: "😔",
                title: "Confusion Ka Daur",
                text: "Har jagah income ho rahi thi logo ki. Yeh to sach tha. Lekin mujhe sahi guidance nahi mila. Koi ek niche clear nahi thi.",
                highlight: false,
              },
              {
                delay: "delay-[700ms]",
                emoji: "🤖",
                title: "Automation Ka Sapna",
                text: "Chahta tha ki ek aisa system ho jo bina jyada investment ke, 24/7 mere liye kaam kare. Automation ka rasta dhundha.",
                highlight: false,
              },
              {
                delay: "delay-[800ms]",
                emoji: "🎯",
                title: "Finally Mila Rasta",
                text: "Aur aakhirkar wo system mil gaya — ek affiliate funnel jo automatically leads capture kare, follow up kare, aur income generate kare. Yahi main aapko sikhaunga.",
                highlight: true,
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`rounded-xl border p-6 space-y-3 transition-all duration-700 ${card.delay} ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${
                  card.highlight
                    ? "bg-warm-orange/15 border-warm-orange/60 shadow-lg shadow-warm-orange/10"
                    : "bg-card/50 border-border/50"
                } backdrop-blur-sm`}
              >
                <div className="text-3xl">{card.emoji}</div>
                <h3
                  className={`font-bold text-base md:text-lg ${
                    card.highlight ? "text-warm-orange" : "text-foreground"
                  }`}
                >
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Quote Block */}
          <div
            className={`max-w-2xl mx-auto text-center transition-all duration-1000 delay-[900ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <blockquote className="bg-cool-blue/10 border-l-4 border-cool-blue rounded-r-xl px-8 py-6 shadow-md text-left">
              <p className="text-lg md:text-xl font-serif italic text-foreground leading-relaxed">
                "Mujhe 4 saal lage yeh samajhne mein. Aapko nahi lagenge —
                kyunki ab main hoon aapke saath."
              </p>
              <footer className="mt-4 font-semibold text-warm-orange text-sm">
                — Ashfaq Sheikh
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Key Insight Section */}
      <section className="container py-16">
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Samajhiye Asli Farak
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-destructive/10 border-2 border-destructive/30 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-2xl font-bold mb-4 text-destructive">
                Active Affiliate
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Har din links share karte raho</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Agar kaam band kiya, income band</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hamesha mehnat, kabhi freedom nahi</span>
                </li>
              </ul>
            </div>

            <div className="bg-warm-orange/10 border-2 border-warm-orange/50 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-4 text-warm-orange">
                System Owner
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ek baar system setup karo</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>System aapke liye kaam karta hai</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Passive income aur real freedom</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 pb-24">
        <div
          className={`max-w-2xl mx-auto text-center space-y-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Tayyar Hain System Banana Seekhne Ke Liye?
          </h2>
          <p className="text-lg text-muted-foreground">
            Free training mein main aapko step-by-step dikhaunga ki kaise ek
            profitable funnel system banate hain.
          </p>
          <Button
            size="lg"
            onClick={() => navigate({ to: "/opt-in" })}
            className="bg-warm-orange hover:bg-warm-orange/90 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Watch Free Training
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
