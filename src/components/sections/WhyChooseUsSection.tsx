import React from "react";
import { MessageSquare, Target, Lightbulb } from "lucide-react";

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section
      id="why-choose-us"
      className="py-20 lg:py-28 bg-navy-deep text-white relative overflow-hidden"
    >
      {/* Subtle background ornamentation */}
      <div className="absolute inset-0 legal-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light mb-3">
            <span className="w-8 h-[1px] bg-gold" />
            <span>WHY CHOOSE IWAN ASSOCIATES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-normal tracking-tight mb-5">
            A Thoughtful Approach to Every Legal Challenge
          </h2>
          <p className="text-base sm:text-lg text-ivory/80 font-light leading-relaxed">
            We focus on criminal defense, complex civil and tribunal matters, white-collar crime, and sensitive matrimonial disputes.
          </p>
          <p className="text-base sm:text-lg text-ivory/70 font-light leading-relaxed mt-3">
            Our approach combines legal analysis, structured preparation, technology-informed perspectives where relevant, and individualized advice. We aim to help clients understand their legal position and make informed decisions.
          </p>
        </div>

        {/* 3 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Feature 1 */}
          <div className="p-8 bg-navy-primary/70 border border-gold/25 backdrop-blur-sm flex flex-col justify-between hover:border-gold transition-colors duration-300">
            <div>
              <div className="w-12 h-12 border border-gold/40 bg-navy-deep flex items-center justify-center text-gold mb-6">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-gold-light font-medium mb-4">
                Law You Can Understand
              </h3>
              <p className="text-sm sm:text-base text-ivory/75 font-light leading-relaxed">
                Legal proceedings and corporate investigations can be overwhelming. We aim to explain legal principles, procedural options, and potential next steps in clear, accessible language so clients can make informed decisions.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gold-light/70 uppercase tracking-widest font-mono">
              <span>Clarity &amp; Counsel</span>
              <span>01</span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-navy-primary/70 border border-gold/25 backdrop-blur-sm flex flex-col justify-between hover:border-gold transition-colors duration-300">
            <div>
              <div className="w-12 h-12 border border-gold/40 bg-navy-deep flex items-center justify-center text-gold mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-gold-light font-medium mb-4">
                A Focused Legal Strategy
              </h3>
              <p className="text-sm sm:text-base text-ivory/75 font-light leading-relaxed">
                Every matter has its own circumstances, evidence, and legal considerations. We assess the relevant issues and work toward developing an appropriate strategy aligned with the client&apos;s circumstances and objectives.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gold-light/70 uppercase tracking-widest font-mono">
              <span>Precision Strategy</span>
              <span>02</span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-navy-primary/70 border border-gold/25 backdrop-blur-sm flex flex-col justify-between hover:border-gold transition-colors duration-300">
            <div>
              <div className="w-12 h-12 border border-gold/40 bg-navy-deep flex items-center justify-center text-gold mb-6">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-gold-light font-medium mb-4">
                Take the First Step
              </h3>
              <p className="text-sm sm:text-base text-ivory/75 font-light leading-relaxed">
                An early consultation can help clarify available options, identify important documentation, and determine appropriate next steps to safeguard legal rights and interests.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gold-light/70 uppercase tracking-widest font-mono">
              <span>Timely Action</span>
              <span>03</span>
            </div>
          </div>
        </div>

        {/* Ethical disclaimer reminder */}
        <div className="mt-12 text-center text-xs text-ivory/50 font-light">
          * Consultations and representation are subject to conflict checks and statutory compliance.
        </div>
      </div>
    </section>
  );
};
