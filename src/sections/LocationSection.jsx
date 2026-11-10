/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  DoorOpen,
  ExternalLink,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  MaskedLine,
  useSectionEntry,
} from "../components/common/ui/SectionEntry";
import { GlowField } from "../components/common/ui/GlowField";
import { GlassButton } from "../components/common/ui/GlassButton";
import { LOCATION_DATA } from "../constants";
import { GalleryModal } from "../components/GalleryModal";

const InfoRow = ({ icon: Icon, label, value }) => (
  <motion.div
    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-colors duration-300 hover:border-white/25"
    whileHover={{ x: 4 }}>
    <div className="nx-glass-icon flex h-12 w-12 flex-shrink-0 items-center justify-center">
      <Icon className="h-6 w-6 text-emerald-300" />
    </div>
    <div>
      <p className="mb-1 text-sm text-white/50">{label}</p>
      <p className="text-lg font-semibold text-white">{value}</p>
    </div>
  </motion.div>
);

export const LocationSection = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const entry = useSectionEntry();

  const location = LOCATION_DATA;
  const images = location.images || [];
  const currentImage = images[activeImage];

  const handleGoogleMapsClick = () => {
    if (location.googleMapsUrl) {
      window.open(location.googleMapsUrl, "_blank", "noopener,noreferrer");
    }
  };

  const showPreviousImage = () => {
    setActiveImage((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4 py-32"
      id="location">

      {/* Pooled light behind the glass */}
      <GlowField
        className="opacity-55"
        blobs={[
          {
            className: "top-[14%] right-[8%] w-[400px] h-[400px] bg-cyan-500/25",
          },
          {
            className: "bottom-[14%] left-[8%] w-[360px] h-[360px] bg-emerald-500/25",
          },
          {
            className:
              "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[460px] bg-teal-500/15",
          },
          {
            className: "-top-40 left-[32%] w-[380px] h-[380px] bg-cyan-500/15",
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
            <MapPin className="h-5 w-5 text-emerald-400" />
            <span className="font-semibold text-emerald-300">Event Venue</span>
          </motion.div>

          <h2 className="mb-6 text-5xl font-bold md:text-7xl">
            <MaskedLine delay={0.1}>
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Event Location
              </span>
            </MaskedLine>
          </h2>

          <motion.p
            className="mx-auto max-w-3xl text-xl text-white/70"
            {...entry.fade(0.24, 16)}>
            Join us at our premier venue for an unforgettable experience
          </motion.p>
        </div>

        {/* Location Card */}
        <motion.div className="relative mx-auto max-w-6xl" {...entry.fade(0.36, 24)}>
          {/* Colored field the frost refracts */}
          <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-40 blur-2xl" />

          <div className="nx-glass-pane relative overflow-hidden">
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
              {/* Left Side - Venue Image Carousel */}
              <div className="group/carousel relative min-h-[320px] overflow-hidden p-4 lg:min-h-[500px]">
                {images.length > 0 && (
                  <div className="relative h-full min-h-[288px] w-full overflow-hidden rounded-xl border border-white/10 lg:min-h-[468px]">
                    {images.map((img, idx) => (
                      <img
                        key={img.src}
                        alt={img.alt || `Venue image ${idx + 1}`}
                        className={
                          idx === activeImage
                            ? "absolute inset-0 z-[1] h-full w-full scale-[1.01] object-cover opacity-100 transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/carousel:scale-[1.045]"
                            : "absolute inset-0 h-full w-full scale-[1.01] object-cover opacity-0 transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                        }
                        src={img.src}
                        loading={idx === 0 ? "eager" : "lazy"}
                        decoding="async"
                        aria-hidden={idx !== activeImage}
                      />
                    ))}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#03101a]/70 via-[#03101a]/5 to-transparent" />

                    {/* Caption */}
                    {currentImage && (
                      <div className="absolute bottom-5 left-5 z-[3] max-w-[calc(100%-140px)]">
                        {currentImage.label && (
                          <span className="block text-xs font-semibold tracking-[0.16em] text-emerald-300 uppercase">
                            {currentImage.label}
                          </span>
                        )}
                        {currentImage.title && (
                          <strong className="mt-1.5 block text-xl font-bold text-white sm:text-2xl">
                            {currentImage.title}
                          </strong>
                        )}
                      </div>
                    )}

                    {/* Prev / Next controls */}
                    {images.length > 1 && (
                      <div className="absolute top-4 right-4 z-[3] flex gap-2">
                        <button
                          type="button"
                          className="nx-glass-icon flex h-10 w-10 items-center justify-center text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
                          onClick={showPreviousImage}
                          aria-label="Show previous venue image">
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          className="nx-glass-icon flex h-10 w-10 items-center justify-center text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
                          onClick={showNextImage}
                          aria-label="Show next venue image">
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    )}

                    {/* View full / open gallery modal */}
                    <button
                      type="button"
                      className="absolute top-4 left-4 z-[3] flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover/carousel:opacity-100"
                      onClick={() => {
                        setGalleryIndex(activeImage);
                        setShowGallery(true);
                      }}>
                      <Maximize2 className="h-3.5 w-3.5" />
                      View
                    </button>

                    {/* Dot indicators */}
                    {images.length > 1 && (
                      <div
                        className="absolute right-5 bottom-5 z-[3] flex items-center gap-2"
                        aria-label="Choose venue image">
                        {images.map((img, idx) => (
                          <button
                            key={img.src}
                            type="button"
                            className={
                              idx === activeImage
                                ? "h-2 w-6 rounded-full bg-emerald-300 transition-[width,background] duration-300"
                                : "h-2 w-2 rounded-full bg-white/35 transition-[width,background] duration-300 hover:bg-white/55"
                            }
                            onClick={() => setActiveImage(idx)}
                            aria-label={`Show ${(img.label || `image ${idx + 1}`).toLowerCase()}`}
                            aria-current={idx === activeImage ? "true" : undefined}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right Side - Details */}
              <div className="relative flex flex-col justify-center p-8 md:p-12">
                <div className="space-y-6">
                  {/* Location Title */}
                  <div>
                    <h3 className="mb-4 bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                      {location.title}
                    </h3>

                    {location.address && (
                      <p className="mb-2 flex items-start gap-2 text-lg text-white/70">
                        <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-300" />
                        <span>{location.address}</span>
                      </p>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="nx-hairline w-full" />

                  {/* Date and Time */}
                  <div className="space-y-4">
                    {location.date && (
                      <InfoRow icon={Calendar} label="Date" value={location.date} />
                    )}

                    {location.time && (
                      <InfoRow icon={Clock} label="Time" value={location.time} />
                    )}

                    {location.room && (
                      <InfoRow icon={DoorOpen} label="Room" value={location.room} />
                    )}
                  </div>

                  {/* Google Maps Button */}
                  {location.googleMapsUrl && (
                    <GlassButton
                      as="button"
                      className="mt-6 w-full justify-center gap-3 py-4 text-white"
                      onClick={handleGoogleMapsClick}
                      tone="emerald">
                      <MapPin className="h-5 w-5" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </GlassButton>
                  )}

                  {/* Additional Information */}
                  {location.additionalInfo && (
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-sm leading-relaxed text-white/50">
                        {location.additionalInfo}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {showGallery && location.images && location.images.length > 0 && (
          <GalleryModal
            images={location.images}
            index={galleryIndex}
            onClose={() => setShowGallery(false)}
            onIndexChange={setGalleryIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
