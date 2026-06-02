"use client";

import { motion, Variants } from "framer-motion";
import FallingDecorations from "./FallingDecorations";
import { GlobalRipple } from "./Ripple";

type TechIconName =
  | "code"
  | "chip"
  | "server"
  | "cloud"
  | "terminal"
  | "map"
  | "camera"
  | "vr"
  | "clock"
  | "cap";

const sectionVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    willChange: "transform, opacity",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 42,
      stiffness: 105,
      mass: 0.42,
      delay: 0.16,
    },
  },
};

const techDecorations: TechIconName[] = [
  "code",
  "chip",
  "server",
  "cloud",
  "terminal",
  "map",
  "camera",
  "vr",
];

function TechIcon({ name, className = "" }: { name: TechIconName; className?: string }) {
  const common = "fill-none stroke-current stroke-2";

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {name === "code" && <path className={common} strokeLinecap="round" strokeLinejoin="round" d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />}
      {name === "chip" && (
        <>
          <rect className={common} x="7" y="7" width="10" height="10" rx="2" />
          <path className={common} strokeLinecap="round" d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </>
      )}
      {name === "server" && (
        <>
          <rect className={common} x="4" y="4" width="16" height="6" rx="2" />
          <rect className={common} x="4" y="14" width="16" height="6" rx="2" />
          <path className={common} strokeLinecap="round" d="M8 7h.01M8 17h.01M12 7h6M12 17h6" />
        </>
      )}
      {name === "cloud" && <path className={common} strokeLinecap="round" strokeLinejoin="round" d="M17.5 18H8a5 5 0 1 1 1.4-9.8A6 6 0 0 1 20 12.2 3.5 3.5 0 0 1 17.5 18Z" />}
      {name === "terminal" && <path className={common} strokeLinecap="round" strokeLinejoin="round" d="m5 8 4 4-4 4M11 17h8" />}
      {name === "map" && <path className={common} strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.7 7-11a7 7 0 1 0-14 0c0 6.3 7 11 7 11ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />}
      {name === "camera" && <path className={common} strokeLinecap="round" strokeLinejoin="round" d="M4 8h4l2-3h4l2 3h4v13H4V8ZM12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />}
      {name === "vr" && <path className={common} strokeLinecap="round" strokeLinejoin="round" d="M4 9h16l-2 9h-5l-1-2h-2l-1 2H4L2 9h2ZM7 13h3M14 13h3" />}
      {name === "clock" && <path className={common} strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 6v6l4 2" />}
      {name === "cap" && <path className={common} strokeLinecap="round" strokeLinejoin="round" d="m2 9 10-5 10 5-10 5L2 9ZM6 11v5c3 2 9 2 12 0v-5M20 10v6" />}
    </svg>
  );
}

function TechBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.2),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.17),transparent_26%),linear-gradient(135deg,#f8fdff_0%,#eaf7ff_48%,#f4fff8_100%)]" />
      <div className="absolute inset-0 opacity-35 bg-[linear-gradient(rgba(14,116,144,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,144,0.2)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {techDecorations.map((icon, index) => (
          <motion.div
            key={`${icon}-${index}`}
            animate={{ y: [0, index % 2 ? -10 : 10, 0], opacity: [0.28, 0.55, 0.28] }}
            transition={{ repeat: Infinity, duration: 4 + index * 0.35, ease: "easeInOut" }}
            className="absolute rounded-2xl border border-sky-200/70 bg-white/60 p-3 text-sky-700 shadow-sm backdrop-blur-sm"
            style={{
              left: `${8 + ((index * 13) % 82)}%`,
              top: `${10 + ((index * 19) % 76)}%`,
            }}
          >
            <TechIcon name={icon} className="h-5 w-5 md:h-7 md:w-7" />
          </motion.div>
        ))}
      </div>
    </>
  );
}

function BinaryRail() {
  return (
    <div className="pointer-events-none absolute inset-x-4 top-5 flex justify-between overflow-hidden font-mono text-[10px] tracking-[0.35em] text-sky-700/20">
      <span>0100 0011 0100 1111 0100 0100 0100 0101</span>
      <span className="hidden md:inline">CLOUD DASHBOARD • API • CHIP • SERVER</span>
    </div>
  );
}

export default function GraduationPage() {
  return (
    <main className="h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth bg-[#f8fdff] text-slate-900 no-scrollbar">
      <GlobalRipple />

      <div className="fixed inset-0 z-20 pointer-events-none">
        <FallingDecorations />
      </div>

      <section className="relative min-h-[100dvh] w-full flex items-center justify-center px-3 sm:px-4 md:px-6 py-6 sm:py-10 md:py-20 text-center snap-start overflow-hidden">
        <TechBackground />
        <BinaryRail />

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="relative z-10 max-w-5xl w-full overflow-hidden rounded-[2rem] md:rounded-[2.8rem] border border-sky-200/80 bg-white/84 p-4 sm:p-6 shadow-[0_35px_120px_rgba(14,116,144,0.18)] backdrop-blur-xl md:p-14"
        >
          <div className="absolute left-4 top-4 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-sky-400/60" />
          <div className="absolute right-4 top-4 h-16 w-16 rounded-tr-2xl border-r-2 border-t-2 border-emerald-400/60" />
          <div className="absolute bottom-4 left-4 h-16 w-16 rounded-bl-2xl border-b-2 border-l-2 border-emerald-400/60" />
          <div className="absolute bottom-4 right-4 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-sky-400/60" />

          <div className="relative z-20 space-y-4 sm:space-y-6 md:space-y-8">


            <div className="flex flex-wrap items-center justify-center gap-2">
              {["code", "chip", "server", "cloud", "terminal"].map((icon) => (
                <span key={icon} className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/85 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-sky-700">
                  <TechIcon name={icon as TechIconName} className="h-4 w-4 text-emerald-600" />
                  {icon}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-7xl font-black leading-tight text-[#082f49]">
                Lễ Tốt Nghiệp
              </h1>
            </div>

            <div className="mx-auto flex max-w-xl items-center justify-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
              <TechIcon name="cloud" className="h-8 w-8 text-emerald-600" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
            </div>
            <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white/85 px-5 py-2 shadow-sm">
              <TechIcon name="cap" className="h-5 w-5 text-emerald-600" />
              <span className="font-serif text-xl font-bold text-[#075985] md:text-2xl">Nguyễn Ngọc Tuấn Anh</span>
            </div>
            <div className="mx-auto max-w-2xl space-y-4">
              <p className="font-serif text-lg italic text-sky-800 md:text-2xl">
                Trân trọng kính mời
              </p>

              <div className="text-[14px] md:text-lg leading-[1.75] text-slate-700">
                <p>
                  Bạn đến chung vui trong ngày tốt nghiệp tại
                </p>
                <p>
                  <span className="font-bold text-sky-800"> Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM</span>
                </p>
                <div className="my-4 rounded-2xl border border-sky-100 bg-sky-50/85 p-4 font-mono text-left text-[11px] md:text-sm text-slate-700 shadow-inner overflow-x-auto">
                  <p><span className="text-sky-700 font-bold">int</span> <span className="text-emerald-700 font-bold">main</span>() {'{'}</p>
                  <p className="pl-4"><span className="text-sky-700 font-bold">bool</span> is_graduated = <span className="text-sky-700 font-bold">true</span>;</p>
                  <p className="pl-4"><span className="text-sky-700 font-bold">if</span> (is_graduated) {'{'}</p>
                  <p className="pl-8"><span className="text-sky-700">std::cout</span> &lt;&lt; <span className="text-emerald-700">&quot;Ready to celebrate 🎉\\n&quot;</span>;</p>
                  <p className="pl-8"><span className="text-sky-700">std::cout</span> &lt;&lt; <span className="text-emerald-700">&quot;Contact: 0966 077 968&quot;</span>;</p>
                  <p className="pl-4">{'}'}</p>
                  <p className="pl-4"><span className="text-sky-700 font-bold">return</span> <span className="text-emerald-700">0</span>;</p>
                  <p>{'}'}</p>
                </div>

                <p>Sự hiện diện của bạn là niềm vui lớn trong khoảnh khắc đáng nhớ này.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        >
          <div className="w-px h-8 bg-gradient-to-b from-sky-600 to-transparent mb-2" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-sky-700/70 font-bold">Scroll</span>
        </motion.div>
      </section>

      <section className="min-h-[100dvh] w-full flex items-center justify-center px-4 md:px-6 py-8 md:py-16 snap-start relative overflow-hidden text-slate-900">
        <TechBackground />
        <BinaryRail />

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="relative z-10 max-w-5xl w-full space-y-6 md:space-y-10"
        >
          <div className="text-center space-y-3">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-sky-700">
              event.config
            </p>
            <h2 className="relative inline-block font-serif text-3xl md:text-7xl font-black text-[#082f49]">
              Thông Tin Buổi Lễ
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.35 }}
                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
              />
            </h2>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] text-emerald-700">
              save the moment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 overflow-hidden px-1">
            <motion.div
              initial={{ opacity: 0, x: typeof window !== "undefined" && window.innerWidth < 768 ? -40 : 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ y: -2, scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl border border-sky-100 bg-white/90 p-5 shadow-xl shadow-sky-900/8 transition-all backdrop-blur md:p-8"
            >
              <div className="absolute right-4 top-4 font-mono text-[10px] text-slate-300">schedule.start()</div>
              <div className="relative flex items-center gap-4 md:block md:space-y-4">
                <div className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sky-700">
                  <TechIcon name="clock" className="h-7 w-7" />
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-700">Thời gian bắt đầu</p>
                  <p className="text-3xl md:text-5xl font-black text-[#082f49]">16:00</p>
                  <p className="text-sm md:text-lg font-medium text-slate-600">Thứ ba, 09/06/2026</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: typeof window !== "undefined" && window.innerWidth < 768 ? 40 : 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut", delay: typeof window !== "undefined" && window.innerWidth < 768 ? 0.2 : 0 }}
              whileHover={{ y: -2, scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl border border-sky-100 bg-white/90 p-5 shadow-xl shadow-sky-900/8 transition-all backdrop-blur md:p-8"
            >
              <div className="absolute right-4 top-4 font-mono text-[10px] text-slate-300">campus.location</div>
              <div className="relative flex items-center gap-4 md:block md:space-y-4">
                <div className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <TechIcon name="map" className="h-7 w-7" />
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-sky-700">Địa điểm tổ chức</p>
                  <p className="text-2xl md:text-4xl font-black text-[#082f49]">UIT - ĐHQG TP.HCM</p>
                  <p className="text-[11px] md:text-base text-slate-600 font-medium">Khu phố 34, Phường Linh Xuân, Thành phố Hồ Chí Minh</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative group overflow-hidden rounded-[2rem] border border-sky-100 bg-white/90 p-1.5 shadow-2xl shadow-sky-900/10 backdrop-blur md:p-2">
            <div className="absolute left-5 top-5 z-10 flex gap-2">
              {["server", "cloud", "terminal"].map((icon) => (
                <span key={icon} className="grid h-9 w-9 place-items-center rounded-xl border border-white/50 bg-white/85 text-sky-700 shadow-sm backdrop-blur">
                  <TechIcon name={icon as TechIconName} className="h-5 w-5" />
                </span>
              ))}
            </div>
            <div className="relative h-[190px] w-full overflow-hidden rounded-[1.6rem] md:h-[350px]">
              <iframe
                title="Bản đồ địa điểm lễ tốt nghiệp"
                className="w-full h-full border-0 grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
                src="https://www.google.com/maps?q=10.870500435200315,106.80208212893906&z=18&output=embed"
              />
            </div>

            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=10.870500435200315,106.80208212893906"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#082f49] px-4 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-white shadow-lg transition-all hover:bg-sky-700 md:px-6 md:py-3 md:text-xs"
              >
                <TechIcon name="map" className="h-4 w-4" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>


      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;700;800&display=swap");

        :root {
          --font-serif: "Playfair Display", serif;
          --font-sans: "Inter", sans-serif;
        }

        body {
          font-family: var(--font-sans);
        }

        .font-serif {
          font-family: var(--font-serif);
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
