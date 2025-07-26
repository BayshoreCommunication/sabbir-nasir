import { ArrowButton } from './Button';
import React from 'react';

interface HeroSectionProps {
  title?: string;
}

export default function HeroSection({
  title = 'Take the First Step',
}: HeroSectionProps) {
  return (
    <section className="relative h-[18rem] lg:h-[24rem] flex items-center justify-center px-4 py-16 md:py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/homepage/services/take-the-first.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h1>

        <p className="text-lg mb-8  max-w-3xl mx-auto">
          Schedule a complimentary 30-minute discovery call with
          Sabbir Nasir & his team. You&apos;ll begin to see{' '}
          <em className="italic">
            what is holding you back, and what is possible through
            transformation.
          </em>{' '}
          Let&apos;s start this journey together.
        </p>

        <ArrowButton size="lg" className="text-white">
          Schedule A Call
        </ArrowButton>
      </div>
    </section>
  );
}
