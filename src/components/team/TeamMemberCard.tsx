"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GraduationCap, Award, Scale, Cpu, BookOpen, Check } from "lucide-react";
import { TeamMember } from "@/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="bg-white border border-lightBorder shadow-card hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group"
      aria-labelledby={`advocate-${member.id}`}
    >
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-navy-deep via-gold to-navy-deep" />

      <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-grow">
        {/* Header: Photo & Core Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start mb-8 pb-8 border-b border-lightBorder">
          {/* Portrait Container (4:5 Aspect Ratio) */}
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-[280px] mx-auto md:max-w-none bg-navy-deep border-2 border-gold/40 shadow-md overflow-hidden group-hover:border-gold transition-colors duration-300">
              {!imageError ? (
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={() => setImageError(true)}
                  priority={true}
                />
              ) : (
                /* Dignified Professional Portrait Placeholder */
                <div className="absolute inset-0 flex flex-col items-center justify-between p-6 bg-gradient-to-b from-navy-primary via-navy-deep to-navy-dark text-white text-center">
                  {/* Subtle Corner Accents */}
                  <div className="w-full flex justify-between">
                    <span className="w-3 h-3 border-t border-l border-gold/60" />
                    <span className="w-3 h-3 border-t border-r border-gold/60" />
                  </div>

                  <div className="space-y-3">
                    <div className="w-20 h-20 mx-auto rounded-full border border-gold/50 bg-navy-deep/80 flex items-center justify-center shadow-inner">
                      <span className="font-serif text-2xl font-bold text-gold tracking-widest">
                        {member.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-serif text-sm font-medium text-ivory">
                        {member.name}
                      </p>
                      <p className="text-[11px] text-gold-light/80 uppercase tracking-wider mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Gentle swap hint */}
                  <div className="text-[10px] text-ivory/50 uppercase tracking-widest border-t border-white/10 pt-2 w-full">
                    {member.id === "rizwan-pathan" ? "Founder Portrait Slot" : "Co-Founder Portrait Slot"}
                  </div>
                </div>
              )}

              {/* Inner gold frame border */}
              <div className="absolute inset-2 border border-gold/25 pointer-events-none" />

              {/* Role badge */}
              <div className="absolute bottom-3 left-3 right-3 bg-navy-deep/90 backdrop-blur-sm border border-gold/30 px-3 py-1.5 text-center">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-light">
                  {member.role}
                </span>
              </div>
            </div>
          </div>

          {/* Name, Designation & Specializations */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark mb-1">
                {member.role}
              </span>
              <h3
                id={`advocate-${member.id}`}
                className="font-serif text-2xl sm:text-3xl text-navy-deep font-semibold tracking-tight"
              >
                {member.name}
              </h3>
              <p className="text-sm font-medium text-gold font-serif mt-1 tracking-wide">
                {member.designation}
              </p>
              {member.professionalFocus && (
                <p className="text-xs text-charcoal/70 italic mt-0.5">
                  {member.professionalFocus}
                </p>
              )}
            </div>

            {/* Specialization Tags */}
            <div className="space-y-2 mt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-primary flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-gold" />
                <span>Areas of Specialization</span>
              </h4>
              <ul className="space-y-1.5">
                {member.specializations.map((spec, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs sm:text-sm text-charcoal/85 leading-snug"
                  >
                    <Check className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Full Biography */}
        <div className="space-y-4 mb-6 text-charcoal/85 text-sm sm:text-base leading-relaxed font-light">
          <h4 className="text-xs font-bold uppercase tracking-wider text-navy-deep">
            Professional Profile
          </h4>
          {member.biography.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Highlight Section: Technology Advantage / Academic Excellence */}
        <div className="my-6 p-5 bg-ivory rounded-none border-l-4 border-gold border-y border-r border-lightBorder">
          <h4 className="text-sm font-serif font-bold text-navy-deep flex items-center gap-2 mb-2">
            {member.id === "rizwan-pathan" ? (
              <Cpu className="w-4 h-4 text-gold" />
            ) : (
              <BookOpen className="w-4 h-4 text-gold" />
            )}
            <span>{member.highlightSection.title}</span>
          </h4>
          <div className="space-y-2 text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
            {member.highlightSection.description.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
        </div>

        {/* Education & Qualifications */}
        <div className="mt-auto pt-6 border-t border-lightBorder">
          <h4 className="text-xs font-bold uppercase tracking-wider text-navy-deep flex items-center gap-1.5 mb-3">
            <GraduationCap className="w-4 h-4 text-gold" />
            <span>Education &amp; Qualifications</span>
          </h4>
          <div className="space-y-2.5">
            {member.education.map((edu, i) => (
              <div key={i} className="text-xs sm:text-sm flex flex-col">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-medium text-navy-primary">{edu.degree}</span>
                  {edu.year && (
                    <span className="text-[11px] font-mono text-gold-dark font-medium px-1.5 py-0.5 bg-gold/10">
                      {edu.year}
                    </span>
                  )}
                </div>
                <span className="text-mutedGrey text-xs">{edu.institution}</span>
                {edu.detail && (
                  <span className="text-[11px] text-charcoal/70 italic mt-0.5">
                    {edu.detail}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Primary Appearances */}
          <div className="mt-5 pt-3 border-t border-dashed border-lightBorder flex items-center gap-2 text-xs text-charcoal/70">
            <Award className="w-3.5 h-3.5 text-gold flex-shrink-0" />
            <span className="truncate">
              {member.courts.join(" • ")}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
