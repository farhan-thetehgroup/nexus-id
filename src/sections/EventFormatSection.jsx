/* eslint-disable prettier/prettier */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  UserCheck,
  Monitor,
  MessageCircle,
  Mic2,
  Coffee,
  ChevronRight,
  ChevronLeft,
  Target,
  Clock,
  X,
  Calendar,
  Image as ImageIcon,
} from "lucide-react";

import {
  MaskedLine,
  useSectionEntry,
} from "../components/common/ui/SectionEntry";
import { CursorSpotlight } from "../components/common/ui/CursorSpotlight";
import { DotFieldInteraction } from "../components/common/ui/DotFieldInteraction";
import { EVENT_FORMAT_GALLERY } from "../constants";

/* ----------------- Data ----------------- */
const eventFormats = [
  {
    id: 1,
    icon: UserCheck,
    title: "One-on-One Meeting",
    description:
      "Private consultations with industry experts, tailored business solutions, and flexible scheduling - all in a personalized session just for you.",
    features: [
      "30-minute sessions",
      "Pre-scheduled meetings",
      "Expert matching",
      "Private consultation rooms",
    ],
    image:
      "/images/event-formats/one-on-one-2.jpg",
    color: "from-tech-green-400 to-tech-green-600",
    attendees: "1-on-1",
    gallery: EVENT_FORMAT_GALLERY.oneOnOne,
  },
  {
    id: 2,
    icon: Monitor,
    title: "Live Demo Session",
    description:
      "See real-world NEXUS and defense tools in action, guided by top technology experts. Experience what works, live and in action.",
    features: [
      "Hands-on experience",
      "Real-time Q&A",
      "Product showcases",
      "Technical deep-dives",
    ],
    image:
      "/images/event-formats/live-demo-1.jpg",
    color: "from-cyan-400 to-cyan-600",
    attendees: "20-30",
    gallery: EVENT_FORMAT_GALLERY.liveDemo,
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "Interactive Workshop",
    description:
      "An immersive learning experience where participants engage in hands-on activities and collaborative problem-solving sessions.",
    features: [
      "Practical exercises",
      "Group activities",
      "Expert guidance",
      "Takeaway materials",
    ],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    color: "from-brand-400 to-brand-600",
    attendees: "15-20",
  },
  {
    id: 4,
    icon: Mic2,
    title: "Insightful Conference",
    description:
      "Industry leaders share insights on emerging trends, best practices, and future innovations in the technology landscape.",
    features: [
      "4-5 expert panelists",
      "Audience Q&A",
      "Recorded sessions",
      "Live streaming available",
    ],
    image:
      "/images/event-formats/conference-1.jpg",
    color: "from-teal-400 to-teal-600",
    attendees: "300",
    gallery: EVENT_FORMAT_GALLERY.conference,
  },
  {
    id: 5,
    icon: Coffee,
    title: "Exhibition Hall",
    description:
      "Explore cutting-edge solutions and connect with innovators in an open exhibition space designed for networking and discovery.",
    features: [
      "Networking breaks",
      "Solution showcases",
      "Interactive demos",
      "Informal discussions",
    ],
    image:
      "/images/event-formats/exhibition-1.jpg",
    color: "from-tech-green-500 to-teal-600",
    attendees: "Open",
    gallery: EVENT_FORMAT_GALLERY.exhibition,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export const EventFormatSection = () => {
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const entry = useSectionEntry();

  const openLightbox = (gallery, index) => {
    setLightboxImage(gallery);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxIndex(0);
  };

  const goToPrevious = () => {
    setLightboxIndex((prev) => (prev === 0 ? lightboxImage.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setLightboxIndex((prev) => (prev === lightboxImage.length - 1 ? 0 : prev + 1));
  };

  const renderFormatCard = (format, index, gridClass = "") => {
    const IconComponent = format.icon;
    return (
      <motion.div
        className={`group cursor-pointer ${gridClass}`.trim()}
        key={format.id}
        onClick={() => setSelectedFormat(format)}
        variants={cardVariants}>
        <div className="nx-glass-pane relative h-full overflow-hidden transition-colors duration-300 group-hover:border-white/30">
          <div className="relative h-64 overflow-hidden">
            <img
              alt={format.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={format.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03101a]/80 via-[#03101a]/10 to-transparent" />

            <div className="nx-glass-chip absolute top-4 right-4 flex h-10 w-10 items-center justify-center">
              <span className="text-sm font-bold text-white">{index + 1}</span>
            </div>

            <div
              className={`nx-glass-icon absolute top-4 left-4 flex h-12 w-12 items-center justify-center overflow-hidden`}>
              <div
                className={`absolute inset-0 rounded-[inherit] bg-gradient-to-br ${format.color} opacity-50`}
              />
              <IconComponent className="relative h-5 w-5 text-white" />
            </div>

            <div className="nx-glass-chip absolute bottom-4 left-4 px-4 py-2">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-emerald-300" />
                <span className="text-sm font-bold text-white">
                  {format.attendees}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="mb-3 text-xl font-bold text-white">{format.title}</h3>
            <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-white/70">
              {format.description}
            </p>
            <div className="mb-4 space-y-2">
              {format.features.slice(0, 2).map((f, idx) => (
                <div className="flex items-center gap-2 text-xs text-white/60" key={idx}>
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm font-semibold text-emerald-300">
                Learn More
              </span>
              <ChevronRight className="h-5 w-5 text-emerald-300 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          <CursorSpotlight above />
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative py-32" id="event-formats">
      <DotFieldInteraction />

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4">
        <div className="mb-20 text-center">
          <motion.div
            className="nx-glass-chip mb-6 inline-flex items-center gap-2 px-4 py-2"
            {...entry.fade(0, 14, 0.6)}>
            <Calendar className="h-5 w-5 text-emerald-400" />
            <span className="font-semibold text-emerald-300">
              Diverse Experience
            </span>
          </motion.div>

          <h2 className="mb-6 text-5xl font-bold md:text-7xl">
            <MaskedLine delay={0.1}>
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                The Event Format
              </span>
            </MaskedLine>
          </h2>

          <motion.p
            className="mx-auto max-w-3xl text-xl text-white/70"
            {...entry.fade(0.24, 16)}>
            Multiple engagement opportunities designed to maximize value and
            networking
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {eventFormats.slice(0, 3).map((format, index) => renderFormatCard(format, index, ""))}
            {eventFormats.length > 3 && (
              <div className="flex flex-col justify-center gap-8 sm:flex-row lg:col-span-3">
                {eventFormats.slice(3).map((format, index) => (
                  <div key={format.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]">
                    {renderFormatCard(format, 3 + index, "")}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedFormat && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#020c14]/85 p-4 backdrop-blur-md"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setSelectedFormat(null)}>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="nx-glass-pane relative max-h-screen w-full max-w-3xl overflow-x-hidden overflow-y-auto bg-[#06161f]/90"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}>
              <div className="relative h-80">
                <img
                  alt={selectedFormat.title}
                  className="h-full w-full object-cover"
                  src={selectedFormat.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06161f] via-[#06161f]/20 to-transparent" />

                <button
                  aria-label="Close"
                  className="nx-glass-icon absolute top-4 right-4 flex h-11 w-11 items-center justify-center transition-colors hover:border-white/30"
                  onClick={() => setSelectedFormat(null)}>
                  <X className="h-5 w-5 text-white" />
                </button>

                <div className="absolute right-6 bottom-6 left-6">
                  <div
                    className={`nx-glass-icon mb-4 inline-flex overflow-hidden p-3`}>
                    <div
                      className={`absolute inset-0 rounded-[inherit] bg-gradient-to-r ${selectedFormat.color} opacity-50`}
                    />
                    {(() => {
                      const IconComponent = selectedFormat.icon;
                      return <IconComponent className="relative h-6 w-6" />;
                    })()}
                  </div>
                  <h3 className="mb-2 text-3xl font-bold text-white">
                    {selectedFormat.title}
                  </h3>
                  <div className="flex items-center gap-2 text-emerald-300">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-semibold">
                      {selectedFormat.attendees} Participants
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="mb-6 text-lg leading-relaxed text-white/70">
                  {selectedFormat.description}
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-4 flex items-center gap-2 font-semibold text-emerald-300">
                      <Target className="h-5 w-5" />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {selectedFormat.features.map((f, i) => (
                        <li className="flex items-center gap-3 text-sm text-white/70" key={i}>
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-4 flex items-center gap-2 font-semibold text-cyan-300">
                      <Clock className="h-5 w-5" />
                      Session Details
                    </h4>
                    <div className="space-y-2">
                      <p className="text-sm text-white/70">
                        <span className="font-semibold text-white">Duration:</span>{" "}
                        Varies by format
                      </p>
                      <p className="text-sm text-white/70">
                        <span className="font-semibold text-white">Language:</span>{" "}
                        English
                      </p>
                      <p className="text-sm text-white/70">
                        <span className="font-semibold text-white">Recording:</span>{" "}
                        Available for select sessions
                      </p>
                      <p className="text-sm text-white/70">
                        <span className="font-semibold text-white">Materials:</span>{" "}
                        Digital resources provided
                      </p>
                    </div>
                  </div>
                </div>

                {/* Documentation Photos Gallery */}
                {selectedFormat.gallery && selectedFormat.gallery.length > 0 && (
                  <div className="mt-8 border-t border-white/10 pt-8">
                    <h4 className="mb-4 flex items-center gap-2 font-semibold text-purple-300">
                      <ImageIcon className="h-5 w-5" />
                      Documentation Photos
                    </h4>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                      {selectedFormat.gallery.map((photo, idx) => (
                        <div
                          key={idx}
                          onClick={() => openLightbox(selectedFormat.gallery, idx)}
                          className="cursor-pointer overflow-hidden rounded-xl border border-white/10 transition-colors duration-300 hover:border-white/30">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Gallery */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={closeLightbox}>
            <button
              aria-label="Close gallery"
              className="nx-glass-icon absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center"
              onClick={closeLightbox}>
              <X className="h-6 w-6 text-white" />
            </button>

            <button
              aria-label="Previous image"
              className="nx-glass-icon absolute top-1/2 left-4 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}>
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
              aria-label="Next image"
              className="nx-glass-icon absolute top-1/2 right-4 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}>
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            <motion.div
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-h-[90vh] w-full max-w-6xl"
              exit={{ scale: 0.95, opacity: 0 }}
              initial={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}>
              <img
                src={lightboxImage[lightboxIndex].src}
                alt={lightboxImage[lightboxIndex].alt}
                className="h-full w-full rounded-2xl object-contain"
              />
              <div className="absolute right-0 bottom-0 left-0 rounded-b-2xl bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-center text-lg font-medium text-white">
                  {lightboxImage[lightboxIndex].alt}
                </p>
                <p className="mt-1 text-center text-sm text-white/60">
                  {lightboxIndex + 1} / {lightboxImage.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
