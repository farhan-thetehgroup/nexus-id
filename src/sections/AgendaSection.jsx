/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { useEffect, useRef, useState } from "react";
import { animate, AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import { Calendar, Clock, Coffee, UtensilsCrossed, Mic, User, UserPlus, Users, Monitor } from "lucide-react";

import {
  MaskedLine,
  useSectionEntry,
} from "../components/common/ui/SectionEntry";
import { GlowField } from "../components/common/ui/GlowField";
import { CursorSpotlight as TabCursorSpotlight } from "../components/common/ui/CursorSpotlight";
import { useMotionPreference } from "../components/aurora/useMotionPreference";
import { AGENDA_DAY_1, AGENDA_DAY_2, LOCATION_DATA } from "../constants";

const SpeakerAvatarWithTooltip = ({ speaker, children, className = "" }) => (
  <div className={`group/tooltip relative inline-block ${className}`}>
    {children}
    <div className="pointer-events-none invisible absolute bottom-full left-1/2 z-[100] mb-2 min-w-[160px] max-w-[220px] -translate-x-1/2 rounded-xl border border-white/15 bg-[#07161f]/95 px-3 py-2 text-center opacity-0 shadow-[0_18px_40px_rgba(2,8,20,0.55)] backdrop-blur-xl transition-all duration-200 group-hover/tooltip:visible group-hover/tooltip:opacity-100">
      <p className="text-sm font-semibold text-white">{speaker.name}</p>
      {speaker.role && <p className="mt-0.5 text-xs break-words whitespace-normal text-white/55">{speaker.role}</p>}
    </div>
  </div>
);

const AvatarRing = ({ children, className = "" }) => (
  <div className={`relative overflow-hidden rounded-full border border-white/15 bg-white/[0.04] transition-colors duration-300 group-hover:border-white/30 ${className}`}>
    {children}
  </div>
);

/* FT-style inline photo row: small fixed-size rings, one flex-wrap line,
   so speaker photos never get a tall column of their own. */
const PhotoStack = ({ children }) => (
  <div className="my-2 flex flex-wrap items-center gap-1.5 sm:gap-2">{children}</div>
);

const InlineAvatar = ({ speaker, badge, badgeTone = "bg-purple-500" }) => (
  <SpeakerAvatarWithTooltip speaker={speaker}>
    <AvatarRing className="h-9 w-9 sm:h-10 sm:w-10">
      <img
        alt={speaker.name}
        className="h-full w-full object-cover"
        src={speaker.image}
      />
      {badge && (
        <div className={`absolute -bottom-0.5 -right-0.5 rounded-full ${badgeTone} border border-[#07161f] p-0.5 sm:border-2 sm:p-1`}>
          {badge}
        </div>
      )}
    </AvatarRing>
  </SpeakerAvatarWithTooltip>
);

const ROW_STAGGER = 0.05;

const AgendaRow = ({ agendaItem, index }) => {
  const isBreak = agendaItem.type === "break";
  const isRegistration = agendaItem.type === "registration";
  const isMeeting = agendaItem.type === "meeting";
  const isRoundtable = agendaItem.type === "roundtable";
  const isDemoSession = agendaItem.type === "demo-session";
  const isBreakAndDemo = agendaItem.type === "break&demo-session";
  const hasSpeakerPhotos =
    !isDemoSession && !isBreakAndDemo && !isBreak && !isRegistration && !isMeeting;

  /* Day switches: rows leave and arrive one by one — exit and enter share the
     same stagger so each transition reads as a single wave down the list. */
  const stagger = (index % 6) * ROW_STAGGER;
  const rowEase = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: stagger, ease: rowEase }}
      exit={{
        opacity: 0,
        x: -20,
        transition: { duration: 0.28, delay: stagger, ease: "easeIn" },
      }}
      className="nx-glass-pane group relative rounded-2xl px-4 py-3.5 transition-colors duration-300 hover:border-white/30 sm:px-6 sm:py-4">

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-6">
        {/* Time */}
        <div className="w-full flex-shrink-0 sm:w-32 md:w-44">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 flex-shrink-0 text-emerald-300" />
            <span className="text-sm font-semibold whitespace-nowrap text-emerald-300">
              {agendaItem.time}
            </span>
          </div>
        </div>

        {/* Icon column — only for rows whose identity is an icon/logo;
            speaker photos live inline in the content stack (FT-style). */}
        <div className="flex-shrink-0">
          {isDemoSession ? (
            <div className="relative h-12 w-20 overflow-hidden rounded-xl border border-white/15 bg-white p-1 transition-colors duration-300 group-hover:border-white/30 sm:h-16 sm:w-28 sm:p-1.5 md:h-20 md:w-36 md:p-2">
              <img
                alt={agendaItem.title}
                className="h-full w-full object-contain"
                src={agendaItem.image}
              />
            </div>
          ) : isRegistration ? (
            <div className="nx-glass-icon flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14 md:h-16 md:w-16">
              <UserPlus className="h-6 w-6 text-cyan-300 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </div>
          ) : isMeeting ? (
            <div className="nx-glass-icon flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14 md:h-16 md:w-16">
              <Users className="h-6 w-6 text-teal-300 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </div>
          ) : isBreakAndDemo ? (
            agendaItem.images && agendaItem.images.length > 0 ? (
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {/* Lunch Break Icon */}
                <div className="nx-glass-icon flex h-12 w-12 flex-shrink-0 items-center justify-center sm:h-14 sm:w-14 md:h-16 md:w-16">
                  <UtensilsCrossed className="h-6 w-6 text-amber-300 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                </div>

                {/* Demo Session Logos */}
                {agendaItem.images.map((img, idx) => (
                  <a
                    key={idx}
                    href={img.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/logo">
                    <div className="relative h-16 w-24 overflow-hidden rounded-xl border border-white/15 bg-white p-1.5 transition-colors duration-300 group-hover/logo:border-white/30 sm:h-20 sm:w-32 sm:p-2 md:h-24 md:w-40 md:p-2.5">
                      <img
                        alt={img.alt}
                        className="h-full w-full object-contain"
                        src={img.src}
                      />
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="nx-glass-icon flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14 md:h-16 md:w-16">
                <div className="flex items-center gap-1">
                  <Coffee className="h-4 w-4 text-purple-300" />
                  <Monitor className="h-4 w-4 text-purple-300" />
                </div>
              </div>
            )
          ) : isBreak ? (
            <div className="nx-glass-icon flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14 md:h-16 md:w-16">
              {agendaItem.title.toLowerCase().includes("lunch") || agendaItem.title.toLowerCase().includes("dinner") ? (
                <UtensilsCrossed className="h-6 w-6 text-amber-300 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              ) : (
                <Coffee className="h-6 w-6 text-amber-300 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              )}
            </div>
          ) : null}
        </div>

        {/* Content */}
        <div className="min-w-0 w-full flex-1 sm:w-auto">
          {isRoundtable ? (
            /* Roundtable Discussion Layout */
            <div className="space-y-3 sm:space-y-4">
              <h3 className="mb-1 text-lg font-bold text-white sm:text-lg md:text-xl">
                {agendaItem.title}
              </h3>
              {agendaItem.description && (
                <p className="mb-3 text-sm text-white/60 sm:mb-4 sm:text-sm">
                  {agendaItem.description}
                </p>
              )}
              {agendaItem.roundtables && (
                <PhotoStack>
                  {agendaItem.roundtables.flatMap((roundtable, rIdx) =>
                    roundtable.speakers && roundtable.speakers.length > 0
                      ? roundtable.speakers.map((speaker, sIdx) => (
                          <InlineAvatar key={`${rIdx}-${sIdx}`} speaker={speaker} />
                        ))
                      : []
                  )}
                </PhotoStack>
              )}
              {agendaItem.roundtables && agendaItem.roundtables.map((roundtable, rIdx) => (
                <div key={rIdx} className="rounded-r-xl border-l-2 border-cyan-400/40 bg-white/[0.03] py-2 pl-3 sm:border-l-4 sm:pl-4">
                  <h4 className="mb-1.5 text-base font-semibold text-cyan-300 sm:mb-2 sm:text-base">
                    {roundtable.title}
                  </h4>
                  {roundtable.speakers && roundtable.speakers.length > 0 && (
                    <div className="space-y-1">
                      {roundtable.speakers.map((speaker, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5 sm:gap-2">
                          <Mic className="h-3 w-3 flex-shrink-0 text-cyan-300 sm:h-3 sm:w-3" />
                          <p className="text-xs font-medium break-words text-cyan-200/90 sm:text-xs">
                            {speaker.name}
                            {speaker.role && ` • ${speaker.role}`}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <>
              <h3 className="mb-1 text-lg font-bold text-white sm:text-lg md:text-xl">
                {agendaItem.title}
              </h3>

              {/* Compact inline speaker photo stack (Title → Photos → Names) */}
              {hasSpeakerPhotos &&
                (agendaItem.moderator || agendaItem.speaker || (agendaItem.speakers && agendaItem.speakers.length > 0)) && (
                  <PhotoStack>
                    {agendaItem.moderator && (
                      <InlineAvatar
                        speaker={agendaItem.moderator}
                        badge={<User className="h-2 w-2 text-white sm:h-2.5 sm:w-2.5" />}
                      />
                    )}
                    {agendaItem.speaker && (
                      <InlineAvatar
                        speaker={agendaItem.speaker}
                        badge={<Mic className="h-2 w-2 text-white sm:h-2.5 sm:w-2.5" />}
                        badgeTone="bg-emerald-500"
                      />
                    )}
                    {(agendaItem.speakers || []).map((speaker, idx) => (
                      <InlineAvatar key={idx} speaker={speaker} />
                    ))}
                  </PhotoStack>
                )}

              {/* Description for demo-session and break&demo-session */}
              {(isDemoSession || isBreakAndDemo) && agendaItem.description && (
                <p className="mb-1.5 text-sm break-words text-white/60 sm:mb-2 sm:text-sm">
                  {agendaItem.description}
                </p>
              )}

              {/* Speaker/Moderator Info */}
              {!isBreak && !isRegistration && !isMeeting && !isDemoSession && !isBreakAndDemo && (
                <div className="mb-1.5 space-y-1 sm:mb-2">
                  {agendaItem.moderator && (
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <User className="h-3 w-3 flex-shrink-0 text-purple-300 sm:h-3 sm:w-3" />
                      <p className="text-xs font-semibold break-words text-purple-300 sm:text-xs">
                        <span className="hidden sm:inline">Moderator: </span>
                        <span className="sm:hidden">Mod: </span>
                        {agendaItem.moderator.name}
                        {agendaItem.moderator.role && ` • ${agendaItem.moderator.role}`}
                      </p>
                    </div>
                  )}
                  {agendaItem.speaker && (
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Mic className="h-3 w-3 flex-shrink-0 text-emerald-300 sm:h-3 sm:w-3" />
                      <p className="text-xs font-semibold break-words text-emerald-300 sm:text-xs">
                        {agendaItem.speaker.name}
                        {agendaItem.speaker.role && ` • ${agendaItem.speaker.role}`}
                      </p>
                    </div>
                  )}
                  {agendaItem.speakers && agendaItem.speakers.length > 0 && !agendaItem.moderator && (
                    <div className="space-y-1">
                      {agendaItem.speakers.map((speaker, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                          <Mic className="h-3 w-3 flex-shrink-0 text-cyan-300 sm:h-3 sm:w-3" />
                          <p className="text-xs font-semibold break-words text-cyan-300 sm:text-xs">
                            {speaker.name}
                            {speaker.role && ` • ${speaker.role}`}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Description (for non–demo-session and non-break&demo-session; those use block above) */}
              {agendaItem.description && !isDemoSession && !isBreakAndDemo && (
                <p className="text-sm break-words text-white/60 sm:text-sm">
                  {agendaItem.description}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* Day switcher — append a new AGENDA_DAY_* constant here and the tab appears;
   the tab row renders only the days this site actually carries data for. */
const AGENDA_DAYS = [
  { id: "day-1", label: "Day 1", items: AGENDA_DAY_1 },
  { id: "day-2", label: "Day 2", items: AGENDA_DAY_2 },
];

/* Glass Tabs (Framer marketplace parity): a frosted pill that stretches from
   tab to tab. The pill travels on TWO different springs — x is stiff and fast,
   width is soft and underdamped — so it stretches toward the next tab and
   settles with a soft overshoot. A duplicate label layer, white and clipped to
   the pill's exact box each frame, switches the label colour exactly where the
   glass passes. The glass pill can be grabbed and thrown across the bar (snap
   to the nearest tab on release). Hover follows the site-wide CursorSpotlight
   vocabulary — a soft radial light inside the bar — never a separate pill. */
const DAY_PILL_SPRING_X = { type: "spring", stiffness: 520, damping: 32 };
const DAY_PILL_SPRING_W = { type: "spring", stiffness: 280, damping: 19 };

const DayTabs = ({ days, activeId, onChange }) => {
  const barRef = useRef(null);
  const [tabs, setTabs] = useState(null); // [{...day, x, w}] measured vs the bar
  const [barW, setBarW] = useState(0);
  const initializedRef = useRef(false);
  const motionOk = useMotionPreference();

  const pillX = useMotionValue(0);
  const pillW = useMotionValue(0);

  const measure = () => {
    const bar = barRef.current;
    if (!bar) return;
    const barLeft = bar.getBoundingClientRect().left;
    const next = days.map((day) => {
      const box = bar
        .querySelector(`[data-day="${day.id}"]`)
        ?.getBoundingClientRect();
      return box ? { ...day, x: box.left - barLeft, w: box.width } : null;
    });
    if (next.every(Boolean)) {
      setTabs(next);
      setBarW(bar.offsetWidth);
    }
  };

  useEffect(() => {
    measure();
    const bar = barRef.current;
    const observer = new ResizeObserver(() => measure());
    observer.observe(bar);
    // Webfonts load late and shift the label metrics — re-measure once ready.
    if (document.fonts?.ready) document.fonts.ready.then(() => measure());
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  /* Place the pill when the active day changes (or re-place it on reflow). */
  useEffect(() => {
    const target = (tabs ?? []).find((t) => t.id === activeId) ?? (tabs ?? [])[0];
    if (!target) return;
    const place = (spring) => {
      if (!motionOk && spring) {
        pillX.set(target.x + (target.x - pillX.get()) * 0); // instant
        pillW.set(target.w);
      } else if (!spring) {
        pillX.set(target.x);
        pillW.set(target.w);
      } else {
        animate(pillX, target.x, DAY_PILL_SPRING_X);
        animate(pillW, target.w, DAY_PILL_SPRING_W);
      }
    };
    if (!initializedRef.current || !motionOk) {
      initializedRef.current = true;
      place(false);
    } else {
      place(true);
    }
  }, [activeId, tabs, motionOk, pillX, pillW]);

  /* Label clip = the pill's box relative to the bar, refreshed every frame. */
  const labelClip = useTransform([pillX, pillW], ([x, w]) => {
    if (!barW) return "inset(0 100% 0 0 round 999px)";
    const left = Math.max(0, x);
    const right = Math.max(0, barW - Math.min(x + w, barW));
    return `inset(0 ${right}px 0 ${left}px round 999px)`;
  });

  const handleDragEnd = () => {
    const center = pillX.get() + pillW.get() / 2;
    let best = null;
    let bestDist = Infinity;
    for (const t of tabs ?? []) {
      const d = Math.abs(t.x + t.w / 2 - center);
      if (d < bestDist) {
        best = t;
        bestDist = d;
      }
    }
    if (!best) return;
    if (!motionOk) {
      pillX.set(best.x);
      pillW.set(best.w);
    } else {
      animate(pillX, best.x, DAY_PILL_SPRING_X);
      animate(pillW, best.w, DAY_PILL_SPRING_W);
    }
    if (best.id !== activeId) onChange(best.id);
  };

  return (
    <div
      aria-label="Agenda day switcher"
      className="nx-glass-chip relative inline-flex items-stretch overflow-hidden p-1.5"
      ref={barRef}
      role="tablist">
      {days.map((day) => (
        <button
          aria-selected={day.id === activeId}
          className={`[font-family:var(--nx-mono)] relative z-[5] min-w-[92px] flex-1 basis-0 cursor-pointer rounded-full px-5 py-2 text-[0.6rem] font-normal uppercase tracking-[0.22em] transition-colors duration-300 hover:text-white sm:text-[0.72rem] text-white/55`}
          data-day={day.id}
          key={day.id}
          onClick={() => onChange(day.id)}
          role="tab"
          type="button">
          {day.label}
        </button>
      ))}

      {/* The stretchy glass pill itself — frost fill + top rim + soft depth */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-1.5 left-0 z-10 cursor-grab rounded-full border border-white/20 bg-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_10px_28px_rgba(2,8,20,0.35)] active:cursor-grabbing"
        drag="x"
        dragConstraints={barRef}
        dragElastic={0.08}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        style={{ width: pillW, x: pillX }}
      />

      {/* Site-wide hover vocabulary: a soft radial light under the pointer,
          clipped inside the bar (never an element that spills past the tabs). */}
      <TabCursorSpotlight
        above
        color="rgba(255, 255, 255, 0.14)"
        fadeColor="rgba(255, 255, 255, 0.06)"
        size={140}
      />

      {/* Duplicate label layer in active colour, clipped to the pill each frame */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 flex items-stretch rounded-full p-1.5"
        style={{ clipPath: labelClip }}>
        {days.map((day) => (
          <span
            className="[font-family:var(--nx-mono)] flex min-w-[92px] flex-1 basis-0 items-center justify-center px-5 text-[0.6rem] font-normal uppercase tracking-[0.22em] text-white sm:text-[0.72rem]"
            key={`glass-${day.id}`}>
            {day.label}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const AgendaSection = () => {
  const entry = useSectionEntry();
  const [activeDay, setActiveDay] = useState(AGENDA_DAYS[0].id);

  const currentDay =
    AGENDA_DAYS.find((day) => day.id === activeDay) ?? AGENDA_DAYS[0];
  const currentAgenda = currentDay.items;

  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4 py-32 sm:px-6"
      id="agenda">

      {/* Pooled light behind the glass */}
      <GlowField
        className="opacity-55"
        blobs={[
          {
            className: "top-[10%] right-[8%] w-[380px] h-[380px] bg-cyan-500/25",
          },
          {
            className: "bottom-[12%] left-[8%] w-[360px] h-[360px] bg-emerald-500/25",
          },
          {
            className:
              "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[460px] bg-purple-500/15",
          },
          {
            className: "-top-40 right-[28%] w-[380px] h-[380px] bg-cyan-500/15",
          },
        ]}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-14">
          <motion.div
            className="nx-glass-chip mb-4 inline-flex items-center gap-1.5 px-3 py-1.5 sm:mb-5 sm:gap-2 sm:px-4 sm:py-2"
            {...entry.fade(0, 14, 0.6)}>
            <Calendar className="h-4 w-4 text-emerald-400 sm:h-5 sm:w-5" />
            <span className="text-xs font-semibold text-emerald-300 sm:text-sm md:text-base">
              Event Schedule
            </span>
          </motion.div>

          <h2 className="mb-4 text-3xl font-bold sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <MaskedLine delay={0.1}>
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">
                Event Agenda
              </span>
            </MaskedLine>
          </h2>

          <motion.p
            className="mx-auto max-w-3xl px-2 text-sm text-white/70 sm:text-base md:text-lg lg:text-xl"
            {...entry.fade(0.24, 16)}>
            Join us for a day of insightful sessions, workshops, and networking opportunities
          </motion.p>
        </div>

        {/* Event date pill */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-center">
            <motion.div
              className="nx-glass-chip inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5"
              {...entry.fade(0.36, 16)}>
              <Clock className="h-4 w-4 text-emerald-300 sm:h-5 sm:w-5" />
              <span className="text-sm font-semibold whitespace-nowrap text-white sm:text-base">
                {LOCATION_DATA.date} · {LOCATION_DATA.title}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Day switcher — Glass Tabs: a stretchy frosted pill slides between tabs */}
        <div className="mb-8 flex justify-center sm:mb-10">
          <motion.div {...entry.fade(0.42, 16)}>
            <DayTabs
              activeId={activeDay}
              days={AGENDA_DAYS}
              onChange={setActiveDay}
            />
          </motion.div>
        </div>

        {/* Agenda list — flat glass rows flowing down the page, no scrollable box.
            Day swaps play in wait mode: the old rows exit one by one first,
            then the new rows enter one by one. */}
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:gap-4">
          <AnimatePresence mode="wait">
            {currentAgenda.map((item, index) => (
              <AgendaRow
                agendaItem={item}
                index={index}
                key={`${currentDay.id}-${item.id}`}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
