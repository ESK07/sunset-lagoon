import { useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { HERO_FEATURE_IMAGES, PageId, VENUE_INFO } from '../data/venueData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
}

const HOME_DIRECTORY: {
  page: PageId;
  number: string;
  title: string;
  description: string;
  actionLabel: string;
}[] = [
  {
    page: 'experiences',
    number: '01',
    title: 'Experiences & Photo Gallery',
    description:
      'Weddings in the thatched hall, lagoon zip lining, lagoon pool, and all 13 venue photos.',
    actionLabel: 'Explore Experiences',
  },
  {
    page: 'plan',
    number: '02',
    title: 'Hours & Visit Planner',
    description:
      '8:00 AM – 5:00 PM daylight schedule, 4:15 PM last activity dispatch, and direct booking inquiry form.',
    actionLabel: 'Plan Your Visit',
  },
  {
    page: 'faq',
    number: '03',
    title: 'Parking, Rules & FAQ',
    description:
      'Answers on Harben Park parking, helmet and harness rules, closing hours, and rescheduling.',
    actionLabel: 'Read Venue FAQ',
  },
  {
    page: 'reviews',
    number: '04',
    title: 'Guest Reviews (4.1 · 89)',
    description:
      'Verified visitor feedback across weddings, greenery, zip lining, and owner responses.',
    actionLabel: 'View Reviews',
  },
];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [heroIndex, setHeroIndex] = useState(0);
  const activeSlide = HERO_FEATURE_IMAGES[heroIndex];

  const prevSlide = () =>
    setHeroIndex((prev) => (prev - 1 + HERO_FEATURE_IMAGES.length) % HERO_FEATURE_IMAGES.length);
  const nextSlide = () => setHeroIndex((prev) => (prev + 1) % HERO_FEATURE_IMAGES.length);

  return (
    <section id="top" className="bg-[#F8F9F7]">
      <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-xs font-medium tracking-wide text-[#52605A]">
                {VENUE_INFO.category} · {VENUE_INFO.ownershipNote} · Harben Park, Gweru
              </p>

              <h1
                className="mt-4 max-w-xl font-display font-semibold tracking-tight text-[#18201D] text-balance"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.08 }}
              >
                Spectacular Greenery &amp; Lagoon Escapes in Gweru
              </h1>

              <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-[#52605A]">
                Set at 8 Mt Pleasant Road in Harben Park, Sunset Gardens and Lagoon Gweru pairs
                sculpted botanical lawns and the signature lagoon pool with thatched-hall wedding
                hosting, family picnics, photo shoots, zip lining, and quad biking.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('plan')}
                  className="min-h-[44px] cursor-pointer rounded-lg bg-[#D97706] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#B45309] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133A2E]"
                >
                  Plan Your Event or Visit
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('directions')}
                  className="inline-flex min-h-[44px] cursor-pointer items-center gap-1.5 rounded-lg border border-[#DDE3DE] bg-white px-4 py-2.5 text-sm font-medium text-[#18201D] transition-colors duration-150 hover:border-[#133A2E] hover:bg-[#EEF2EE] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133A2E]"
                >
                  <MapPin className="h-4 w-4 text-[#133A2E]" aria-hidden="true" />
                  <span>Directions · HV8M+5P</span>
                </button>
              </div>
            </div>

            <div className="mt-10 border-t border-[#DDE3DE] pt-5">
              <p className="text-xs text-[#52605A]">
                Daylight venue hours:{' '}
                <span className="font-semibold text-[#18201D] tabular-nums">
                  8:00 AM – 5:00 PM
                </span>{' '}
                · Last adventure dispatch{' '}
                <span className="font-semibold text-[#18201D] tabular-nums">4:15 PM</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-xl border border-[#DDE3DE] bg-[#E8ECE8] lg:min-h-[440px]">
              <ResilientImage
                src={activeSlide.src}
                alt={activeSlide.title}
                fallbackTitle="Sunset Gardens and Lagoon Gweru"
                priority
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6">
                <div className="flex flex-wrap items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-xs font-medium text-white/85">{activeSlide.subtitle}</p>
                    <p className="mt-0.5 font-display text-lg font-medium">{activeSlide.title}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prevSlide}
                      aria-label="Previous venue photo"
                      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/25 bg-black/40 text-white transition-colors hover:bg-black/65"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <span className="min-w-[3ch] text-center text-xs font-medium text-white/90 tabular-nums">
                      {heroIndex + 1}/{HERO_FEATURE_IMAGES.length}
                    </span>
                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Next venue photo"
                      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/25 bg-black/40 text-white transition-colors hover:bg-black/65"
                    >
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <a
                      href={VENUE_INFO.facebookDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 inline-flex items-center gap-1 text-xs font-medium text-white underline-offset-4 hover:underline whitespace-nowrap shrink-0"
                    >
                      <span>Facebook Route</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column key venue facts strip below the hero split */}
        <div className="mt-10 grid grid-cols-1 divide-y divide-[#DDE3DE] rounded-xl border border-[#DDE3DE] bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          <div className="p-5">
            <p className="text-xs font-medium text-[#52605A]">Google Rating</p>
            <p className="mt-1.5 font-display text-2xl font-semibold text-[#18201D] tabular-nums">
              4.1 <span className="text-base font-normal text-[#52605A]">/ 5 (89 reviews)</span>
            </p>
          </div>

          <div className="p-5 sm:border-t lg:border-t-0">
            <p className="text-xs font-medium text-[#52605A]">Operating Hours</p>
            <p className="mt-1.5 font-display text-2xl font-semibold text-[#18201D] tabular-nums">
              8 AM – 5 PM
            </p>
          </div>

          <div className="p-5 sm:border-t lg:border-t-0">
            <p className="text-xs font-medium text-[#52605A]">Location &amp; Plus Code</p>
            <p className="mt-1.5 font-display text-lg font-semibold text-[#18201D] tabular-nums">
              HV8M+5P Gweru
            </p>
            <p className="mt-0.5 text-xs text-[#52605A]">8 Mt Pleasant Rd, Harben Park</p>
          </div>

          <div className="p-5 sm:border-t lg:border-t-0">
            <p className="text-xs font-medium text-[#52605A]">Direct Inquiries</p>
            <a
              href={VENUE_INFO.phoneHref}
              className="mt-1.5 block font-display text-2xl font-semibold text-[#133A2E] underline-offset-4 hover:underline tabular-nums"
            >
              077 113 9692
            </a>
          </div>
        </div>

        {/* Clean page directory linking to separate standalone sections */}
        <div className="mt-12 border-t border-[#DDE3DE] pt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-[#52605A]">
                Explore Sunset Gardens &amp; Lagoon
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-[#18201D]">
                Plan Every Part of Your Visit
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('experiences')}
              className="cursor-pointer text-sm font-medium text-[#133A2E] underline-offset-4 hover:underline whitespace-nowrap shrink-0"
            >
              Browse all 13 venue photos &rarr;
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_DIRECTORY.map((item) => (
              <button
                key={item.page}
                type="button"
                onClick={() => onNavigate(item.page)}
                className="group flex cursor-pointer flex-col justify-between rounded-xl border border-[#DDE3DE] bg-white p-5 text-left transition-colors duration-150 hover:border-[#133A2E]"
              >
                <div>
                  <span className="text-xs font-semibold text-[#52605A] tabular-nums">
                    {item.number}.
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-[#18201D]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#52605A]">
                    {item.description}
                  </p>
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#133A2E] group-hover:underline">
                  <span>{item.actionLabel}</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
