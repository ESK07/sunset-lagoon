import { useState } from 'react';
import { Star } from 'lucide-react';
import {
  GUEST_REVIEWS,
  RATING_BREAKDOWN,
  REVIEW_TOPICS,
  VENUE_INFO,
} from '../data/venueData';

type ReviewFilter = 'all' | 'weddings' | 'hours' | 'adventure';

const FILTER_TABS: { id: ReviewFilter; label: string }[] = [
  { id: 'all', label: 'All Reviews' },
  { id: 'weddings', label: 'Weddings & Picnics' },
  { id: 'hours', label: 'Closing Hours' },
  { id: 'adventure', label: 'Lighting, Quads & Refunds' },
];

export function ReviewsSection() {
  const [activeFilter, setActiveFilter] = useState<ReviewFilter>('all');

  const filteredReviews =
    activeFilter === 'all'
      ? GUEST_REVIEWS
      : GUEST_REVIEWS.filter((review) => review.topic === activeFilter);

  return (
    <section id="reviews" className="border-b border-[#DDE3DE] bg-[#F8F9F7] py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left summary column */}
          <div className="lg:col-span-4">
            <p className="text-xs font-medium text-[#52605A]">
              Verified Google Feedback · Sunset Gardens and Lagoon
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#18201D] text-balance">
              4.1 Rating Across 89 Guest Reviews
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#52605A]">
              Praised by families and couples for lush greenery, photo shoots, and event hosting —
              with transparent owner responses and clear guidance on our 5:00 PM closing time.
            </p>

            <div className="mt-6 rounded-xl border border-[#DDE3DE] bg-white p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-semibold text-[#18201D] tabular-nums">
                  {VENUE_INFO.rating.toFixed(1)}
                </span>
                <div>
                  <div className="flex items-center gap-0.5 text-[#D97706]" aria-label="4.1 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= 4 ? 'fill-[#D97706] text-[#D97706]' : 'text-[#DDE3DE]'
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-[#52605A] tabular-nums">
                    Based on {VENUE_INFO.reviewCount} reviews
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                {RATING_BREAKDOWN.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-xs">
                    <span className="w-4 font-medium text-[#52605A] tabular-nums">{row.stars}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#EEF2EE]">
                      <div
                        className="h-full rounded-full bg-[#133A2E]"
                        style={{ width: `${row.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-[#EEF2EE] pt-4">
                <p className="text-xs font-semibold text-[#18201D]">Frequently Mentioned Topics</p>
                <p className="mt-2 text-xs leading-relaxed text-[#52605A]">
                  {REVIEW_TOPICS.map((t, idx) => (
                    <span key={t.label}>
                      <span className="font-medium text-[#18201D]">{t.label}</span> ({t.count})
                      {idx < REVIEW_TOPICS.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>

          {/* Right review list & interactive topic filter */}
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div
                role="tablist"
                aria-label="Filter guest reviews by topic"
                className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-[#DDE3DE] bg-white p-1"
              >
                {FILTER_TABS.map((tab) => {
                  const active = activeFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveFilter(tab.id)}
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

              <a
                href={VENUE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#133A2E] underline-offset-4 hover:underline whitespace-nowrap shrink-0"
              >
                View all 89 reviews on Google Maps
              </a>
            </div>

            <div className="mt-6 space-y-5">
              {filteredReviews.map((review) => (
                <article
                  key={review.id}
                  className="rounded-xl border border-[#DDE3DE] bg-white p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-[#18201D]">{review.author}</h3>
                      <p className="mt-0.5 text-xs text-[#52605A]">
                        {review.authorMeta} · {review.timeAgo} · {review.topicLabel}
                      </p>
                    </div>

                    <div
                      className="flex items-center gap-0.5"
                      aria-label={`Rated ${review.rating} out of 5`}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= review.rating
                              ? 'fill-[#D97706] text-[#D97706]'
                              : 'text-[#DDE3DE]'
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#18201D]">{review.quote}</p>

                  {review.ownerResponse && (
                    <div className="mt-5 rounded-lg border border-[#DDE3DE] bg-[#F8F9F7] p-4">
                      <p className="text-xs font-semibold text-[#133A2E]">
                        Response from the owner · {review.ownerResponse.timeAgo}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#52605A]">
                        {review.ownerResponse.message}
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
