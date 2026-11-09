/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  Hash,
  Sparkles,
  Check,
  Building2,
  User,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import {
  MaskedLine,
  useSectionEntry,
} from "../components/common/ui/SectionEntry";
import { GlowField } from "../components/common/ui/GlowField";
import { GlassButton } from "../components/common/ui/GlassButton";
import {
  EMAIL,
  MAILTO_URL,
  PHONE_WHATSAPP,
  WHATSAPP_MESSAGE,
} from "../constants";
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
const API_KEY = import.meta.env.VITE_API_KEY;

const contactInfo = {
  name: "Nexus Team",
  location: "Hong Kong",
  email: "Jeffrey.Teh@thetehgroup.com",
  phone: "+852 68019775",
  gradient: "from-blue-500 to-cyan-600",
  role: "Founder & CEO",
  initials: "JT",
  avatar: "/images/contacts/jeffreyteh.png",
};

const hashtags = [
  "#AINexusAPAC",
  "#AISponsor",
  "#Cybersecurity",
  "#EnterpriseTech",
  "#APACTechTour",
  "#Innovation2025",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFieldErrors((prev) => ({
      ...prev,
      [e.target.name]: undefined,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setStatusMessage("");
    setFieldErrors({});
    if (!API_ENDPOINT || !API_KEY) {
      console.error("Missing contact form API configuration.");
      setStatus("error");
      setStatusMessage(
        "The contact form is temporarily unavailable. Please try again later."
      );
      setLoading(false);
      return;
    }

    try {
      const newFieldErrors = {};
      const trimmedMessage = formData.message.trim();
      if (trimmedMessage.length < 10 || trimmedMessage.length > 5000) {
        newFieldErrors.message =
          "Message must be between 10 and 5000 characters.";
      }

      if (!formData.from_name.trim()) {
        newFieldErrors.from_name = "Full name is required.";
      }

      if (!formData.from_email.trim()) {
        newFieldErrors.from_email = "Email address is required.";
      }

      if (Object.keys(newFieldErrors).length > 0) {
        setStatus("error");
        setStatusMessage("Please fix the highlighted fields.");
        setFieldErrors(newFieldErrors);
        return;
      }

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": API_KEY,
        },
        body: JSON.stringify({
          fullname: formData.from_name,
          email: formData.from_email,
          phone_number: formData.phone,
          company_name: formData.company,
          message: formData.message,
        }),
      });
      const responseBody = await response.json().catch(() => null);

      if (response.status === 429) {
        setFieldErrors({});
        setStatus("error");
        setStatusMessage(
          responseBody?.message ||
            "You have made too many requests. Please wait a moment and try again."
        );
        setTimeout(() => {
          setStatus(null);
          setStatusMessage("");
        }, 5000);
        return;
      }

      if (!response.ok) {
        const apiMessage =
          responseBody?.message ||
          (Array.isArray(responseBody?.errors) ?
            responseBody.errors.join(", ")
          : null);

        setStatus("error");
        setStatusMessage(
          apiMessage || `Failed to submit form. Status: ${response.status}`
        );
        if (Array.isArray(responseBody?.errors)) {
          const parsedErrors = {};
          responseBody.errors.forEach((err) => {
            const lowerErr = err.toLowerCase();
            if (
              lowerErr.includes("full name") ||
              lowerErr.includes("fullname")
            ) {
              parsedErrors.from_name = err;
            } else if (lowerErr.includes("email")) {
              parsedErrors.from_email = err;
            } else if (lowerErr.includes("phone")) {
              parsedErrors.phone = err;
            } else if (lowerErr.includes("company")) {
              parsedErrors.company = err;
            } else if (lowerErr.includes("message")) {
              parsedErrors.message = err;
            }
          });

          setFieldErrors(parsedErrors);
        }
        return;
      }

      setStatus("success");
      setStatusMessage(
        responseBody?.message ||
          "Message sent successfully! We'll contact you soon."
      );
      setFieldErrors({});
      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        company: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setStatus(null);
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setStatusMessage(
        error?.message || "Failed to send message. Please try again."
      );
      setFieldErrors({});
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = (hasError) =>
    [
      "w-full px-4 py-3 rounded-xl bg-white/[0.06] border text-white placeholder-gray-500 focus:outline-none transition-colors",
      hasError ?
        "border-red-500/70 focus:border-red-400 focus:ring-2 focus:ring-red-500/20"
      : "border-white/15 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20",
    ].join(" ");

  return (
    <motion.div
      className="mx-auto max-w-4xl"
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}>
      <div className="nx-glass-pane relative overflow-hidden p-8 md:p-12">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-bl-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 blur-2xl" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8 text-center">
            <motion.div
              className="nx-glass-chip mb-4 inline-flex items-center gap-2 px-4 py-2"
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileInView={{ opacity: 1, y: 0 }}>
              <Mail className="h-4 w-4 text-cyan-300" />
              <span className="text-sm font-medium text-cyan-300">
                Sponsorship Inquiry
              </span>
            </motion.div>

            <h3 className="mb-3 text-3xl font-bold text-white md:text-4xl">
              Get in Touch with{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                {contactInfo.name}
              </span>
            </h3>
            <p className="text-white/60">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4"
              initial={{ opacity: 0, y: -20 }}>
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-300" />
              <p className="font-medium text-emerald-300">
                {statusMessage ||
                  "Message sent successfully! We'll contact you soon."}
              </p>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-3 rounded-xl border border-red-400/30 bg-red-500/10 p-4"
              initial={{ opacity: 0, y: -20 }}>
              <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-300" />
              <p className="font-medium text-red-300">
                {statusMessage ||
                  "Failed to send message. Please try again or email us directly."}
              </p>
            </motion.div>
          )}

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 flex items-center gap-2 font-medium text-white/70">
                  <User className="h-4 w-4 text-cyan-300" />
                  Full Name *
                </label>
                <input
                  className={inputClasses(Boolean(fieldErrors.from_name))}
                  name="from_name"
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  type="text"
                  value={formData.from_name}
                />
                {fieldErrors.from_name && (
                  <p className="mt-2 text-sm text-red-300">
                    {fieldErrors.from_name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 flex items-center gap-2 font-medium text-white/70">
                  <Mail className="h-4 w-4 text-cyan-300" />
                  Email Address *
                </label>
                <input
                  className={inputClasses(Boolean(fieldErrors.from_email))}
                  name="from_email"
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  type="email"
                  value={formData.from_email}
                />
                {fieldErrors.from_email && (
                  <p className="mt-2 text-sm text-red-300">
                    {fieldErrors.from_email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 flex items-center gap-2 font-medium text-white/70">
                  <Phone className="h-4 w-4 text-cyan-300" />
                  Phone Number
                </label>
                <input
                  className={inputClasses(Boolean(fieldErrors.phone))}
                  name="phone"
                  onChange={handleChange}
                  placeholder="+1 234 567 8900"
                  type="tel"
                  value={formData.phone}
                />
                {fieldErrors.phone && (
                  <p className="mt-2 text-sm text-red-300">
                    {fieldErrors.phone}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label className="mb-2 flex items-center gap-2 font-medium text-white/70">
                  <Building2 className="h-4 w-4 text-cyan-300" />
                  Company Name
                </label>
                <input
                  className={inputClasses(Boolean(fieldErrors.company))}
                  name="company"
                  onChange={handleChange}
                  placeholder="Company Inc."
                  type="text"
                  value={formData.company}
                />
                {fieldErrors.company && (
                  <p className="mt-2 text-sm text-red-300">
                    {fieldErrors.company}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 flex items-center gap-2 font-medium text-white/70">
                <MessageCircle className="h-4 w-4 text-cyan-300" />
                Message *
              </label>
              <textarea
                className={[
                  "w-full px-4 py-3 rounded-xl bg-white/[0.06] border text-white placeholder-gray-500 focus:outline-none transition-colors resize-none",
                  fieldErrors.message ?
                    "border-red-500/70 focus:border-red-400 focus:ring-2 focus:ring-red-500/20"
                  : "border-white/15 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20",
                ].join(" ")}
                name="message"
                onChange={handleChange}
                placeholder="Tell us about your sponsorship interests and goals..."
                required
                rows={6}
                value={formData.message}
              />
              {fieldErrors.message && (
                <p className="mt-2 text-sm text-red-300">
                  {fieldErrors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <GlassButton
              className="w-full justify-center gap-3 py-4 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
              disabled={loading}
              tone="emerald"
              type="submit">
              {loading ?
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Sending...</span>
                </>
              : <>
                  <Send className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  <span>Send Message</span>
                </>
              }
            </GlassButton>

            {/* Contact Info */}
            <div className="border-t border-white/10 pt-6">
              <p className="mb-4 text-center text-sm text-white/50">
                Or reach out directly:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a
                  className="flex items-center gap-2 text-cyan-300 transition-colors hover:text-cyan-200"
                  href={MAILTO_URL}>
                  <Mail className="h-4 w-4" />
                  <span className="text-sm font-medium">{EMAIL}</span>
                </a>
                <a
                  className="flex items-center gap-2 text-cyan-300 transition-colors hover:text-cyan-200"
                  href={`https://api.whatsapp.com/send?phone=${PHONE_WHATSAPP}&text=${WHATSAPP_MESSAGE}`}
                  rel="noopener noreferrer"
                  target="_blank">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">{PHONE_WHATSAPP}</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

const HashtagBadge = ({ tag, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(tag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      onClick={handleCopy}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.06 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.95 }}>
      <div className="nx-glass-chip group flex cursor-pointer items-center gap-2 px-5 py-2.5 transition-colors duration-300 hover:border-white/30">
        <Hash className="h-4 w-4 text-emerald-300 transition-colors group-hover:text-cyan-300" />
        <span className="font-semibold text-white">
          {tag.substring(1)}
        </span>
        {copied && (
          <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}>
            <Check className="h-4 w-4 text-emerald-300" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default function ContactFormSection() {
  const containerRef = useRef(null);
  const entry = useSectionEntry();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4 py-32"
      id="contact"
      ref={containerRef}>
      <GlowField
        className="opacity-55"
        style={{ y: backgroundY }}
        blobs={[
          {
            className: "top-[16%] left-[10%] w-[420px] h-[420px] bg-cyan-500/25",
          },
          {
            className:
              "bottom-[16%] right-[10%] w-[380px] h-[380px] bg-emerald-500/25",
          },
          {
            className:
              "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[520px] bg-blue-500/15",
          },
          {
            className: "-top-40 right-[30%] w-[380px] h-[380px] bg-cyan-500/15",
          },
        ]}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl">
        <div className="mb-20 text-center">
          <motion.div
            className="nx-glass-chip mb-6 inline-flex items-center gap-2 px-4 py-2"
            {...entry.fade(0, 14, 0.6)}>
            <MessageCircle className="h-5 w-5 text-cyan-300" />
            <span className="font-semibold text-cyan-300">Get in Touch</span>
          </motion.div>

          <h2 className="mb-6 text-5xl font-bold md:text-7xl">
            <MaskedLine delay={0.1}>
              <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Contact Us
              </span>
            </MaskedLine>
          </h2>

          <motion.p
            className="mx-auto max-w-3xl text-xl text-white/70"
            {...entry.fade(0.24, 16)}>
            Contact us for inquiries about Nexus APAC Indonesia 2026
          </motion.p>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Hashtags Section */}
        <motion.div
          className="mt-20 text-center"
          {...entry.fade(0.36, 24)}>
          <div className="nx-glass-pane inline-block px-10 py-8 text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <Sparkles className="h-6 w-6 text-emerald-300" />
              <h3 className="text-2xl font-bold text-white">
                Follow the Journey
              </h3>
              <Sparkles className="h-6 w-6 text-emerald-300" />
            </div>

            <p className="mb-6 text-white/60">
              Stay updated with our latest news and events
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {hashtags.map((tag, idx) => (
                <HashtagBadge index={idx} key={idx} tag={tag} />
              ))}
            </div>

            <motion.p
              className="mt-6 text-sm text-white/40"
              initial={{ opacity: 0 }}
              transition={{ delay: 1 }}
              whileInView={{ opacity: 1 }}>
              Click any hashtag to copy
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
