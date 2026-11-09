/* eslint-disable no-undef */
import { useState } from "react";

import "../components/aurora/aurora.css";
import { useMotionPreference } from "../components/aurora/useMotionPreference";
import { AdvancedNavbar } from "../components/AdvancedNavbar";
import AmbientCursorLight from "../components/common/ui/AmbientCursorLight";
import { HeroSection } from "../sections/HeroSection";
import { SupportedBySection } from "../sections/SupportedBySection";
import { PastSponsorSection } from "../sections/PastSponsorSection";
import { SpeakersSection } from "../sections/SpeakersSection";
import { EventFormatSection } from "../sections/EventFormatSection";
import { AgendaSection } from "../sections/AgendaSection";
import { LocationSection } from "../sections/LocationSection";
import { FooterSection } from "../sections/FooterSection";
import ContactFormSection from "../sections/ContactFormSection";

const pageClasses = [
  "nx-aurora-theme",
  // overflow-clip, NOT overflow-hidden: hidden would turn <main> into a
  // scroll container and silently kill position:sticky inside it.
  "relative min-h-screen overflow-clip",
  "bg-gradient-to-b from-[#03101a] via-[#062030] to-[#03101a]",
  "text-white",
].join(" ");

export const HomePage = () => {
  const motion = useMotionPreference();
  const [, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <main className={pageClasses}>
      <AdvancedNavbar scrollToSection={scrollToSection} />
      <AmbientCursorLight />
      <HeroSection motion={motion} scrollToSection={scrollToSection} />
      <SupportedBySection />
      <PastSponsorSection />
      {/* <WhySponsorSection /> */}
      {/* <AudienceSection /> */}
      <SpeakersSection />
      <EventFormatSection />
      <AgendaSection />
      <LocationSection />
      <ContactFormSection />
      <FooterSection />
    </main>
  );
};
