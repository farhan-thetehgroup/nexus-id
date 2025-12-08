/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export const SpeakerModal = ({ speaker, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    modalRef.current?.focus?.();
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  if (!speaker) return null;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}>
      {/* Gradient + blur overlay */}
      <motion.div
        className="absolute inset-0 backdrop-blur-[6px] bg-gradient-to-br from-brand-900/80 via-tech-green-700/70 to-tech-green-900"
        onClick={onClose}
        style={{ opacity: 0.95 }}
      />
      
      <motion.div
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto"
        exit={{ scale: 0.96, opacity: 0 }}
        initial={{ scale: 0.96, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}>
        
        {/* Close button */}
        <motion.button
          className="absolute top-4 right-4 z-20 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          <X className="h-6 w-6" />
        </motion.button>

        {/* Modal Content */}
        <div className="relative overflow-hidden rounded-2xl bg-black/70 shadow-2xl backdrop-blur-md border border-emerald-500/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left Side - Photo */}
            <div className="relative bg-gradient-to-br from-brand-900/90 to-tech-green-900/90 p-8 md:p-12 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-2xl blur-2xl" />
                
                {/* Speaker Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative">
                  <img
                    alt={speaker.fullName}
                    className="w-full h-auto rounded-2xl object-cover shadow-2xl border-4 border-emerald-500/50"
                    src={speaker.image}
                  />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl pointer-events-none" />
                </motion.div>
              </div>
            </div>

            {/* Right Side - Biography and Details */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-slate-900/95 to-slate-800/95">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6">
                
                {/* Name */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {speaker.fullName}
                  </h2>
                  
                  {/* Job Title */}
                  <h3 className="text-xl md:text-2xl text-emerald-400 font-semibold mb-2">
                    {speaker.jobTitle}
                  </h3>
                  
                  {/* Company */}
                  <p className="text-lg text-gray-300">
                    {speaker.company}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

                {/* Biography */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full" />
                    Biography
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
                    {speaker.biography}
                  </p>
                </div>

                {/* Additional Info if available */}
                {speaker.socialLinks && speaker.socialLinks.length > 0 && (
                  <div className="pt-4">
                    <div className="flex flex-wrap gap-4">
                      {speaker.socialLinks.map((link, idx) => (
                        <motion.a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 text-emerald-400 hover:border-emerald-400/70 hover:bg-emerald-500/30 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}>
                          {link.label}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

