import React from "react";
import { Phone, Calendar, ArrowRight } from "lucide-react";

export const ConsultationCTA: React.FC = () => {
  return (
    <section className="bg-navy-primary text-white py-16 lg:py-20 border-y border-gold/30 relative">
      {/* Subtle gold line accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Monogram Badge */}
        <div className="w-10 h-10 mx-auto border border-gold/40 flex items-center justify-center font-serif text-sm font-bold text-gold mb-6 bg-navy-deep">
          IA
        </div>

        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ivory font-normal tracking-tight mb-4">
          Your Legal Concerns Deserve Careful Attention
        </h2>

        {/* Supporting Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-ivory/80 font-light leading-relaxed mb-8">
          Contact IWAN ASSOCIATES to enquire about a consultation and discuss the nature of your legal concern.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-navy-deep bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-light hover:to-gold transition-all duration-300 shadow-gold group"
          >
            <Calendar className="w-4 h-4 mr-2" />
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <a
            href="tel:+918744090454"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-ivory bg-transparent border border-gold/60 hover:border-gold hover:bg-gold/10 transition-all duration-300"
          >
            <Phone className="w-4 h-4 mr-2 text-gold" />
            <span>Call Our Office</span>
          </a>
        </div>
      </div>
    </section>
  );
};
