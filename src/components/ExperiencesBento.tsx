import { ArrowRight } from 'lucide-react';
import { ExperienceId, VENUE_EXPERIENCES, VenueExperience } from '../data/venueData';
import { ResilientImage } from './ResilientImage';

interface ExperiencesBentoProps {
  onSelectExperience: (id: ExperienceId) => void;
}

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
          isFeatured ? 'aspect-[16/9] lg:col-span-7 lg:aspect-auto lg:h-full' : 'aspect-[4/3]'
        }`}
      >
        <ResilientImage
          src={experience.imageSrc}
          alt={experience.imageAlt}
          fallbackTitle={experience.title}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
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

          <h3 className="mt-2.5 font-display text-xl font-semibold tracking-tight text-[#18201D] lg:text-2xl">
            {experience.number}. {experience.title}
          </h3>

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

  return (
    <section id="experiences" className="border-b border-[#DDE3DE] bg-[#F8F9F7] py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col justify-between gap-4 border-b border-[#DDE3DE] pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#52605A]">
              Grounds &amp; Activities · Sunset Gardens and Lagoon
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#18201D] text-balance lg:text-4xl">
              Four Ways to Experience Sunset Lagoon
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#52605A]">
            Every attraction on the grounds is maintained for daytime enjoyment between 8:00 AM and
            5:00 PM amidst Harben Park&apos;s lush gardens and tranquil water.
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
      </div>
    </section>
  );
}
