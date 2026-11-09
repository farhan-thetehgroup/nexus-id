/* eslint-disable no-undef */
import { motion } from "framer-motion";
import { Mic } from "lucide-react";

import {
  MaskedLine,
  gridSlide,
  useSectionEntry,
} from "../components/common/ui/SectionEntry";
import { CursorSpotlight } from "../components/common/ui/CursorSpotlight";
import { GlowField } from "../components/common/ui/GlowField";
import { SPEAKERS } from "../constants";

const SpeakerCard = ({ speaker, index }) => {
  const isExclusive = speaker.isExclusive || false;

  return (
    <motion.div
      className="group relative"
      {...gridSlide(index, 0.12)}>
      {/* Colored field the frost refracts, just behind the glass edge */}
      <div
        className={`absolute -inset-2 rounded-[2rem] bg-gradient-to-br ${
          isExclusive
            ? "from-emerald-400/40 via-cyan-400/30 to-teal-400/30"
            : "from-emerald-500/25 to-cyan-500/20"
        } opacity-30 blur-2xl`}
      />

      <motion.div
        className="nx-glass-pane relative h-full overflow-hidden p-6 transition-colors duration-300 group-hover:border-white/30"
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -6 }}>
        {/* Refracted bloom inside the glass */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-emerald-400/25 to-cyan-400/20 blur-3xl opacity-30" />
        {/* Sheen along the top edge of the pane */}
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Speaker Image */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-30" />

            <div className="relative h-32 w-32 rounded-full border border-white/20 bg-white/[0.06] p-1.5 backdrop-blur-xl">
              <div className="h-full w-full overflow-hidden rounded-full">
                <img
                  alt={speaker.fullName}
                  className="h-full w-full object-cover"
                  src={speaker.image}
                />
              </div>
            </div>

            {isExclusive && (
              <span className="nx-glass-chip absolute -top-1 -right-2 z-20 px-3 py-1">
                <span className="nx-meta text-[0.55rem] text-emerald-300">
                  Exclusive
                </span>
              </span>
            )}
          </div>

          <h3 className="mb-2 text-xl font-bold text-white">
            {speaker.fullName}
          </h3>

          <p className="mb-1 text-sm font-semibold text-emerald-300">
            {speaker.jobTitle}
          </p>

          <p className="text-sm text-white/60">{speaker.company}</p>
        </div>

        <CursorSpotlight above />
      </motion.div>
    </motion.div>
  );
};

export const SpeakersSection = () => {
  const entry = useSectionEntry();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4 py-32"
      id="speakers">
      {/* Pooled color fields the glass needs behind the grid */}
      <GlowField
        className="opacity-55"
        blobs={[
          {
            className:
              "top-[18%] left-[8%] w-[360px] h-[360px] bg-emerald-500/30",
          },
          {
            className:
              "top-[26%] right-[10%] w-[420px] h-[420px] bg-cyan-500/25",
          },
          {
            className:
              "-bottom-40 left-[35%] w-[480px] h-[400px] bg-teal-500/20",
          },
          {
            // Receives the light arriving from the sponsor wall above.
            className: "-top-32 right-[28%] w-[360px] h-[360px] bg-emerald-500/20",
          },
        ]}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            className="nx-glass-chip mb-6 inline-flex items-center gap-2 px-4 py-2"
            {...entry.fade(0, 14, 0.6)}>
            <Mic className="h-5 w-5 text-emerald-400" />
            <span className="font-semibold text-emerald-300">
              Industry Experts
            </span>
          </motion.div>

          <h2 className="mb-6 text-5xl font-bold md:text-7xl">
            <MaskedLine delay={0.1}>
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Our Speakers
              </span>
            </MaskedLine>
          </h2>

          <motion.p
            className="mx-auto max-w-2xl text-xl text-white/70"
            {...entry.fade(0.24, 16)}>
            Learn from leading experts in AI, Cybersecurity, and Enterprise
            Technology
          </motion.p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SPEAKERS.map((speaker, index) => (
            <SpeakerCard key={speaker.id || index} index={index} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};
