/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { motion } from "framer-motion";
import { ArrowRight, Crown, Sparkles, UsersRound } from "lucide-react";

import {
  MaskedLine,
  useSectionEntry,
} from "../components/common/ui/SectionEntry";
import { GlowField } from "../components/common/ui/GlowField";
import { TICKET_OPTIONS } from "../constants";

const TICKET_ICONS = {
  vip: Crown,
  "conference-only": UsersRound,
};

const TICKET_TONES = {
  vip: {
    icon: "text-amber-300",
    ring: "hover:border-amber-300/40 hover:bg-amber-400/[0.06]",
    arrow: "group-hover:text-amber-200",
  },
  "conference-only": {
    icon: "text-cyan-300",
    ring: "hover:border-cyan-300/40 hover:bg-cyan-400/[0.06]",
    arrow: "group-hover:text-cyan-200",
  },
};

export const RegisterSection = () => {
  const entry = useSectionEntry();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4 py-32 sm:px-6"
      id="register">

      {/* Pooled light behind the glass */}
      <GlowField
        className="opacity-55"
        blobs={[
          {
            className: "top-[12%] left-[10%] w-[380px] h-[380px] bg-emerald-500/25",
          },
          {
            className: "bottom-[14%] right-[8%] w-[360px] h-[360px] bg-cyan-500/25",
          },
          {
            className:
              "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[460px] bg-purple-500/15",
          },
        ]}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-screen-xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <motion.div
            className="nx-glass-chip mb-5 inline-flex items-center gap-2 px-4 py-2"
            {...entry.fade(0, 14, 0.6)}>
            <Sparkles className="h-5 w-5 text-emerald-400" />
            <span className="font-semibold text-emerald-300">Registration</span>
          </motion.div>

          <h2 className="mb-5 text-4xl font-bold sm:text-5xl md:text-7xl">
            <MaskedLine delay={0.1}>
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">
                Choose Your Pass
              </span>
            </MaskedLine>
          </h2>

          <motion.p
            className="mx-auto max-w-2xl px-2 text-base text-white/70 sm:text-lg md:text-xl"
            {...entry.fade(0.24, 16)}>
            Select the access type that matches your attendance plan
          </motion.p>
        </div>

        {/* Ticket Cards */}
        <motion.div
          className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2"
          {...entry.fade(0.36, 24)}>
          {TICKET_OPTIONS.map((option, idx) => {
            const Icon = TICKET_ICONS[option.id] ?? Sparkles;
            const tone = TICKET_TONES[option.id] ?? TICKET_TONES.vip;

            return (
              <motion.a
                key={option.id}
                className={`nx-glass-pane group relative flex min-h-[220px] flex-col justify-between overflow-hidden p-6 transition-colors duration-300 sm:p-7 ${tone.ring}`}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}>

                {/* Refracted bloom inside the glass */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

                <div className="relative z-10">
                  <div className="nx-glass-icon mb-5 flex h-14 w-14 items-center justify-center">
                    <Icon className={`h-7 w-7 ${tone.icon}`} />
                  </div>

                  <span className="mb-1.5 block text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">
                    {option.eyebrow}
                  </span>
                  <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                    {option.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                    {option.copy}
                  </p>
                </div>

                <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-semibold text-white/80">
                  <span>Register now</span>
                  <ArrowRight
                    className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${tone.arrow}`}
                  />
                </div>

                {/* Hairline separator (shared glass vocabulary) */}
                <div className="absolute right-0 bottom-0 left-0 h-px bg-white/[0.06] transition-colors duration-500 group-hover:bg-white/15" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
