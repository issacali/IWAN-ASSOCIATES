import React from "react";
import { practiceAreas } from "@/data/practiceAreas";
import { Shield, Briefcase, Users, Scale, ArrowUpRight, Check } from "lucide-react";

export const PracticeAreasSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="w-6 h-6 text-gold" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-gold" />;
      case "Users":
        return <Users className="w-6 h-6 text-gold" />;
      case "Scale":
      default:
        return <Scale className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section id="practice-areas" className="py-20 lg:py-28 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark mb-3">
            <span className="w-8 h-[1px] bg-gold" />
            <span>OUR EXPERTISE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy-deep font-normal tracking-tight mb-4">
            Comprehensive Legal Representation
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 font-light leading-relaxed">
            Every legal matter requires a careful understanding of its facts, applicable law, procedural requirements, and available remedies. IWAN ASSOCIATES provides legal assistance across the following practice areas.
          </p>
        </div>

        {/* 4 Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 items-stretch">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white border border-lightBorder p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl hover:border-gold/40 transition-all duration-300 relative group"
            >
              {/* Top Accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-ivory border border-gold/30 flex items-center justify-center group-hover:bg-navy-deep group-hover:border-gold transition-colors duration-300">
                    {getIcon(area.iconName)}
                  </div>
                  <span className="font-serif text-2xl font-light text-mutedGrey/40 group-hover:text-gold transition-colors">
                    {area.number}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-2xl text-navy-deep font-medium mb-3 group-hover:text-navy-primary transition-colors">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-charcoal/80 font-light leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Services List */}
                <div className="border-t border-lightBorder pt-4 mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-navy-deep mb-3">
                    Scope of Services
                  </h4>
                  <ul className="space-y-2">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/75">
                        <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link to Contact Form */}
              <div className="pt-4 border-t border-dashed border-lightBorder">
                <a
                  href={`#contact`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-navy-deep group-hover:text-gold-dark transition-colors"
                >
                  <span>Enquire For This Practice Area</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
