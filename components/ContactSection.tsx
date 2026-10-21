"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { companyInfo } from "@/data/company";

interface ContactSectionProps {
  showTitle?: boolean;
}

export default function ContactSection({ showTitle = true }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        {showTitle && (
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea130e] block">
              Contact Form
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e1e1e] tracking-tight">
              Feel Free to Contact us any time. we will get back to you as soon as we can&apos;t
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-[#f8f9fa] border border-gray-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ea130e] block mb-1">
                Phone number
              </span>
              <a
                href={`tel:${companyInfo.phone}`}
                className="text-lg font-bold text-[#1e1e1e] hover:text-[#ea130e] transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#ea130e]" />
                {companyInfo.phone}
              </a>
            </div>

            <div className="p-6 bg-[#f8f9fa] border border-gray-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ea130e] block mb-1">
                Email address
              </span>
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-base font-bold text-[#1e1e1e] hover:text-[#ea130e] transition-colors flex items-center gap-2 truncate"
              >
                <Mail className="w-4 h-4 text-[#ea130e] shrink-0" />
                {companyInfo.email}
              </a>
            </div>

            <div className="p-6 bg-[#f8f9fa] border border-gray-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ea130e] block mb-1">
                Address info
              </span>
              <p className="text-sm text-[#575757] leading-relaxed flex items-start gap-2 mt-1">
                <MapPin className="w-4 h-4 text-[#ea130e] shrink-0 mt-1" />
                <span>{companyInfo.address}</span>
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#f8f9fa] p-8 sm:p-10 border border-gray-200 shadow-sm relative">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e1e1e]">Thank You!</h3>
                <p className="text-[#575757] text-sm max-w-md mx-auto">
                  Your message has been sent successfully. We will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-5 py-2.5 bg-[#ea130e] hover:bg-[#c8100c] text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1e1e1e]">Contact Form</h3>
                  <p className="text-xs text-[#666666] mt-1">
                    Feel Free to Contact us any time. we will get back to you as soon as we can&apos;t
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-[#1e1e1e] uppercase tracking-wider mb-1.5">
                      Your name <span className="text-[#ea130e]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-[#1e1e1e] text-sm focus:outline-none focus:border-[#ea130e] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1e1e1e] uppercase tracking-wider mb-1.5">
                      Your email <span className="text-[#ea130e]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-[#1e1e1e] text-sm focus:outline-none focus:border-[#ea130e] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1e1e1e] uppercase tracking-wider mb-1.5">
                    Subject <span className="text-[#ea130e]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-[#1e1e1e] text-sm focus:outline-none focus:border-[#ea130e] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1e1e1e] uppercase tracking-wider mb-1.5">
                    Your message (optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Your message (optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-[#1e1e1e] text-sm focus:outline-none focus:border-[#ea130e] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto py-3.5 px-8 bg-[#ea130e] hover:bg-[#c8100c] text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Map */}
        <div className="overflow-hidden border border-gray-300 shadow-md bg-gray-100 h-80 relative">
          <iframe
            title="Perfect Knives Factory Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.146200236402!2d72.9515!3d19.1882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b901a1a55555%3A0x1!2sLokmanya+Nagar%2C+Thane+West%2C+Maharashtra+400606!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
