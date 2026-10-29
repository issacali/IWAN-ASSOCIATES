"use client";

import React from "react";
import { X, Scale, ShieldAlert } from "lucide-react";

interface LegalDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalDisclaimerModal: React.FC<LegalDisclaimerModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div className="relative w-full max-w-2xl bg-white border border-lightBorder shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Top Gold Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-mutedGrey hover:text-navy-deep hover:bg-ivory rounded transition-colors"
          aria-label="Close legal disclaimer dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 border border-gold/40 bg-ivory flex items-center justify-center text-gold">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-dark block">
              Professional Compliance Notice
            </span>
            <h3
              id="disclaimer-title"
              className="font-serif text-xl sm:text-2xl text-navy-deep font-semibold"
            >
              Legal Disclaimer &amp; Terms of Use
            </h3>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
          <div className="p-4 bg-gold/10 border-l-2 border-gold text-charcoal">
            <p className="font-serif italic text-sm">
              &ldquo;The information provided on this website is intended for general informational purposes only and does not constitute legal advice or create an advocate-client relationship. Visiting or accessing this website does not by itself establish an advocate-client relationship. Any use of this website should be consistent with applicable professional and legal requirements.&rdquo;
            </p>
          </div>

          <h4 className="font-serif font-bold text-navy-deep pt-2 text-sm uppercase tracking-wider">
            Bar Council of India Rule Compliance
          </h4>
          <p>
            As per the rules of the Bar Council of India, advocates and law firms in India are not permitted to solicit work or advertise their services. By continuing to use this website, the user acknowledges the following:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-xs">
            <li>
              There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from IWAN ASSOCIATES or any of its advocates to solicit any work through this website.
            </li>
            <li>
              The visitor wishes to gain more information about IWAN ASSOCIATES for their own information and personal knowledge.
            </li>
            <li>
              The information about the firm, its advocates, and practice areas is provided to the user only on their specific request.
            </li>
            <li>
              Any transmission, receipt, or use of this site does not constitute or create an advocate-client relationship.
            </li>
            <li>
              None of the information contained on this website should be interpreted as legal advice, a legal opinion, or a guarantee of outcome in any litigation.
            </li>
          </ul>

          <div className="mt-4 p-3 bg-ivory border border-lightBorder flex items-start gap-2.5 text-xs text-mutedGrey">
            <ShieldAlert className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            <span>
              IWAN ASSOCIATES is not liable for any action taken by the user relying on material or information provided on this website. For specific legal questions, independent legal counsel must be consulted.
            </span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-lightBorder flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-navy-deep bg-gold hover:bg-gold-light transition-colors"
          >
            I Acknowledge &amp; Understand
          </button>
        </div>
      </div>
    </div>
  );
};
