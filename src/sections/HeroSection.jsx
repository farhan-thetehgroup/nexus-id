import { BrainCircuit, ShieldCheck, Cpu, ArrowRight, ChevronDown } from "lucide-react";

import { DotWorldMap } from "../components/aurora/DotWorldMap";
import dotMapDense from "../components/aurora/dotMapDense.json";
import { NexusWordmarkSvg } from "../components/aurora/NexusWordmarkSvg";
import { GlassButton } from "../components/common/ui/GlassButton";
import { Typewriter } from "../components/common/ui/Typewriter";
import { LOCATION_DATA } from "../constants";

const TECH_PILLARS = [
  { icon: BrainCircuit, label: "Artificial Intelligence" },
  { icon: ShieldCheck, label: "Cybersecurity" },
  { icon: Cpu, label: "Enterprise Tech" },
];

/**
 * NEXUS Indonesia hero — 2027 design language: the brand-letterform SVG
 * wordmark with its pulsing beam over the full-bleed halftone map, glass
 * action pills and the monospace kicker. The event facts (Indonesia,
 * venue, date) stay the city site's own.
 */
export const HeroSection = ({ motion = true, scrollToSection }) => {
  const eventLine = `INDONESIA — ${LOCATION_DATA.date.toUpperCase()}`;

  return (
    <section
      className="nx-aurora-theme relative isolate min-h-[100svh] overflow-hidden"
      id="hero">
      <div className="pointer-events-none absolute inset-0">
        <DotWorldMap
          anchorX={1}
          baseAlpha={0.3}
          className="block h-full w-full opacity-70"
          dotMapData={dotMapDense}
          fit="cover"
          focusAlpha={0.72}
          motion={motion}
        />
      </div>

      <div className="nx-vignette pointer-events-none absolute inset-0" />
      <div className="nx-grain pointer-events-none absolute inset-0" />

      <div className="relative z-10 flex min-h-[100svh] flex-col px-6 pt-24 pb-8 sm:px-10 sm:pt-28">
        <h1 className="sr-only">
          NEXUS Indonesia 2026 — Connecting Innovation Across the Asia-Pacific
        </h1>

        <div
          aria-hidden="true"
          className="flex flex-1 flex-col items-center justify-center py-4 text-center sm:py-8">
          <p
            className="nx-meta nx-meta--hero nx-rise mb-4 sm:mb-6"
            style={{ "--nx-delay": "0ms" }}>
            {eventLine}
          </p>

          <NexusWordmarkSvg className="nx-rise" motion={motion} />

          <div
            className="nx-rise mt-4 min-h-[3.2rem] sm:mt-6 sm:min-h-[3.4rem]"
            style={{ "--nx-delay": "220ms" }}>
            <Typewriter
              className="text-[clamp(1.05rem,2.6vw,1.85rem)] font-light tracking-[0.03em] text-[#eafaf4]"
              text="Connecting Innovation Across the Asia-Pacific"
            />
          </div>

          {/* Tech pillars — the old tilt cards, retold as glass chips.
              Hidden on short viewports so the CTA never falls below the fold. */}
          <div
            className="nx-rise mt-6 hidden flex-wrap items-center justify-center gap-2 sm:gap-3 [@media(min-height:720px)]:flex"
            style={{ "--nx-delay": "300ms" }}>
            {TECH_PILLARS.map(({ icon: Icon, label }) => (
              <span
                className="nx-glass-chip inline-flex items-center gap-2 px-4 py-2"
                key={label}>
                <Icon className="h-4 w-4 text-[#3dffa2]" />
                <span className="nx-meta nx-meta--bright text-[0.6rem] sm:text-[0.68rem]">
                  {label}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <GlassButton
              as="button"
              className="nx-rise gap-3 px-8 py-4"
              onClick={() => scrollToSection?.("register")}
              tone="emerald"
              style={{ "--nx-delay": "380ms" }}>
              <span className="nx-meta nx-meta--bright">Register Now</span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 text-[#3dffa2] transition-transform duration-300 group-hover:translate-x-1"
              />
            </GlassButton>

            <GlassButton
              as="button"
              className="nx-rise gap-3 px-8 py-4"
              onClick={() => scrollToSection?.("agenda")}
              style={{ "--nx-delay": "440ms" }}>
              <span className="nx-meta nx-meta--bright">View Agenda</span>
              <ChevronDown
                aria-hidden="true"
                className="h-4 w-4 text-white/70 transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </GlassButton>
          </div>

          <p
            className="nx-rise nx-mono text-center text-[0.58rem] tracking-[0.3em] text-[#cdeae2] uppercase sm:text-[0.7rem]"
            style={{ "--nx-delay": "500ms" }}>
            {LOCATION_DATA.title}
          </p>
        </div>
      </div>
    </section>
  );
};
