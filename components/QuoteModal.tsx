"use client";

import { useState, useEffect } from "react";
import { X, Send, CheckCircle2, MessageSquare, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";
import confetti from "canvas-confetti";
import { companyInfo } from "@/data/company";
import { productsData } from "@/data/products";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductId?: string;
}

export default function QuoteModal({ isOpen, onClose, initialProductId }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productId: initialProductId || "general",
    material: "D2 High Carbon Chrome",
    dimensions: "",
    quantity: "10-50 pcs",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialProductId) {
      setFormData((prev) => ({ ...prev, productId: initialProductId }));
    }
  }, [initialProductId]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsSuccess(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  const handleSendWhatsApp = () => {
    const selectedProd = productsData.find((p) => p.id === formData.productId)?.name || "Industrial Blades";
    const text = encodeURIComponent(
      `Hello Perfect Knives, I would like to request a quotation:\n\n*Product:* ${selectedProd}\n*Name:* ${formData.name}\n*Company:* ${formData.company || "N/A"}\n*Phone:* ${formData.phone}\n*Material:* ${formData.material}\n*Dimensions:* ${formData.dimensions || "Standard"}\n*Quantity:* ${formData.quantity}\n*Notes:* ${formData.message || "Please provide price & lead time."}`
    );
    window.open(`https://wa.me/919967882739?text=${text}`, "_blank");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Request a quote"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fadeIn"
    >
      <div className="relative w-full max-w-xl bg-white border border-gray-200 shadow-2xl p-6 md:p-8 my-8 text-[#1e1e1e]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-gray-100 text-gray-500 hover:text-black hover:bg-gray-200 transition-colors"
          title="Close quote form"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#1e1e1e]">Quotation Request Received!</h3>
            <p className="text-[#575757] text-sm max-w-md mx-auto">
              Thank you, <strong className="text-[#ea130e]">{formData.name}</strong>. Our tooling engineers will review your dimensional parameters and email an official quotation to{" "}
              <span className="text-[#1e1e1e] font-semibold">{formData.email}</span> shortly.
            </p>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Also Send on WhatsApp
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#1e1e1e] text-xs font-bold uppercase tracking-wider transition-all"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase font-bold text-[#ea130e] tracking-widest block mb-1">
                Fast Industrial Quote
              </span>
              <h2 className="text-2xl font-bold text-[#1e1e1e]">Request A Quote</h2>
              <p className="text-xs text-[#666666] mt-1">
                Direct OEM factory pricing with certified metallurgy &amp; precision inspection.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#1e1e1e] uppercase tracking-wider mb-1">
                    Your Name <span className="text-[#ea130e]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 text-[#1e1e1e] text-sm focus:outline-none focus:border-[#ea130e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1e1e1e] uppercase tracking-wider mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Packaging Corp Pvt Ltd"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 text-[#1e1e1e] text-sm focus:outline-none focus:border-[#ea130e]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#1e1e1e] uppercase tracking-wider mb-1">
                    Email Address <span className="text-[#ea130e]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@company.com"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 text-[#1e1e1e] text-sm focus:outline-none focus:border-[#ea130e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1e1e1e] uppercase tracking-wider mb-1">
                    Phone / WhatsApp <span className="text-[#ea130e]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 9967882739"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 text-[#1e1e1e] text-sm focus:outline-none focus:border-[#ea130e]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#1e1e1e] uppercase tracking-wider mb-1">
                    Target Blade / Product
                  </label>
                  <select
                    value={formData.productId}
                    onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 text-[#1e1e1e] text-sm focus:outline-none focus:border-[#ea130e]"
                  >
                    <option value="general">Custom Industrial Blade</option>
                    {productsData.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1e1e1e] uppercase tracking-wider mb-1">
                    Preferred Material Grade
                  </label>
                  <select
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 text-[#1e1e1e] text-sm focus:outline-none focus:border-[#ea130e]"
                  >
                    <option value="D2 High Carbon Chrome">AISI D2 Tool Steel (HRC 58-62)</option>
                    <option value="HSS M2 High Speed Steel">HSS M2 / M35 High Speed Steel</option>
                    <option value="Tungsten Carbide Tipped">Tungsten Carbide Solid/Tipped</option>
                    <option value="Stainless 420 / 440C">Food Grade Stainless 420 / 440C</option>
                    <option value="CPM Powder Steel">CPM-10V Powder Metallurgy</option>
                    <option value="Not Sure - Need Guidance">Not Sure - Need Guidance</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#1e1e1e] uppercase tracking-wider mb-1">
                    Dimensions (L × W × T mm)
                  </label>
                  <input
                    type="text"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    placeholder="e.g. 250 x 50 x 3 mm"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 text-[#1e1e1e] text-sm focus:outline-none focus:border-[#ea130e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1e1e1e] uppercase tracking-wider mb-1">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 text-[#1e1e1e] text-sm focus:outline-none focus:border-[#ea130e]"
                  >
                    <option value="1-5 pcs (Trial / Prototype)">1 - 5 pcs (Trial / Prototype)</option>
                    <option value="10-50 pcs">10 - 50 pcs (Batch)</option>
                    <option value="50-200 pcs">50 - 200 pcs (Production)</option>
                    <option value="500+ pcs (Bulk Annual Supply)">500+ pcs (Bulk Contract)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1e1e1e] uppercase tracking-wider mb-1">
                  Specific Requirements / Machine Model (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention machine model (e.g. Polar, Multivac, Totani), bevel angle, or special tolerances..."
                  className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 text-[#1e1e1e] text-sm focus:outline-none focus:border-[#ea130e] resize-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NDA &amp; Technical confidentiality assured. Direct factory guarantee.</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3 px-6 bg-[#ea130e] hover:bg-[#c8100c] text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Quotation Request
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full sm:w-auto py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Instant WhatsApp
                </button>
              </div>
            </form>

            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#ea130e]" />
                Urgent requirement? Call {companyInfo.phone}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
