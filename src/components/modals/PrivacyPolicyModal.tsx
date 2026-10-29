"use client";

import React from "react";
import { X, Lock, ShieldCheck } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      <div className="relative w-full max-w-2xl bg-white border border-lightBorder shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Top Gold Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-mutedGrey hover:text-navy-deep hover:bg-ivory rounded transition-colors"
          aria-label="Close privacy policy dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 border border-gold/40 bg-ivory flex items-center justify-center text-gold">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-dark block">
              Confidentiality Standards
            </span>
            <h3
              id="privacy-title"
              className="font-serif text-xl sm:text-2xl text-navy-deep font-semibold"
            >
              Privacy &amp; Data Protection Notice
            </h3>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
          <p>
            At <strong>IWAN ASSOCIATES</strong>, we understand that legal matters often involve personal, financial, and confidential details. This notice explains how data submitted through this website is handled.
          </p>

          <h4 className="font-serif font-bold text-navy-deep pt-2 text-sm uppercase tracking-wider">
            1. Information Collection
          </h4>
          <p>
            When you complete a consultation enquiry on this site, we collect your name, telephone number, optional email address, selected area of practice, preferred contact medium, and a brief description of your enquiry.
          </p>

          <h4 className="font-serif font-bold text-navy-deep pt-2 text-sm uppercase tracking-wider">
            2. Purpose of Processing
          </h4>
          <p>
            The collected information is used solely to respond to your request, assess whether a formal consultation can be arranged, and perform preliminary conflict checks required under professional conduct standards.
          </p>

          <h4 className="font-serif font-bold text-navy-deep pt-2 text-sm uppercase tracking-wider">
            3. Confidentiality &amp; Non-Disclosure
          </h4>
          <p>
            We do not sell, rent, trade, or share your personal contact details with third-party advertisers or external marketing organizations. Information is retained in confidence by the firm&apos;s advocates.
          </p>

          <h4 className="font-serif font-bold text-navy-deep pt-2 text-sm uppercase tracking-wider">
            4. Sensitive Evidence &amp; Documents
          </h4>
          <p>
            Visitors are explicitly advised not to upload or send unencrypted privileged documents, incriminating records, or financial banking files through web contact forms. Substantive evidence should only be presented during secure, in-person, or officially coordinated chambers consultations.
          </p>

          <div className="mt-4 p-3 bg-ivory border border-lightBorder flex items-start gap-2.5 text-xs text-mutedGrey">
            <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            <span>
              If you have any questions regarding how your consultation records are processed, you may reach out to our office at +91 87440904546.
            </span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-lightBorder flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-navy-deep bg-gold hover:bg-gold-light transition-colors"
          >
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
};
