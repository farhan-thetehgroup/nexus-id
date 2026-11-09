/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

import { BRAND_LOGO_WHITE, MENU_ITEMS } from "../constants";
import { GlassButton } from "./common/ui/GlassButton";

export const AdvancedNavbar = ({ scrollToSection, items = MENU_ITEMS }) => {
  const { scrollY } = useScroll();
  const scrollYProgress = useTransform(scrollY, [0, 300], [0, 1]);
  const navBackground = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(3, 16, 26, 0)", "rgba(3, 16, 26, 0.72)"]
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [, setHoveredItem] = useState(null);

  // Cursor spotlight: a soft light that follows the pointer inside the nav.
  // The layer is inset-0, so the gradient is clipped exactly at the nav edges.
  const spotRef = useRef(null);
  const handleNavPointerMove = (e) => {
    const el = spotRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--nx-spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--nx-spot-y", `${e.clientY - rect.top}px`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // IntersectionObserver untuk update activeSection
    const sectionIds = items.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    let ticking = false;
    const handleSectionScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let current = "hero";
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const rect = section.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom > 120) {
              current = section.id;
              break;
            }
          }
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleSectionScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionScroll);
    };
  }, [items]);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 backdrop-blur-xl border-b transition-all duration-500 ${
          scrolled
            ? "border-white/10 shadow-[0_18px_50px_rgba(2,8,20,0.45)]"
            : "border-transparent"
        }`}
        onMouseMove={handleNavPointerMove}
        style={{ backgroundColor: navBackground }}>
        {/* Cursor-following subtle light, clipped at the nav edges */}
        <div
          ref={spotRef}
          aria-hidden="true"
          className="nx-nav-spot pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(160px circle at var(--nx-spot-x, 50%) var(--nx-spot-y, 50%), rgba(61, 255, 162, 0.16), rgba(61, 255, 162, 0.06) 42%, transparent 72%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div
              className="group flex cursor-pointer items-center space-x-3"
              onClick={() => handleNavClick("hero")}>
              <div className="relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-emerald-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex transform items-center space-x-3 transition-transform duration-300 group-hover:scale-105">
                    <img
                      alt="Nexus Logo"
                      className="h-10 w-auto"
                      src={BRAND_LOGO_WHITE}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-1 lg:flex">
              {items.map((item, idx) => (
                <div
                  className="relative"
                  key={item.id}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}>
                  <button
                    className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      activeSection === item.id
                        ? "text-[#3dffa2]"
                        : "text-white/60 hover:text-white"
                    }`}
                    onClick={() => handleNavClick(item.id)}
                    style={{ animationDelay: `${idx * 0.1}s` }}>
                    <span className="relative flex items-center gap-2">
                      {item.name}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <GlassButton
                as="button"
                className="gap-2 px-6 py-2.5 text-sm font-semibold"
                onClick={() => handleNavClick("register")}
                tone="emerald">
                <span className="relative flex items-center gap-2 text-white">
                  Register Now
                  <svg
                    className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </span>
              </GlassButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle navigation"
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] transition-colors hover:border-white/30 hover:bg-white/[0.12] lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="relative h-6 w-6">
                {isMenuOpen ? (
                  <X className="h-6 w-6 rotate-90 text-[#3dffa2] transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 text-[#3dffa2] transition-transform duration-300 group-hover:scale-110" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="border-t border-white/10 bg-[#04121d]/95 px-4 py-6 backdrop-blur-2xl">
            <div className="space-y-2">
              {items.map((item, idx) => (
                <button
                  className={`group flex w-full items-center justify-between rounded-xl border px-4 py-3 transition-colors duration-300 ${
                    activeSection === item.id
                      ? "border-emerald-400/30 bg-emerald-400/10"
                      : "border-transparent hover:border-white/10 hover:bg-white/[0.06]"
                  }`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    animationDelay: `${idx * 0.05}s`,
                    animation: isMenuOpen
                      ? "slideInRight 0.3s ease-out forwards"
                      : "none",
                  }}>
                  <span className="flex items-center gap-3">
                    <span
                      className={`font-medium ${
                        activeSection === item.id
                          ? "text-[#3dffa2]"
                          : "text-white/70"
                      }`}>
                      {item.name}
                    </span>
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 transform text-white/30 transition-transform ${
                      activeSection === item.id
                        ? "rotate-180 text-[#3dffa2]"
                        : ""
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-6 border-t border-white/10 pt-6">
              <GlassButton
                as="button"
                className="w-full justify-center gap-2 px-6 py-3 text-white"
                onClick={() => handleNavClick("register")}
                tone="emerald">
                <span className="flex items-center gap-2">
                  Register Now
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </span>
              </GlassButton>
            </div>
          </div>
        </div>
      </motion.nav>

      <style>{`
        /* Cursor spotlight: visible while the pointer is over the nav */
        .nx-nav-spot {
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        nav:hover .nx-nav-spot {
          opacity: 1;
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
};
