/* eslint-disable no-undef */
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Building2 } from "lucide-react";

import {
  MaskedLine,
  useSectionEntry,
} from "../components/common/ui/SectionEntry";
import { GlowField } from "../components/common/ui/GlowField";
import { DotFieldInteraction } from "../components/common/ui/DotFieldInteraction";
import { PartnerLogoCard } from "../components/common/ui/PartnersMarquee";
import { SUPPORTED_BY } from "../constants";

export const SupportedBySection = () => {
  const sectionRef = useRef(null);
  const entry = useSectionEntry();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.25,
  });

  const blobOpacity = useTransform(progress, [0, 1], [0.1, 0.3]);
  const blobScale = useTransform(progress, [0, 1], [0.8, 1.2]);

  return (
    <section
      className="relative flex min-h-screen items-center py-24 md:py-28"
      id="supported-by"
      ref={sectionRef}
    >
      {/* Constellation dot-grid — same interactive field as the other sections */}
      <DotFieldInteraction />

      {/* Ambient light — blobs overflow this section into the next one */}
      <GlowField
        blobs={[
          {
            className: "top-20 -left-24 h-96 w-96 bg-emerald-400/20",
            style: { opacity: blobOpacity, scale: blobScale },
            animate: { x: [0, 50, 0], y: [0, -30, 0] },
            transition: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          },
          {
            className: "-right-28 bottom-20 h-[500px] w-[500px] bg-cyan-400/20",
            style: { opacity: blobOpacity, scale: blobScale },
            animate: { x: [0, -50, 0], y: [0, 30, 0] },
            transition: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          },
          {
            // Straddles the top seam into the hero above.
            className: "-top-24 right-[30%] h-72 w-72 bg-cyan-400/10",
          },
          {
            // Straddles the bottom seam into the sponsors section.
            className:
              "-bottom-40 left-[30%] h-[420px] w-[420px] bg-emerald-400/15",
          },
        ]}
      />

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.div
            className="nx-glass-chip mb-6 inline-flex items-center gap-2 px-5 py-2"
            {...entry.fade(0, 14, 0.6)}
          >
            <Building2 className="h-5 w-5 text-emerald-400" />
            <span className="font-semibold text-emerald-300">
              Proudly supported by government institutions
            </span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl">
            <MaskedLine delay={0.1}>
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Supported By
              </span>
            </MaskedLine>
          </h2>

          <motion.p
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl"
            {...entry.fade(0.24, 16)}
          >
            We are honored to be supported by esteemed government institutions
            that recognize the importance of technology and innovation in
            driving national progress and digital transformation.
          </motion.p>
        </div>

        {/* Government Logos Grid */}
        <motion.div className="mt-16" {...entry.fade(0.36, 24)}>
          <SupportedByGrid logos={SUPPORTED_BY} />
        </motion.div>
      </div>
    </section>
  );
};

const SupportedByGrid = ({ logos = [] }) => {
  const remainder = logos.length % 3;
  const lastIndex = logos.length - 1;

  return (
    <div className="relative mx-auto max-w-7xl py-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {logos.map((logo, i) => {
          // Center the last item if there's only 1 remaining.
          if (remainder === 1 && i === lastIndex) {
            return (
              <div
                className="sm:col-span-2 md:col-span-1 md:col-start-2"
                key={`supported-${i}`}
              >
                <PartnerLogoCard className="h-40 w-full md:h-48" logo={logo} />
              </div>
            );
          }

          // Center the last 2 items if there are 2 remaining — each card is
          // capped to one grid-column's width so the pair reads as a
          // centered subset of the same 3-column row, not a wider duo.
          if (remainder === 2 && i === lastIndex - 1) {
            return (
              <div
                className="col-span-1 flex justify-center gap-6 sm:col-span-2 md:col-span-3"
                key={`supported-wrapper-${i}`}
              >
                <PartnerLogoCard
                  className="h-40 w-full max-w-sm md:h-48 md:max-w-[calc((100%-3rem)/3)]"
                  logo={logo}
                />
                <PartnerLogoCard
                  className="h-40 w-full max-w-sm md:h-48 md:max-w-[calc((100%-3rem)/3)]"
                  logo={logos[lastIndex]}
                />
              </div>
            );
          }

          // Skip the last item — it was already rendered with the pair above.
          if (remainder === 2 && i === lastIndex) {
            return null;
          }

          return (
            <PartnerLogoCard
              className="h-40 w-full md:h-48"
              key={`supported-${i}`}
              logo={logo}
            />
          );
        })}
      </div>
    </div>
  );
};
