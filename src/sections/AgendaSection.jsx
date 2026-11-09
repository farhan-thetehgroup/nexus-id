/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, Coffee, UtensilsCrossed, Mic, User, UserPlus, Users, Monitor } from "lucide-react";

import {
  MaskedLine,
  useSectionEntry,
} from "../components/common/ui/SectionEntry";
import { GlowField } from "../components/common/ui/GlowField";
import { AGENDA_DAY_1, AGENDA_DAY_2 } from "../constants";

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

const AgendaRow = ({ agendaItem, index }) => {
  const isBreak = agendaItem.type === "break";
  const isRegistration = agendaItem.type === "registration";
  const isMeeting = agendaItem.type === "meeting";
  const isRoundtable = agendaItem.type === "roundtable";
  const isDemoSession = agendaItem.type === "demo-session";
  const isBreakAndDemo = agendaItem.type === "break&demo-session";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative rounded-2xl border border-transparent px-3 py-3.5 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04] sm:px-6 sm:py-4">

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

        {/* Speaker Image or Break/Registration/Meeting/Demo Icon */}
        <div className="flex-shrink-0">
          {isDemoSession ? (
            <div className="relative h-12 w-20 overflow-hidden rounded-xl border border-white/15 bg-white p-1 transition-colors duration-300 group-hover:border-white/30 sm:h-16 sm:w-28 sm:p-1.5 md:h-20 md:w-36 md:p-2">
              <img
                alt={agendaItem.title}
                className="h-full w-full object-contain"
                src={agendaItem.image}
              />
            </div>
          ) : isRoundtable && agendaItem.roundtables ? (
            /* Roundtable: Show all speakers from all roundtables */
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {agendaItem.roundtables.flatMap((roundtable, rIdx) =>
                roundtable.speakers && roundtable.speakers.length > 0
                  ? roundtable.speakers.map((speaker, sIdx) => (
                      <SpeakerAvatarWithTooltip key={`${rIdx}-${sIdx}`} speaker={speaker}>
                        <AvatarRing className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14">
                          <img
                            alt={speaker.name}
                            className="h-full w-full object-cover"
                            src={speaker.image}
                          />
                        </AvatarRing>
                      </SpeakerAvatarWithTooltip>
                    ))
                  : []
              )}
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
          ) : agendaItem.moderator && agendaItem.speakers && agendaItem.speakers.length > 0 ? (
            /* Panel Discussion */
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <SpeakerAvatarWithTooltip speaker={agendaItem.moderator}>
                <AvatarRing className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16">
                  <img
                    alt={agendaItem.moderator.name}
                    className="h-full w-full object-cover"
                    src={agendaItem.moderator.image}
                  />
                  <div className="absolute -right-0.5 -bottom-0.5 rounded-full border border-[#07161f] bg-purple-500 p-0.5 sm:-right-1 sm:-bottom-1 sm:border-2 sm:p-1">
                    <User className="h-2 w-2 text-white sm:h-3 sm:w-3" />
                  </div>
                </AvatarRing>
              </SpeakerAvatarWithTooltip>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {agendaItem.speakers.map((speaker, idx) => (
                  <SpeakerAvatarWithTooltip key={idx} speaker={speaker}>
                    <AvatarRing className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14">
                      <img
                        alt={speaker.name}
                        className="h-full w-full object-cover"
                        src={speaker.image}
                      />
                    </AvatarRing>
                  </SpeakerAvatarWithTooltip>
                ))}
              </div>
            </div>
          ) : agendaItem.moderator ? (
            <SpeakerAvatarWithTooltip speaker={agendaItem.moderator}>
              <AvatarRing className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16">
                <img
                  alt={agendaItem.moderator.name}
                  className="h-full w-full object-cover"
                  src={agendaItem.moderator.image}
                />
                <div className="absolute -right-0.5 -bottom-0.5 rounded-full border border-[#07161f] bg-purple-500 p-0.5 sm:-right-1 sm:-bottom-1 sm:border-2 sm:p-1">
                  <Mic className="h-2 w-2 text-white sm:h-3 sm:w-3" />
                </div>
              </AvatarRing>
            </SpeakerAvatarWithTooltip>
          ) : agendaItem.speaker ? (
            <SpeakerAvatarWithTooltip speaker={agendaItem.speaker}>
              <AvatarRing className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16">
                <img
                  alt={agendaItem.speaker.name}
                  className="h-full w-full object-cover"
                  src={agendaItem.speaker.image}
                />
                <div className="absolute -right-0.5 -bottom-0.5 rounded-full border border-[#07161f] bg-emerald-500 p-0.5 sm:-right-1 sm:-bottom-1 sm:border-2 sm:p-1">
                  <Mic className="h-2 w-2 text-white sm:h-3 sm:w-3" />
                </div>
              </AvatarRing>
            </SpeakerAvatarWithTooltip>
          ) : agendaItem.speakers && agendaItem.speakers.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {agendaItem.speakers.map((speaker, idx) => (
                <SpeakerAvatarWithTooltip key={idx} speaker={speaker}>
                  <AvatarRing className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14">
                    <img
                      alt={speaker.name}
                      className="h-full w-full object-cover"
                      src={speaker.image}
                    />
                  </AvatarRing>
                </SpeakerAvatarWithTooltip>
              ))}
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

      {/* Hairline separator */}
      <div className="absolute right-0 bottom-0 left-0 h-px bg-white/[0.06] transition-colors duration-500 group-hover:bg-white/15" />
    </motion.div>
  );
};

export const AgendaSection = () => {
  const containerRef = useRef(null);
  const [activeDay, setActiveDay] = useState(1);
  const entry = useSectionEntry();

  const currentAgenda = activeDay === 1 ? AGENDA_DAY_1 : AGENDA_DAY_2;

  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4 py-32 sm:px-6"
      id="agenda"
      ref={containerRef}>

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

        {/* Single Card Container */}
        <motion.div className="relative" {...entry.fade(0.36, 24)}>
          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 blur-2xl" />

          {/* Card */}
          <div className="nx-glass-pane relative overflow-hidden">
            {/* Refracted bloom inside the glass */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 blur-3xl" />

            {/* Card Content */}
            <div className="relative p-4 sm:p-6 md:p-8">
              {/* Tabs inside the card */}
              <div className="mb-6 flex justify-center gap-2 sm:mb-7 sm:gap-3 md:mb-8 md:gap-4">
                <button
                  onClick={() => setActiveDay(1)}
                  className={`relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 ${
                    activeDay === 1
                      ? "border border-emerald-400/40 bg-emerald-400/15 text-white"
                      : "border border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white"
                  }`}>
                  <span className="relative z-10">Day 1</span>
                </button>

                {/* <button
                  onClick={() => setActiveDay(2)}
                  className={`relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 ${
                    activeDay === 2
                      ? "border border-emerald-400/40 bg-emerald-400/15 text-white"
                      : "border border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white"
                  }`}>
                  <span className="relative z-10">Day 2</span>
                </button> */}
              </div>

              {/* Agenda List */}
              <div className="agenda-scrollbar max-h-[400px] space-y-1.5 overflow-y-auto pr-1 sm:max-h-[500px] sm:pr-2 md:max-h-[600px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDay}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}>
                    {currentAgenda.map((item, index) => (
                      <AgendaRow
                        key={item.id}
                        agendaItem={item}
                        index={index}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
