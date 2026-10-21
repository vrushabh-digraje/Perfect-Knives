"use client";

import { useEffect, useState } from "react";
import { X, Phone, Mail, MapPin, Send, Check } from "lucide-react";
import { companyInfo } from "@/data/company";

interface QuickContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickContactDrawer({ isOpen, onClose }: QuickContactDrawerProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Quick contact sidebar"
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm transition-opacity"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true"></div>

      <div className="relative w-full max-w-md h-full bg-[#111111] border-l border-[#222222] text-[#aeaeae] shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10 animate-slideLeft">
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#222222]">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <button
              onClick={onClose}
              className="p-2 bg-[#222222] hover:bg-[#ea130e] text-[#aeaeae] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Contact Details from live site */}
          <div className="py-6 space-y-4">
            <a
              href={`tel:${companyInfo.phone}`}
              className="group flex items-start gap-4 p-4 bg-[#1a1a1a] hover:bg-[#222222] border border-[#262626] hover:border-[#ea130e] transition-all"
            >
              <div className="w-10 h-10 bg-white/5 text-[#ea130e] group-hover:bg-[#ea130e] group-hover:text-white flex items-center justify-center shrink-0 transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#888888] font-bold">
                  Phone number
                </h4>
                <p className="text-base font-bold text-white group-hover:text-[#ea130e] transition-colors mt-0.5">
                  {companyInfo.phone}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${companyInfo.email}`}
              className="group flex items-start gap-4 p-4 bg-[#1a1a1a] hover:bg-[#222222] border border-[#262626] hover:border-[#ea130e] transition-all"
            >
              <div className="w-10 h-10 bg-white/5 text-[#ea130e] group-hover:bg-[#ea130e] group-hover:text-white flex items-center justify-center shrink-0 transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <h4 className="text-xs uppercase tracking-wider text-[#888888] font-bold">
                  Email address
                </h4>
                <p className="text-sm font-bold text-white group-hover:text-[#ea130e] transition-colors mt-0.5 truncate">
                  {companyInfo.email}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 bg-[#1a1a1a] border border-[#262626]">
              <div className="w-10 h-10 bg-white/5 text-[#ea130e] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#888888] font-bold">
                  Address info
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed mt-1">
                  {companyInfo.addressShort}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Note Form */}
          <div className="pt-2 pb-4">
            {submitted ? (
              <div className="p-4 bg-emerald-950 border border-emerald-600 text-emerald-300 text-xs text-center flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                Message received! We will get back shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-[#1a1a1a] border border-[#333333] text-white focus:outline-none focus:border-[#ea130e]"
                />
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-[#1a1a1a] border border-[#333333] text-white focus:outline-none focus:border-[#ea130e]"
                />
                <input
                  type="text"
                  required
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-[#1a1a1a] border border-[#333333] text-white focus:outline-none focus:border-[#ea130e]"
                />
                <textarea
                  rows={3}
                  placeholder="Your message (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-[#1a1a1a] border border-[#333333] text-white focus:outline-none focus:border-[#ea130e] resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#ea130e] hover:bg-[#c8100c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#222222] text-center text-xs text-[#666666]">
          <span>&copy; SiteCraftix</span>
        </div>
      </div>
    </div>
  );
}
