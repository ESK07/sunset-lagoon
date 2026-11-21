import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  ExperienceId,
  GalleryPhoto,
  VENUE_EXPERIENCES,
  VENUE_GALLERY,
  VenueExperience,
} from '../data/venueData';
import { ResilientImage } from './ResilientImage';

interface ExperiencesBentoProps {
  onSelectExperience: (id: ExperienceId) => void;
}

type GalleryFilter = 'all' | 'lagoon' | 'weddings' | 'gardens';

const GALLERY_TABS: { id: GalleryFilter; label: string }[] = [
  { id: 'all', label: `All Photos (${VENUE_GALLERY.length})` },
  { id: 'lagoon', label: 'Lagoon & Zip Line' },
  { id: 'weddings', label: 'Weddings & Hall' },
  { id: 'gardens', label: 'Gardens & Gazebos' },
];

function ExperienceCard({
  experience,
  onSelect,
}: {
  experience: VenueExperience;
  onSelect: (id: ExperienceId) => void;
}) {
  const isFeatured = Boolean(experience.featured);

  return (
    <article
      id={experience.id === 'weddings' ? 'weddings' : undefined}
      className={`group flex flex-col overflow-hidden rounded-xl border border-[#DDE3DE] bg-white transition-colors duration-150 hover:border-[#133A2E]/40 ${
        isFeatured ? 'lg:col-span-2 lg:grid lg:grid-cols-12' : 'lg:col-span-1'
      }`}
    >
      <div
        className={`relative overflow-hidden bg-[#E8ECE8] ${
          isFeatured ? 'aspect-[4/3] lg:col-span-7 lg:aspect-auto lg:h-full' : 'aspect-[4/3]'
        }`}
      >
        <ResilientImage
          src={experience.imageSrc}
          alt={experience.imageAlt}
          fallbackTitle={experience.title}
          className="h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      </div>

      <div
        className={`flex flex-1 flex-col justify-between p-6 ${
          isFeatured ? 'lg:col-span-5 lg:p-8' : ''
        }`}
      >
        <div>
          <p className="text-xs font-medium text-[#52605A]">
            {experience.category} · {experience.hoursNote}
          </p>

          <h2 className="mt-2.5 font-display text-xl font-semibold tracking-tight text-[#18201D] lg:text-2xl">
            {experience.number}. {experience.title}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#52605A]">{experience.summary}</p>

          <ul className="mt-5 space-y-2 border-t border-[#EEF2EE] pt-4 text-sm text-[#18201D]">
            {experience.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#133A2E]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-2">
          <button
            type="button"
            onClick={() => onSelect(experience.id)}
            className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg border border-[#DDE3DE] bg-[#F8F9F7] px-4 py-2 text-sm font-medium text-[#133A2E] transition-colors duration-150 hover:border-[#133A2E] hover:bg-[#133A2E] hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133A2E]"
          >
            <span>Plan {experience.title.split('&')[0].trim()}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

export function ExperiencesBento({ onSelectExperience }: ExperiencesBentoProps) {
  const [featured, ...secondary] = VENUE_EXPERIENCES;
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>('all');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const visiblePhotos =
    galleryFilter === 'all'
      ? VENUE_GALLERY
      : VENUE_GALLERY.filter((photo) => photo.category === galleryFilter);

  useEffect(() => {
    if (!lightboxPhoto) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxPhoto(null);
      } else if (e.key === 'ArrowRight') {
        const idx = visiblePhotos.findIndex((p) => p.id === lightboxPhoto.id);
        if (idx >= 0) {
          setLightboxPhoto(visiblePhotos[(idx + 1) % visiblePhotos.length]);
        }
      } else if (e.key === 'ArrowLeft') {
        const idx = visiblePhotos.findIndex((p) => p.id === lightboxPhoto.id);
        if (idx >= 0) {
          setLightboxPhoto(visiblePhotos[(idx - 1 + visiblePhotos.length) % visiblePhotos.length]);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxPhoto, visiblePhotos]);

  const stepLightbox = (dir: 1 | -1) => {
    if (!lightboxPhoto || visiblePhotos.length === 0) return;
    const idx = visiblePhotos.findIndex((p) => p.id === lightboxPhoto.id);
    if (idx < 0) return;
    const nextIdx = (idx + dir + visiblePhotos.length) % visiblePhotos.length;
    setLightboxPhoto(visiblePhotos[nextIdx]);
  };

  return (
    <section id="experiences" className="bg-[#F8F9F7] py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col justify-between gap-4 border-b border-[#DDE3DE] pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#52605A]">
              Grounds &amp; Activities · Sunset Gardens and Lagoon
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#18201D] text-balance lg:text-4xl">
              Four Ways to Experience Sunset Lagoon
            </h1>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#52605A]">
            Every attraction on the grounds is maintained for daytime enjoyment between 8:00 AM and
            5:00 PM amidst Harben Park&apos;s sculpted gardens, thatched hall, and lagoon pool.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featured && (
            <ExperienceCard experience={featured} onSelect={onSelectExperience} />
          )}

          <div className="grid grid-cols-1 gap-6 lg:col-span-2 lg:grid-cols-3">
            {secondary.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} onSelect={onSelectExperience} />
            ))}
          </div>
        </div>

        {/* Full 13-Photo Sunset Lagoon Grounds Gallery */}
        <div className="mt-16 border-t border-[#DDE3DE] pt-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium text-[#52605A]">
                Real Venue Photography · Sunset Gardens and Lagoon Gweru
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-[#18201D] lg:text-3xl">
                Grounds, Lagoon &amp; Reception Hall Gallery
              </h2>
            </div>

            <div
              role="tablist"
              aria-label="Filter Sunset Lagoon photo gallery"
              className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-[#DDE3DE] bg-white p-1"
            >
              {GALLERY_TABS.map((tab) => {
                const active = galleryFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setGalleryFilter(tab.id)}
                    className={`min-h-[36px] cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-[#133A2E] text-white'
                        : 'text-[#52605A] hover:bg-[#F8F9F7] hover:text-[#18201D]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePhotos.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxPhoto(photo)}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[#DDE3DE] bg-white text-left transition-colors duration-150 hover:border-[#133A2E]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#E8ECE8]">
                  <ResilientImage
                    src={photo.src}
                    alt={photo.alt}
                    fallbackTitle={photo.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-[#52605A]">{photo.categoryLabel}</p>
                  <p className="mt-1 font-display text-base font-semibold text-[#18201D]">
                    {photo.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {lightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxPhoto.title}
          onClick={() => setLightboxPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-xl border border-white/15 bg-[#18201D] text-white"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <div>
                <p className="text-xs text-white/70">{lightboxPhoto.categoryLabel}</p>
                <p className="font-display text-base font-medium">{lightboxPhoto.title}</p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxPhoto(null)}
                aria-label="Close photo preview"
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative flex max-h-[70vh] items-center justify-center bg-black">
              <ResilientImage
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                fallbackTitle={lightboxPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />

              {visiblePhotos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => stepLightbox(-1)}
                    aria-label="Previous gallery photo"
                    className="absolute left-3 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-black/60 text-white transition-colors hover:bg-black/85"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepLightbox(1)}
                    aria-label="Next gallery photo"
                    className="absolute right-3 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-black/60 text-white transition-colors hover:bg-black/85"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
