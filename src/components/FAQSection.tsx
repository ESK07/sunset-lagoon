import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { FAQCategory, FAQ_ITEMS, PageId, VENUE_INFO } from '../data/venueData';

interface FAQSectionProps {
  onNavigate: (page: PageId) => void;
}

const CATEGORY_TABS: { id: FAQCategory; label: string }[] = [
  { id: 'all', label: 'All Questions' },
  { id: 'hours', label: 'Operating Hours' },
  { id: 'parking', label: 'Parking & Arrival' },
  { id: 'rules', label: 'Venue Rules & Safety' },
  { id: 'bookings', label: 'Bookings & Refunds' },
];

export function FAQSection({ onNavigate }: FAQSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('all');
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const visibleItems =
    selectedCategory === 'all'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="bg-[#F8F9F7] py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left intro & direct help card */}
          <div className="lg:col-span-4">
            <p className="text-xs font-medium text-[#52605A]">
              Visitor FAQ · Harben Park, Gweru
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#18201D] text-balance lg:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[#52605A]">
              Everything you need to know before arriving at Sunset Gardens and Lagoon — from
              on-site parking and 8:00 AM – 5:00 PM daylight hours to safety rules and event
              bookings.
            </p>

            <div className="mt-8 rounded-xl border border-[#DDE3DE] bg-white p-6">
              <p className="text-xs font-medium text-[#52605A]">Key Venue Essentials</p>
              <dl className="mt-4 space-y-3 border-t border-[#EEF2EE] pt-4 text-sm">
                <div>
                  <dt className="text-xs text-[#52605A]">Daily Hours</dt>
                  <dd className="mt-0.5 font-semibold text-[#18201D] tabular-nums">
                    8:00 AM – 5:00 PM (Last dispatch 4:15 PM)
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#52605A]">Parking &amp; Entry</dt>
                  <dd className="mt-0.5 font-semibold text-[#18201D]">
                    8 Mt Pleasant Rd, Harben Park
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#52605A]">Plus Code</dt>
                  <dd className="mt-0.5 font-semibold text-[#18201D] tabular-nums">
                    {VENUE_INFO.plusCode}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-col gap-2.5 border-t border-[#EEF2EE] pt-5">
                <a
                  href={VENUE_INFO.phoneHref}
                  className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-[#133A2E] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0E2B22] whitespace-nowrap"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>Call {VENUE_INFO.phoneDisplay}</span>
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate('plan')}
                  className="min-h-[42px] cursor-pointer rounded-lg border border-[#DDE3DE] bg-[#F8F9F7] px-4 py-2 text-sm font-medium text-[#18201D] transition-colors hover:border-[#133A2E] hover:bg-[#EEF2EE] whitespace-nowrap"
                >
                  Open Visit &amp; Event Planner
                </button>
              </div>
            </div>
          </div>

          {/* Right category filter + accordion list */}
          <div className="lg:col-span-8">
            <div
              role="tablist"
              aria-label="Filter FAQ by topic"
              className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-[#DDE3DE] bg-white p-1"
            >
              {CATEGORY_TABS.map((tab) => {
                const active = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setSelectedCategory(tab.id);
                      const firstMatch =
                        tab.id === 'all'
                          ? FAQ_ITEMS[0]
                          : FAQ_ITEMS.find((item) => item.category === tab.id);
                      if (firstMatch) {
                        setOpenId(firstMatch.id);
                      }
                    }}
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

            <div className="mt-6 divide-y divide-[#DDE3DE] rounded-xl border border-[#DDE3DE] bg-white">
              {visibleItems.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      onClick={() => handleToggle(item.id)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#F8F9F7]/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#133A2E]"
                    >
                      <div>
                        <span className="block text-xs font-medium text-[#52605A]">
                          {item.categoryLabel}
                        </span>
                        <span className="mt-1 block font-display text-lg font-medium text-[#18201D]">
                          {item.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#52605A] transition-transform duration-150 ${
                          isOpen ? 'rotate-180 text-[#133A2E]' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-panel-${item.id}`}
                        className="border-t border-[#EEF2EE] bg-[#F8F9F7]/50 px-6 py-5 text-sm leading-relaxed text-[#52605A]"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#DDE3DE] bg-white p-5">
              <p className="text-sm text-[#52605A]">
                Need driving instructions to 8 Mt Pleasant Rd, Harben Park?
              </p>
              <button
                type="button"
                onClick={() => onNavigate('directions')}
                className="min-h-[40px] cursor-pointer rounded-lg border border-[#DDE3DE] bg-[#F8F9F7] px-4 py-2 text-sm font-medium text-[#133A2E] transition-colors hover:border-[#133A2E] hover:bg-[#133A2E] hover:text-white whitespace-nowrap shrink-0"
              >
                View Directions &amp; Plus Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
