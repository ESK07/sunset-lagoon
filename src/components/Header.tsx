import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId, VENUE_INFO } from '../data/venueData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: 'experiences', label: 'Experiences' },
  { id: 'plan', label: 'Hours & Plan' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'directions', label: 'Directions' },
];

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#DDE3DE] bg-[#F8F9F7]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4">
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
          className="font-display text-lg font-semibold tracking-tight text-[#18201D] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#133A2E]"
        >
          {VENUE_INFO.shortBrand}
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <a
                key={link.id}
                href={`#/${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-medium underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#133A2E] ${
                  isActive
                    ? 'text-[#133A2E] underline'
                    : 'text-[#52605A] hover:text-[#18201D] hover:underline'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNav('plan')}
            className="hidden min-h-[40px] cursor-pointer rounded-lg bg-[#133A2E] px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#0E2B22] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D97706] sm:inline-flex sm:items-center"
          >
            Book a Visit
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-[#DDE3DE] bg-white text-[#18201D] transition-colors hover:bg-[#EEF2EE] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[#DDE3DE] bg-[#F8F9F7] px-6 py-4 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => handleNav('home')}
              className={`min-h-[44px] flex items-center text-left text-base font-medium ${
                currentPage === 'home' ? 'text-[#133A2E] underline underline-offset-4' : 'text-[#18201D]'
              }`}
            >
              Home
            </button>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNav(link.id)}
                className={`min-h-[44px] flex items-center text-left text-base font-medium ${
                  currentPage === link.id
                    ? 'text-[#133A2E] underline underline-offset-4'
                    : 'text-[#18201D]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNav('plan')}
              className="mt-2 min-h-[44px] w-full rounded-lg bg-[#133A2E] px-4 py-2.5 text-sm font-medium text-white"
            >
              Book a Visit
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
