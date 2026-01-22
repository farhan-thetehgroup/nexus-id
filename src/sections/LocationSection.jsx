/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar, Clock, DoorOpen, ExternalLink, Maximize2 } from "lucide-react";
import { LOCATION_DATA } from "../constants";
import { GalleryModal } from "../components/GalleryModal";

export const LocationSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const location = LOCATION_DATA;

  const handleGoogleMapsClick = () => {
    if (location.googleMapsUrl) {
      window.open(location.googleMapsUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
      id="location"
      ref={containerRef}>
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}>
          
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/40 mb-6 backdrop-blur-sm"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">
              Event Venue
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Event Location
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}>
            Join us at our premier venue for an unforgettable experience
          </motion.p>
        </motion.div>

        {/* Location Card */}
        <motion.div
          className="relative group max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/50 to-cyan-500/50 rounded-3xl blur-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
          
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl border border-emerald-500/30 hover:border-emerald-400/70 overflow-hidden">
            
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent)]" />
            
            {/* Top glow orb */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Venue Images List */}
              <div className="relative min-h-[400px] lg:min-h-[500px] p-4 flex flex-col gap-4">
                {/* Get first 3 venue images */}
                {location.images && location.images.length > 0 && (
                  <>
                    {location.images
                      .slice(0, 3)
                      .map((img, idx) => {
                        const imageIndex = location.images.findIndex((i) => i.src === img.src);
                        return (
                          <motion.div
                            key={idx}
                            className="relative flex-1 min-h-[120px] overflow-hidden rounded-xl cursor-pointer group/image-item"
                            onClick={() => {
                              setGalleryIndex(imageIndex >= 0 ? imageIndex : 0);
                              setShowGallery(true);
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            {/* Image */}
                            <motion.img
                              alt={img.alt || `Venue Image ${idx + 1}`}
                              className="w-full h-full object-cover"
                              src={img.src}
                              transition={{ duration: 0.3 }}
                              whileHover={{ scale: 1.1 }}
                            />
                            
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                            
                            {/* Image glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover/image-item:opacity-100 transition-opacity duration-500" />
                            
                            {/* Click to view overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image-item:opacity-100 transition-opacity duration-300 bg-black/30">
                              <motion.div
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}>
                                <Maximize2 className="w-4 h-4 text-white" />
                                <span className="text-white text-sm font-semibold">View</span>
                              </motion.div>
                            </div>
                          </motion.div>
                        );
                      })}
                  </>
                )}
              </div>

              {/* Right Side - Details */}
              <div className="relative p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}>
                  
                  {/* Location Title */}
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {location.title}
                    </h3>
                    
                    {location.address && (
                      <p className="text-gray-300 text-lg mb-2 flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                        <span>{location.address}</span>
                      </p>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

                  {/* Date and Time */}
                  <div className="space-y-4">
                    {location.date && (
                      <motion.div
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20"
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Date</p>
                          <p className="text-lg font-semibold text-white">{location.date}</p>
                        </div>
                      </motion.div>
                    )}

                    {location.time && (
                      <motion.div
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Time</p>
                          <p className="text-lg font-semibold text-white">{location.time}</p>
                        </div>
                      </motion.div>
                    )}

                    {location.room && (
                      <motion.div
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                          <DoorOpen className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Room</p>
                          <p className="text-lg font-semibold text-white">{location.room}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Google Maps Button */}
                  {location.googleMapsUrl && (
                    <motion.button
                      className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group/btn"
                      onClick={handleGoogleMapsClick}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}>
                      <MapPin className="w-5 h-5" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </motion.button>
                  )}

                  {/* Additional Information */}
                  {location.additionalInfo && (
                    <div className="pt-4 border-t border-emerald-500/20">
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {location.additionalInfo}
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Bottom gradient bar */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500"
              initial={{ scaleX: 0 }}
              style={{ originX: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileInView={{ scaleX: 1 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {showGallery && location.images && location.images.length > 0 && (
          <GalleryModal
            backdropGradient="from-brand-900/80 via-tech-green-700/70 to-tech-green-900"
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

