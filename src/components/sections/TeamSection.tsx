import React from "react";
import { teamMembers } from "@/data/team";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { Scale } from "lucide-react";

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark mb-3">
            <span className="w-8 h-[1px] bg-gold" />
            <span>OUR PEOPLE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy-deep font-normal tracking-tight mb-4">
            Meet Our Advocates
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 font-light leading-relaxed">
            Legal professionals combining litigation expertise, academic preparation, research, and analytical perspectives to approach complex legal matters with diligence and care.
          </p>
        </div>

        {/* Two-Column Advocate Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Notice on Professional Integrity & Bar Council Rules */}
        <div className="mt-12 p-4 bg-ivory border border-lightBorder text-xs text-charcoal/70 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-gold flex-shrink-0" />
            <span>
              Profiles presented in accordance with Bar Council of India professional standards. All credentials and qualifications verified.
            </span>
          </div>
          <span className="hidden sm:inline font-mono text-[11px] text-gold-dark font-medium uppercase tracking-wider">
            IWAN ASSOCIATES
          </span>
        </div>
      </div>
    </section>
  );
};
