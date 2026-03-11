import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ChapterMood = "struggle" | "pivot" | "discovery" | "mission";

interface StoryChapter {
  icon: string;
  heading: string;
  body: string | string[];
  mood: ChapterMood;
  special?: "two-identities" | "hook-question" | "realisation";
}

const chapters: StoryChapter[] = [
  {
    icon: "📖",
    heading: "Main koi guru nahi hoon",
    body: "Na hi koi overnight success story. Main ek B.Com first year dropout hoon — jo bas ek cheez samajhna chahta tha: online paisa kaise banta hai.",
    mood: "struggle",
  },
  {
    icon: "🏦",
    heading: "2009 — Banking Job",
    body: "Kaam start kiya. Mann kabhi nahi laga. Par logo ke paise maine unke RD mein invest karwaye the — chhod nahi saka. 5 saal wahan guzre. Kisi tarah nikla.",
    mood: "struggle",
  },
  {
    icon: "🔥",
    heading: "2011 — Network Marketing",
    body: "3 saal. Din-raat mehnat. Ghar se 1 lakh kharch ho gaye. Income? Sirf 8000 rupaye. Par junoon tha — isliye laga raha.",
    mood: "struggle",
  },
  {
    icon: "💔",
    heading: "2013 — Zindagi Ka Sabse Kathin Waqt",
    body: "Mere abbu ko cancer ho gaya. Ghar ki halat kharab thi. Bahar job dhundha — 4000, 6000, 7000 salary mil rahi thi. Itne mein ghar kaise chalta?",
    mood: "struggle",
  },
  {
    icon: "🍽️",
    heading: "Dahi Bhalle Ka Stall",
    body: "Mere abbu dahi bhalle aur chaat ka stall lagate the. Maine wahi kaam start kiya. Thoda paisa aane laga — lekin sab ilaj mein chala jaata tha. Fir abbu ka inteqal ho gaya.",
    mood: "struggle",
  },
  {
    icon: "👔",
    heading: "Do Kirdar — Ek Zindagi",
    body: [
      "Us waqt mere life mein 2 kirdar the.",
      "Ek — jo subah dahi bhalle ka stall lagata tha...",
      "Aur doosra — jo suit pehenkar network marketing ke office jaata tha.",
      "Kyunki kisi bhi keemat par, mujhe apni life badalni thi.",
    ],
    mood: "struggle",
    special: "two-identities",
  },
  {
    icon: "🛡️",
    heading: "Guardian Ban Gaya",
    body: "Ghar mein ab sirf main, 2 sisters, aur ammi. Koi choice nahi thi — mujhe hi kuch karna tha.",
    mood: "struggle",
  },
  {
    icon: "🧪",
    heading: "Bohot Kuch Try Kiya",
    body: "YouTube channel, affiliate marketing, USA dropshipping (1 lakh investment chahiye tha — risk nahi le saka), digital bundles, share market. 2022 se online journey shuru ki.",
    mood: "pivot",
  },
  {
    icon: "❓",
    heading: "Ek Sawaal Jo Chain Nahi Lene Deta Tha",
    body: "Kya koi aisa system ho sakta hai... jo ek baar set ho jaye... aur phir 24/7 khud kaam kare? Bina mujhe hamesha active rahe?",
    mood: "pivot",
    special: "hook-question",
  },
  {
    icon: "🎯",
    heading: "Funnel Ka Pata Chala",
    body: "YouTube pe research karte karte funnel system ke baare mein pata chala. Bahut saare webinars attend kiye. Par fees? 15,000... 25,000... 50,000. Soch liya — ye bhi mere bas ki baat nahi.",
    mood: "pivot",
  },
  {
    icon: "⚙️",
    heading: "Jugad Se System Banayenge",
    body: "Tab decide kiya — paise se nahi, jugad se kaam chalayenge. Free tools dhunde, test kiye, alag alag cheeze try karte gaye.",
    mood: "discovery",
  },
  {
    icon: "🚀",
    heading: "Pehla Funnel Ready",
    body: "Mujhe khud doubt tha — ye kaam karega bhi ya nahi. Par jab system chalna start hua... main hairan reh gaya.",
    mood: "discovery",
  },
  {
    icon: "💡",
    heading: "Woh Ehsaas",
    body: "Online paisa product se nahi — SYSTEM se banta hai.",
    mood: "discovery",
    special: "realisation",
  },
  {
    icon: "🎯",
    heading: "Aaj Mera Mission",
    body: "Main logon ko product bechna nahi sikhata. Main sikhata hoon ki kaise ek simple funnel system se koi bhi product ya service sell ho sakti hai.",
    mood: "mission",
  },
];

const moodCardClass: Record<ChapterMood, string> = {
  struggle: "bg-red-50/70 border-red-200/60",
  pivot: "bg-orange-50/70 border-orange-200/60",
  discovery: "bg-blue-50/70 border-blue-200/60",
  mission: "bg-green-50/70 border-green-200/60",
};

const moodIconClass: Record<ChapterMood, string> = {
  struggle: "bg-red-100",
  pivot: "bg-orange-100",
  discovery: "bg-blue-100",
  mission: "bg-green-100",
};

function ChapterCard({
  chapter,
  index,
}: { chapter: StoryChapter; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (chapter.special === "two-identities") {
    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{ transitionDelay: `${index * 55}ms` }}
      >
        <div
          className="relative border-l-4 pl-6 py-5 my-2 rounded-r-2xl"
          style={{
            borderLeftColor: "oklch(var(--warm-orange))",
            background: "oklch(var(--warm-orange) / 0.06)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-warm-orange mb-3">
            Ek Alag Zindagi
          </p>
          {(chapter.body as string[]).map((line, idx) => (
            <p
              key={line}
              className={`leading-relaxed ${
                idx === 0
                  ? "text-base font-semibold text-foreground mb-1"
                  : idx === 1 || idx === 2
                    ? "text-base italic text-muted-foreground mb-1"
                    : "text-base font-bold text-warm-orange mt-3"
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    );
  }

  if (chapter.special === "hook-question") {
    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{ transitionDelay: `${index * 55}ms` }}
      >
        <div
          className="relative rounded-2xl overflow-hidden border-2 shadow-lg my-2"
          style={{
            borderColor: "oklch(var(--warm-orange) / 0.60)",
            background:
              "linear-gradient(135deg, oklch(var(--warm-orange) / 0.10) 0%, oklch(var(--cool-blue) / 0.08) 100%)",
            boxShadow: "0 8px 32px oklch(var(--warm-orange) / 0.12)",
          }}
        >
          <div className="p-7 text-center space-y-3">
            <div className="text-4xl">{chapter.icon}</div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">
              {chapter.heading}
            </h3>
            <p className="text-lg md:text-xl italic text-foreground/90 leading-relaxed font-medium">
              &ldquo;{chapter.body as string}&rdquo;
            </p>
            <p className="text-sm text-muted-foreground pt-1">
              Yeh sawaal mujhe raat ko sone nahi deta tha... tab tak — jab tak
              jawab nahi mila.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (chapter.special === "realisation") {
    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{ transitionDelay: `${index * 55}ms` }}
      >
        <div
          className="rounded-2xl border-2 p-7 text-center my-2"
          style={{
            background:
              "linear-gradient(135deg, oklch(var(--success-green) / 0.10) 0%, oklch(var(--cool-blue) / 0.08) 100%)",
            borderColor: "oklch(var(--success-green) / 0.40)",
          }}
        >
          <div className="text-4xl mb-3">{chapter.icon}</div>
          <p className="text-2xl md:text-3xl font-serif font-bold">
            <span className="text-success-green">
              Online paisa product se nahi —
            </span>
            <br />
            <span className="text-foreground">SYSTEM se banta hai.</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 rounded-2xl border p-5 transition-all duration-700 ${moodCardClass[chapter.mood]} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 55}ms` }}
    >
      <div
        className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-xl ${moodIconClass[chapter.mood]}`}
      >
        {chapter.icon}
      </div>
      <div className="space-y-1.5">
        <h3 className="font-bold text-base text-foreground">
          {chapter.heading}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {chapter.body as string}
        </p>
      </div>
    </div>
  );
}

function ZoneDivider({ label, color }: { label: string; color: string }) {
  return (
    <div className="text-center my-10">
      <div className="inline-flex items-center gap-3">
        <div className="h-px w-12 opacity-30" style={{ background: color }} />
        <span
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
          style={{ background: `${color}18`, color }}
        >
          {label}
        </span>
        <div className="h-px w-12 opacity-30" style={{ background: color }} />
      </div>
    </div>
  );
}

function GuidancePhoto() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl flex items-center justify-center text-3xl font-serif font-bold text-white shadow-xl shrink-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.72 0.22 35) 0%, oklch(0.62 0.20 35) 100%)",
          outline: "3px solid oklch(0.72 0.22 35 / 0.35)",
        }}
      >
        AS
      </div>
    );
  }

  return (
    <img
      src="/assets/uploads/WhatsApp-Image-2026-03-09-at-2.08.08-AM-1.jpeg"
      alt="Ashfaq Sheikh"
      className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover shadow-xl shrink-0"
      style={{ outline: "3px solid oklch(0.72 0.22 35 / 0.35)" }}
      onError={() => setImgError(true)}
    />
  );
}

export function BridgePage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const contrastLeft = [
    "Har din links share karte raho",
    "Kaam band = income band",
    "Hamesha active rehna padta hai",
    "Time nahi milta, bas mehnat milti hai",
  ];

  const contrastRight = [
    "Funnel khud kaam karta hai — 24/7",
    "Earn karo jab soo rahe ho bhi",
    "Time aur freedom dono milti hai",
    "System scale hota hai, aap nahi thakte",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ── HERO SECTION ── */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.97 0.018 35) 0%, oklch(0.99 0 0) 50%, oklch(0.97 0.012 240) 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, oklch(0.72 0.22 35 / 0.14) 0%, transparent 55%), radial-gradient(circle at 80% 30%, oklch(0.62 0.15 240 / 0.10) 0%, transparent 55%)",
          }}
        />
        <div className="container relative">
          <div
            className={`max-w-3xl mx-auto text-center space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full border"
              style={{
                backgroundColor: "oklch(0.72 0.22 35 / 0.12)",
                borderColor: "oklch(0.72 0.22 35 / 0.35)",
                color: "oklch(0.72 0.22 35)",
              }}
            >
              <span>🐺</span>
              <span>Yeh kahani meri hai — aur shayad aapki bhi</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight tracking-tight">
              Main Koi Guru Nahi Hoon
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Lekin jo raasta maine{" "}
              <span className="font-semibold text-foreground">
                khud dhundha
              </span>
              {" — "}woh aapko bhi milega. Bas neeche tak padhte raho.
            </p>

            <p className="text-sm text-muted-foreground/60 italic">
              ↓ Scroll karo — kahani shuru hoti hai ↓
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY TIMELINE ── */}
      <section
        className="relative py-16"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.99 0 0) 0%, oklch(0.975 0.006 35) 100%)",
        }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Struggle zone */}
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-red-100 text-red-700">
                📍 Sangharsh (Struggle)
              </span>
            </div>
            <div className="space-y-4">
              {chapters.slice(0, 7).map((ch, i) => (
                <ChapterCard key={ch.heading} chapter={ch} index={i} />
              ))}
            </div>

            <ZoneDivider label="🔄 Turning Point" color="#c2500a" />

            <div className="space-y-4">
              {chapters.slice(7, 10).map((ch, i) => (
                <ChapterCard key={ch.heading} chapter={ch} index={i + 7} />
              ))}
            </div>

            <ZoneDivider label="💡 Discovery" color="#3b6ccc" />

            <div className="space-y-4">
              {chapters.slice(10, 13).map((ch, i) => (
                <ChapterCard key={ch.heading} chapter={ch} index={i + 10} />
              ))}
            </div>

            <ZoneDivider label="🎯 Mission" color="#22763a" />

            <div className="space-y-4">
              {chapters.slice(13).map((ch, i) => (
                <ChapterCard key={ch.heading} chapter={ch} index={i + 13} />
              ))}
            </div>

            {/* Tagline */}
            <div className="mt-12 text-center">
              <p className="text-2xl font-serif font-bold text-warm-orange">
                🐺 FunnelFixer
              </p>
              <p className="text-base text-muted-foreground italic mt-1">
                Jugad se system. System se sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTRAST SECTION ── */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.97 0.014 35) 0%, oklch(0.975 0.010 240) 100%)",
        }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-10">
              Yeh Farak Samjhoge, Tab Sab Clear Hoga
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                data-ocid="bridge.contrast.active_affiliate_card"
                className="rounded-2xl border-2 bg-red-50/80 border-red-200/60 p-7 space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-red-600">
                    ❌ Baaki Affiliates
                  </h3>
                </div>
                <ul className="space-y-3">
                  {contrastLeft.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-muted-foreground"
                    >
                      <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-red-100 text-red-500 text-xs flex items-center justify-center font-bold">
                        ✕
                      </span>
                      <span className="text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                data-ocid="bridge.contrast.system_owner_card"
                className="rounded-2xl border-2 p-7 space-y-5 shadow-lg"
                style={{
                  background: "oklch(0.72 0.22 35 / 0.07)",
                  borderColor: "oklch(0.72 0.22 35 / 0.45)",
                  boxShadow: "0 8px 32px oklch(0.72 0.22 35 / 0.12)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "oklch(0.72 0.22 35 / 0.18)" }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-warm-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-warm-orange">
                    ✅ Is System Se
                  </h3>
                </div>
                <ul className="space-y-3">
                  {contrastRight.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-muted-foreground"
                    >
                      <span
                        className="mt-1 shrink-0 w-4 h-4 rounded-full text-warm-orange text-xs flex items-center justify-center font-bold"
                        style={{
                          backgroundColor: "oklch(0.72 0.22 35 / 0.18)",
                        }}
                      >
                        ✓
                      </span>
                      <span className="text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE TOOLS MENTION ── */}
      <section
        className="py-12"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.97 0.012 240) 0%, oklch(0.98 0.005 35) 100%)",
        }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-2xl border p-7 text-center space-y-4"
              style={{
                background: "oklch(0.62 0.15 240 / 0.07)",
                borderColor: "oklch(0.62 0.15 240 / 0.30)",
              }}
            >
              <div className="text-3xl">🆓</div>
              <h3 className="text-lg font-serif font-bold text-foreground">
                Aur yeh sab FREE tools se possible hai
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Koi bada investment nahi. Maine khud yeh poora funnel{" "}
                <span className="font-semibold text-foreground">
                  bina ek rupaya invest kiye banaya
                </span>
                . Kaun se free tools? Yeh main tab bataunga jab aap{" "}
                <span className="font-semibold text-warm-orange">
                  mere saath join karenge
                </span>{" "}
                — kyunki sirf jaanna kaafi nahi, sahi guidance ke saath karna
                zaroori hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GUIDE INTRO ── */}
      <section className="py-16" style={{ background: "oklch(0.985 0 0)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-7">
                <GuidancePhoto />
                <div className="space-y-3 text-center sm:text-left">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-warm-orange mb-1">
                      Your Guidance
                    </p>
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      Ashfaq Sheikh
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Maine yeh poora funnel{" "}
                    <span className="font-semibold text-foreground">
                      FREE mein banaya
                    </span>
                    . Koi bada investment nahi, koi shortcut nahi — sirf sahi
                    system. Ab main aapko bhi yahi sikhaunga —{" "}
                    <span className="text-warm-orange font-medium">
                      step by step.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section
        className="py-16 pb-28"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.985 0 0) 0%, oklch(0.975 0.014 35) 100%)",
        }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Jaanna Chahte Hain Kaise?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Free training mein sab reveal hoga — step by step.
            </p>

            <div className="flex justify-center">
              <Button
                data-ocid="bridge.watch_training_button"
                size="lg"
                onClick={() => navigate({ to: "/opt-in" })}
                className="text-base md:text-lg px-10 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 gap-2 border-none"
                style={{
                  backgroundColor: "oklch(0.72 0.22 35)",
                  color: "#ffffff",
                }}
              >
                Watch Free Training
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground/60">
              Bilkul free. Koi spam nahi. Sirf real system-building guidance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
