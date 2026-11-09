/* eslint-disable no-undef */
import { motion } from "framer-motion";

/**
 * Infinite logo marquee, extracted from PastSponsorSection so it can be
 * reused anywhere a scrolling logo wall is wanted (the homepage sponsor
 * section itself now uses a static grid instead — see PartnersGrid).
 *
 * Needs the `nx-marquee-track` / `nx-marquee-row` keyframes, which live in
 * PartnersMarquee.css. Import that stylesheet once wherever this component
 * is used.
 */
export const PartnersMarquee = ({ logos = [], speedMs = 40000 }) => {
  // Two rows of logos keeps each track wider than a desktop viewport once
  // duplicated (a four-row split would leave visible gaps in the loop for
  // shorter logo lists).
  const rowsCount = 2;
  const rowDirections = ["rtl", "ltr"];
  const rowSpeedFactors = [1, 1.06];

  const rows = Array.from({ length: rowsCount }, () => []);
  logos.forEach((logo, i) => rows[i % rowsCount].push(logo));

  return (
    // One elliptical fog mask wraps both rows: the band fades out toward
    // every edge with a curved, circular vignette.
    <div
      className="relative mx-auto max-w-7xl overflow-hidden py-6"
      style={{
        maskImage:
          "radial-gradient(ellipse 48% 78% at 50% 50%, black 40%, rgba(0, 0, 0, 0.55) 70%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 48% 78% at 50% 50%, black 40%, rgba(0, 0, 0, 0.55) 70%, transparent 100%)",
      }}>
      {rows.map((row, index) => (
        <MarqueeRow
          direction={rowDirections[index]}
          index={index}
          key={index}
          logos={row}
          speedMs={speedMs * rowSpeedFactors[index]}
        />
      ))}
    </div>
  );
};

const MarqueeRow = ({ direction, index, logos = [], speedMs }) => {
  // Repeat the row's logos so the -50% loop always has content to spare.
  const repeated = [...logos, ...logos];
  const track = [...repeated, ...repeated];

  return (
    <div className={`nx-marquee-row relative ${index > 0 ? "mt-6" : ""}`}>
      <div
        className={`nx-marquee-track flex w-max gap-6 ${
          direction === "ltr" ? "nx-marquee-track--reverse" : ""
        }`}
        style={{ "--nx-marquee-duration": `${speedMs / 1000}s` }}>
        {track.map((logo, i) => (
          <PartnerLogoCard key={`row${index}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
};

/**
 * Glass frame around a white logo plate: the frost rim carries the page's
 * material, the opaque plate keeps the client logos legible. No
 * backdrop-filter — the plate would hide it and 100+ filtered layers
 * moving in the marquee would cost real frames. Also used (statically) by
 * PartnersGrid so both layouts share the same card look.
 */
export const PartnerLogoCard = ({ logo, className = "h-28 w-48 shrink-0" }) => {
  const handleClick = () => {
    if (logo.url) {
      window.open(logo.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      className={`nx-glass-frame group relative flex items-center justify-center p-2 transition-colors duration-300 hover:border-white/30 ${className} ${
        logo.url ? "cursor-pointer" : ""
      }`}
      onClick={handleClick}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}>
      {/* Sheen along the frame's top edge */}
      <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <span className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
        <img
          alt={logo.alt}
          className="h-auto max-h-24 w-auto max-w-[80%] object-contain"
          src={logo.src}
        />
      </span>
    </motion.div>
  );
};
