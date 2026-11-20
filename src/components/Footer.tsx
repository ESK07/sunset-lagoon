import { PageId, VENUE_INFO } from '../data/venueData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

const FOOTER_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'experiences', label: 'Experiences & Grounds' },
  { id: 'plan', label: 'Hours & Visit Planner' },
  { id: 'reviews', label: 'Guest Reviews (4.1 · 89)' },
  { id: 'faq', label: 'FAQ (Parking & Rules)' },
  { id: 'directions', label: 'Directions & Contact' },
];

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-[#DDE3DE] bg-[#133A2E] text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="cursor-pointer text-left font-display text-xl font-semibold tracking-tight text-white hover:underline underline-offset-4"
            >
              {VENUE_INFO.name}
            </button>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
              Women-owned event venue and botanical lagoon gardens in Harben Park, Gweru. Hosting
              weddings, family picnics, photo shoots, zip lining, and quad biking.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-white/70">Venue Details</p>
            <ul className="mt-3 space-y-1.5 text-sm text-white/90">
              <li>{VENUE_INFO.address}</li>
              <li className="tabular-nums">Plus Code: {VENUE_INFO.plusCode}</li>
              <li className="tabular-nums">Hours: {VENUE_INFO.hoursSummary}</li>
              <li>
                Phone:{' '}
                <a
                  href={VENUE_INFO.phoneHref}
                  className="underline-offset-4 hover:underline tabular-nums"
                >
                  {VENUE_INFO.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-white/70">Pages</p>
            <ul className="mt-3 space-y-1.5 text-sm text-white/90">
              {FOOTER_LINKS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="cursor-pointer text-left underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/75">
          <p>
            © {new Date().getFullYear()} {VENUE_INFO.name}. All rights reserved.
          </p>
          <p>Women-owned venue · Harben Park, Gweru</p>
        </div>
      </div>
    </footer>
  );
}
