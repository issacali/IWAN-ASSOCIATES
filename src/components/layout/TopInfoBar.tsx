import React from "react";
import { Phone, Clock, ShieldCheck } from "lucide-react";

export const TopInfoBar: React.FC = () => {
  return (
    <header className="bg-navy-deep border-b border-gold/20 text-xs text-ivory/80 tracking-wider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Practice Badge */}
          <div className="hidden md:flex items-center gap-2 text-gold-light/90">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
            <span className="font-medium uppercase text-[11px] tracking-widest">
              Advocates & Legal Consultants • Supreme Court & Tribunals
            </span>
          </div>

          {/* Contact Numbers & Hours */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-1">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-gold" aria-hidden="true" />
              <span className="text-ivory/60">Call Us:</span>
              <a
                href="tel:+918744090454"
                className="text-ivory hover:text-gold transition-colors font-medium tracking-normal"
                aria-label="Call Advocate office at +91 87440904546"
              >
                +91 87440904546
              </a>
              <span className="text-gold/40">|</span>
              <a
                href="tel:+919547964009"
                className="text-ivory hover:text-gold transition-colors font-medium tracking-normal"
                aria-label="Call Advocate office at +91 9547964009"
              >
                +91 9547964009
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-ivory/70 border-l border-gold/20 pl-4">
              <Clock className="w-3 h-3 text-gold" aria-hidden="true" />
              <span>10:00 AM – 08:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
