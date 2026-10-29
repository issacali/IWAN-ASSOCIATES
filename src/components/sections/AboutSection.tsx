import React from "react";
import { BookOpen, Search, Compass, CheckCircle2 } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark mb-3">
            <span className="w-8 h-[1px] bg-gold" />
            <span>ABOUT OUR FIRM</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy-deep font-normal tracking-tight">
            Legal Expertise with a Strategic Perspective
          </h2>
        </div>

        {/* Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Descriptive Content */}
          <div className="lg:col-span-7 space-y-6 text-charcoal/85 text-base sm:text-lg leading-relaxed font-light">
            <p className="font-normal text-navy-primary text-lg sm:text-xl leading-relaxed">
              <strong className="font-semibold text-navy-deep">IWAN ASSOCIATES</strong> is a legal practice focused on criminal defense, appellate litigation, white-collar crime, family and matrimonial disputes, and specialized tribunal matters.
            </p>

            <p>
              The firm emphasizes thoughtful legal analysis, careful preparation, technology-informed perspectives, and individualized legal strategies.
            </p>

            <p>
              From trial proceedings to appellate matters, our approach centers on understanding each client&apos;s circumstances, assessing the relevant legal issues, and communicating available options clearly.
            </p>

            <p className="border-l-2 border-gold pl-5 italic text-charcoal/90 text-base sm:text-lg bg-gold/5 py-3 pr-3">
              &ldquo;We believe that effective legal representation begins with a thorough understanding of the facts, a rigorous examination of applicable law, and a well-considered approach to each matter.&rdquo;
            </p>

            {/* Core Practice Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-navy-primary">
                  Trial Courts to Supreme Court of India
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-navy-primary">
                  Confidential &amp; High-Stakes Advisory
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-navy-primary">
                  Electronic Evidence &amp; Cyber Analysis
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-navy-primary">
                  Rigorous Jurisprudential Research
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Accent & 3 Highlights */}
          <div className="lg:col-span-5 space-y-6">
            {/* Architectural Legal Graphic Box */}
            <div className="relative bg-navy-deep p-8 border border-gold/30 text-white shadow-xl overflow-hidden group">
              {/* Subtle gold line ornament */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 -translate-y-12 translate-x-12 rounded-full blur-xl pointer-events-none" />
              <div className="absolute inset-0 legal-grid-pattern opacity-10 pointer-events-none" />

              <h3 className="font-serif text-xl sm:text-2xl text-gold-light mb-6 font-medium">
                Our Practice Principles
              </h3>

              <div className="space-y-6">
                {/* Highlight 1 */}
                <div className="flex items-start gap-4 pb-5 border-b border-white/10">
                  <div className="w-10 h-10 rounded border border-gold/40 bg-navy-light flex items-center justify-center flex-shrink-0 text-gold">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-white tracking-wide">
                      Strategic Legal Analysis
                    </h4>
                    <p className="text-sm text-ivory/70 mt-1 font-light leading-relaxed">
                      Structured examination of procedural posture, evidentiary risks, and strategic trial and appellate avenues.
                    </p>
                  </div>
                </div>

                {/* Highlight 2 */}
                <div className="flex items-start gap-4 pb-5 border-b border-white/10">
                  <div className="w-10 h-10 rounded border border-gold/40 bg-navy-light flex items-center justify-center flex-shrink-0 text-gold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-white tracking-wide">
                      Research-Driven Representation
                    </h4>
                    <p className="text-sm text-ivory/70 mt-1 font-light leading-relaxed">
                      In-depth jurisprudence, constitutional precedents, statutory interpretations, and exhaustive case law mapping.
                    </p>
                  </div>
                </div>

                {/* Highlight 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded border border-gold/40 bg-navy-light flex items-center justify-center flex-shrink-0 text-gold">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-white tracking-wide">
                      Individualized Legal Guidance
                    </h4>
                    <p className="text-sm text-ivory/70 mt-1 font-light leading-relaxed">
                      Dedicated counsel tailored to the unique factual, financial, personal, and procedural reality of every client.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote attribution card */}
            <div className="bg-white p-6 border border-lightBorder shadow-sm flex items-center justify-between">
              <div>
                <span className="block text-xs uppercase tracking-wider text-mutedGrey font-medium">
                  Jurisdiction Focus
                </span>
                <span className="text-sm font-semibold text-navy-deep font-serif">
                  Supreme Court of India &amp; National Tribunals
                </span>
              </div>
              <div className="w-8 h-8 rounded-full border border-gold/50 flex items-center justify-center text-gold text-xs font-serif font-bold">
                IA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
