/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, Coffee, UtensilsCrossed, Mic, User, UserPlus, Users, Wine } from "lucide-react";
import { AGENDA_DAY_1, AGENDA_DAY_2 } from "../constants";

const AgendaRow = ({ agendaItem, index }) => {
  const isBreak = agendaItem.type === "break";
  const isRegistration = agendaItem.type === "registration";
  const isMeeting = agendaItem.type === "meeting";
  const isRoundtable = agendaItem.type === "roundtable";
  const isDemoSession = agendaItem.type === "demo-session";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative py-3 px-3 sm:py-4 sm:px-6 rounded-xl hover:bg-slate-800/50 transition-all duration-300 border-b border-emerald-500/10 last:border-b-0">
      
      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6">
        {/* Time */}
        <div className="flex-shrink-0 w-full sm:w-32 md:w-44">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
            <span className="text-emerald-400 font-semibold text-sm sm:text-sm whitespace-nowrap">
              {agendaItem.time}
            </span>
          </div>
        </div>

        {/* Speaker Image or Break/Registration/Meeting/Demo Icon */}
        <div className="flex-shrink-0">
          {isDemoSession ? (
            <div className="relative w-20 h-12 sm:w-28 sm:h-16 md:w-36 md:h-20 rounded-lg overflow-hidden border-2 sm:border-4 border-indigo-500/50 group-hover:border-indigo-400 transition-colors duration-300 bg-white p-1 sm:p-1.5 md:p-2">
              <img
                alt={agendaItem.title}
                className="w-full h-full object-contain"
                src={agendaItem.image}
              />
            </div>
          ) : isRoundtable && agendaItem.roundtables ? (
            /* Roundtable: Show all speakers from all roundtables */
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {agendaItem.roundtables.flatMap((roundtable, rIdx) =>
                roundtable.speakers && roundtable.speakers.length > 0
                  ? roundtable.speakers.map((speaker, sIdx) => (
                      <div
                        key={`${rIdx}-${sIdx}`}
                        className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 sm:border-4 border-cyan-500/50 group-hover:border-cyan-400 transition-colors duration-300">
                        <img
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                          src={speaker.image}
                        />
                      </div>
                    ))
                  : []
              )}
            </div>
          ) : isRegistration ? (
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 sm:border-4 border-blue-500/50 group-hover:border-blue-400 transition-colors duration-300 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
              <UserPlus className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400" />
            </div>
          ) : isMeeting ? (
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 sm:border-4 border-teal-500/50 group-hover:border-teal-400 transition-colors duration-300 flex items-center justify-center bg-gradient-to-br from-teal-500/20 to-cyan-500/20">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-teal-400" />
            </div>
          ) : isBreak ? (
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 sm:border-4 border-amber-500/50 group-hover:border-amber-400 transition-colors duration-300 flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-orange-500/20">
              {agendaItem.title.toLowerCase().includes("lunch") || agendaItem.title.toLowerCase().includes("dinner") ? (
                <UtensilsCrossed className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber-400" />
              ) : (
                <Coffee className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber-400" />
              )}
            </div>
          ) : agendaItem.moderator && agendaItem.speakers && agendaItem.speakers.length > 0 ? (
            /* Panel Discussion */
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 sm:border-4 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300">
                <img
                  alt={agendaItem.moderator.name}
                  className="w-full h-full object-cover"
                  src={agendaItem.moderator.image}
                />
                <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-purple-500 rounded-full p-0.5 sm:p-1 border border-slate-900 sm:border-2">
                  <User className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {agendaItem.speakers.map((speaker, idx) => (
                  <div
                    key={idx}
                    className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 sm:border-4 border-blue-500/50 group-hover:border-blue-400 transition-colors duration-300">
                    <img
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                      src={speaker.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : agendaItem.moderator ? (
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 sm:border-4 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300">
              <img
                alt={agendaItem.moderator.name}
                className="w-full h-full object-cover"
                src={agendaItem.moderator.image}
              />
              <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-purple-500 rounded-full p-0.5 sm:p-1 border border-slate-900 sm:border-2">
                <Mic className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
              </div>
            </div>
          ) : agendaItem.speaker ? (
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 sm:border-4 border-emerald-500/50 group-hover:border-emerald-400 transition-colors duration-300">
              <img
                alt={agendaItem.speaker.name}
                className="w-full h-full object-cover"
                src={agendaItem.speaker.image}
              />
              <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-emerald-500 rounded-full p-0.5 sm:p-1 border border-slate-900 sm:border-2">
                <Mic className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
              </div>
            </div>
          ) : agendaItem.speakers && agendaItem.speakers.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {agendaItem.speakers.map((speaker, idx) => (
                <div
                  key={idx}
                  className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 sm:border-4 border-blue-500/50 group-hover:border-blue-400 transition-colors duration-300">
                  <img
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                    src={speaker.image}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 w-full sm:w-auto">
          {isRoundtable ? (
            /* Roundtable Discussion Layout */
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-lg md:text-xl font-bold mb-1 text-white group-hover:text-emerald-400 transition-colors duration-300">
                {agendaItem.title}
              </h3>
              {agendaItem.description && (
                <p className="text-gray-400 text-sm sm:text-sm mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {agendaItem.description}
                </p>
              )}
              {agendaItem.roundtables && agendaItem.roundtables.map((roundtable, rIdx) => (
                <div key={rIdx} className="border-l-2 sm:border-l-4 border-cyan-500/50 pl-3 sm:pl-4 py-2 bg-slate-800/30 rounded-r-lg">
                  <h4 className="text-base sm:text-base font-semibold text-cyan-400 mb-1.5 sm:mb-2">
                    {roundtable.title}
                  </h4>
                  {roundtable.speakers && roundtable.speakers.length > 0 && (
                    <div className="space-y-1">
                      {roundtable.speakers.map((speaker, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5 sm:gap-2">
                          <Mic className="w-3 h-3 sm:w-3 sm:h-3 text-cyan-400 flex-shrink-0" />
                          <p className="text-cyan-300 font-medium text-xs sm:text-xs break-words">
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
              <h3 className="text-lg sm:text-lg md:text-xl font-bold mb-1 text-white group-hover:text-emerald-400 transition-colors duration-300">
                {agendaItem.title}
              </h3>

              {/* Speaker/Moderator Info */}
              {!isBreak && !isRegistration && !isMeeting && !isDemoSession && (
                <div className="mb-1.5 sm:mb-2 space-y-1">
                  {agendaItem.moderator && (
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <User className="w-3 h-3 sm:w-3 sm:h-3 text-purple-400 flex-shrink-0" />
                      <p className="text-purple-400 font-semibold text-xs sm:text-xs break-words">
                        <span className="hidden sm:inline">Moderator: </span>
                        <span className="sm:hidden">Mod: </span>
                        {agendaItem.moderator.name}
                        {agendaItem.moderator.role && ` • ${agendaItem.moderator.role}`}
                      </p>
                    </div>
                  )}
                  {agendaItem.speaker && (
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Mic className="w-3 h-3 sm:w-3 sm:h-3 text-emerald-400 flex-shrink-0" />
                      <p className="text-emerald-400 font-semibold text-xs sm:text-xs break-words">
                        {agendaItem.speaker.name}
                        {agendaItem.speaker.role && ` • ${agendaItem.speaker.role}`}
                      </p>
                    </div>
                  )}
                  {agendaItem.speakers && agendaItem.speakers.length > 0 && !agendaItem.moderator && (
                    <div className="space-y-1">
                      {agendaItem.speakers.map((speaker, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                          <Mic className="w-3 h-3 sm:w-3 sm:h-3 text-blue-400 flex-shrink-0" />
                          <p className="text-blue-400 font-semibold text-xs sm:text-xs break-words">
                            {speaker.name}
                            {speaker.role && ` • ${speaker.role}`}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              {agendaItem.description && (
                <p className="text-gray-400 text-sm sm:text-sm group-hover:text-gray-300 transition-colors duration-300 break-words">
                  {agendaItem.description}
                </p>
              )}
            </>
          )}
        </div>
      </div>

      {/* Hover indicator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500" />
    </motion.div>
  );
};

export const AgendaSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeDay, setActiveDay] = useState(1);

  const currentAgenda = activeDay === 1 ? AGENDA_DAY_1 : AGENDA_DAY_2;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden"
      id="agenda"
      ref={containerRef}>
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 sm:top-32 right-4 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-16 sm:bottom-32 left-4 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-emerald-500/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}>
          
          <motion.div
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/40 mb-4 sm:mb-5 md:mb-6 backdrop-blur-sm"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-xs sm:text-sm md:text-base">
              Event Schedule
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Event Agenda
            </span>
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}>
            Join us for two days of insightful sessions, workshops, and networking opportunities
          </motion.p>
        </motion.div>

        {/* Single Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative">
          
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-2xl opacity-50" />
          
          {/* Card */}
          <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-emerald-500/30 overflow-hidden">
            
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.05),transparent)]" />
            
            {/* Top glow orb */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />

            {/* Card Content */}
            <div className="relative p-4 sm:p-6 md:p-8">
              {/* Tabs inside the card */}
              <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-7 md:mb-8">
                <button
                  onClick={() => setActiveDay(1)}
                  className={`relative px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 overflow-hidden ${
                    activeDay === 1
                      ? "text-white shadow-lg shadow-emerald-500/50"
                      : "text-gray-400 hover:text-white"
                  }`}>
                  {activeDay === 1 && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">Day 1</span>
                </button>
                
                <button
                  onClick={() => setActiveDay(2)}
                  className={`relative px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 overflow-hidden ${
                    activeDay === 2
                      ? "text-white shadow-lg shadow-emerald-500/50"
                      : "text-gray-400 hover:text-white"
                  }`}>
                  {activeDay === 2 && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">Day 2</span>
                </button>
              </div>

              {/* Agenda List */}
              <div className="space-y-2 max-h-[400px] sm:max-h-[500px] md:max-h-[600px] overflow-y-auto pr-1 sm:pr-2 agenda-scrollbar">
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
