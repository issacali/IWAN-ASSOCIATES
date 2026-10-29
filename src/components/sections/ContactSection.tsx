import React from "react";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Phone, Clock, MapPin, Mail, Shield, AlertTriangle } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark mb-3">
            <span className="w-8 h-[1px] bg-gold" />
            <span>CONTACT &amp; CONSULTATIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy-deep font-normal tracking-tight mb-4">
            Enquire for Legal Consultation
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 font-light leading-relaxed">
            Connect directly with our advocates to discuss legal representation, trial proceedings, appellate matters, or tribunal disputes.
          </p>
        </div>

        {/* Two-Column Grid: Contact Information & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details & Chamber Notes */}
          <div className="lg:col-span-5 space-y-8">
            {/* Firm Brand Card */}
            <div className="bg-navy-deep text-white p-8 border border-gold/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 -translate-y-16 translate-x-16 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 border border-gold/60 flex items-center justify-center font-serif text-sm font-bold text-gold bg-navy-primary">
                  IA
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold tracking-wider text-ivory uppercase">
                    IWAN ASSOCIATES
                  </h3>
                  <p className="text-[10px] tracking-widest text-gold-light uppercase font-medium">
                    Advocates &amp; Legal Consultants
                  </p>
                </div>
              </div>

              <p className="text-sm text-ivory/75 font-light leading-relaxed border-t border-white/10 pt-4 mb-6">
                Representing clients before the Supreme Court of India, High Courts, District Courts, and National Tribunals.
              </p>

              {/* Telephone Contacts */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded border border-gold/40 bg-navy-light flex items-center justify-center flex-shrink-0 text-gold mt-1">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-ivory/60">
                      Direct Telephones
                    </span>
                    <div className="flex flex-col gap-1 mt-1 font-sans">
                      <a
                        href="tel:+918744090454"
                        className="text-base font-semibold text-gold-light hover:text-white transition-colors"
                      >
                        +91 87440904546
                      </a>
                      <a
                        href="tel:+919547964009"
                        className="text-base font-semibold text-gold-light hover:text-white transition-colors"
                      >
                        +91 9547964009
                      </a>
                    </div>
                  </div>
                </div>

                {/* Consultation Hours */}
                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <div className="w-8 h-8 rounded border border-gold/40 bg-navy-light flex items-center justify-center flex-shrink-0 text-gold mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-ivory/60">
                      Consultation Hours
                    </span>
                    <span className="text-sm font-medium text-ivory block mt-0.5">
                      10:00 AM – 08:00 PM (IST)
                    </span>
                    <span className="text-xs text-ivory/60">Monday through Saturday</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chamber Address & Official Email Verification Notice */}
            <div className="bg-white p-6 border border-lightBorder space-y-4 text-xs text-charcoal/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-navy-deep block uppercase tracking-wider text-[11px]">
                    Chamber &amp; Office Location
                  </span>
                  <p className="text-mutedGrey mt-0.5">
                    New Delhi Chambers (Supreme Court &amp; High Court jurisdiction). Verified office premises address will be updated upon physical confirmation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-lightBorder">
                <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-navy-deep block uppercase tracking-wider text-[11px]">
                    Official Correspondence Email
                  </span>
                  <p className="text-mutedGrey mt-0.5">
                    Official domain-authenticated email mailbox will be provided upon verified configuration. For immediate outreach, please use the direct telephone lines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-lightBorder text-charcoal/70">
                <Shield className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <p>
                  Confidential legal guidance compliant with the Advocates Act, 1961.
                </p>
              </div>
            </div>

            {/* Privacy Alert */}
            <div className="p-4 bg-gold/10 border-l-2 border-gold text-xs text-charcoal/80 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
              <p>
                <strong>Confidentiality Notice:</strong> Please do not submit sensitive documentary evidence, case files, or witness statements via web forms. Bring relevant paperwork during your scheduled consultation.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
};
