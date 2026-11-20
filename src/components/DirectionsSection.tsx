import { useState } from 'react';
import { Check, Copy, ExternalLink, MapPin, Navigation, Phone } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export function DirectionsSection() {
  const [copiedField, setCopiedField] = useState<'plus' | 'address' | null>(null);

  const handleCopy = async (text: string, field: 'plus' | 'address') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  return (
    <section id="directions" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-[#52605A]">
              Location &amp; Arrival · Harben Park, Gweru
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#18201D] text-balance">
              Finding Sunset Gardens and Lagoon
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#52605A]">
              Located in Harben Park along Mt Pleasant Road, Gweru. Use the Google Plus Code{' '}
              <span className="font-semibold text-[#18201D] tabular-nums">HV8M+5P Gweru</span> or
              check our official Facebook route guide before setting off.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between gap-4 rounded-xl border border-[#DDE3DE] bg-[#F8F9F7] p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#133A2E]" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-[#52605A]">Street Address</p>
                    <p className="text-sm font-semibold text-[#18201D]">{VENUE_INFO.address}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(VENUE_INFO.address, 'address')}
                  className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-lg border border-[#DDE3DE] bg-white px-3 py-1.5 text-xs font-medium text-[#18201D] transition-colors hover:bg-[#EEF2EE] whitespace-nowrap shrink-0"
                >
                  {copiedField === 'address' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#133A2E]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-xl border border-[#DDE3DE] bg-[#F8F9F7] p-4">
                <div className="flex items-start gap-3">
                  <Navigation
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#133A2E]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs text-[#52605A]">Google Maps Plus Code</p>
                    <p className="text-sm font-semibold text-[#18201D] tabular-nums">
                      {VENUE_INFO.plusCode}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(VENUE_INFO.plusCode, 'plus')}
                  className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-lg border border-[#DDE3DE] bg-white px-3 py-1.5 text-xs font-medium text-[#18201D] transition-colors hover:bg-[#EEF2EE] whitespace-nowrap shrink-0"
                >
                  {copiedField === 'plus' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#133A2E]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-xl border border-[#DDE3DE] bg-[#F8F9F7] p-4">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#133A2E]" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-[#52605A]">Venue Reception &amp; Directions Help</p>
                    <p className="text-sm font-semibold text-[#18201D] tabular-nums">
                      {VENUE_INFO.phoneDisplay}
                    </p>
                  </div>
                </div>
                <a
                  href={VENUE_INFO.phoneHref}
                  className="inline-flex min-h-[36px] items-center rounded-lg bg-[#133A2E] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0E2B22] whitespace-nowrap shrink-0"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex h-full flex-col justify-between rounded-xl border border-[#DDE3DE] bg-[#F8F9F7] p-6 sm:p-8">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-[#18201D]">
                  Harben Park Arrival Guide
                </h3>
                <p className="mt-2 text-sm text-[#52605A]">
                  Plan your route before leaving Gweru CBD so you arrive comfortably inside our
                  8:00 AM – 5:00 PM opening hours.
                </p>

                <ol className="mt-6 space-y-4 border-t border-[#DDE3DE] pt-6">
                  <li className="flex gap-4">
                    <span className="font-display text-lg font-semibold text-[#133A2E] tabular-nums">
                      01.
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#18201D]">
                        Enter Harben Park via Mt Pleasant Road
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#52605A]">
                        Set your navigation app to &ldquo;8 Mt Pleasant Rd, Harben Park, Gweru&rdquo;
                        or search Plus Code <span className="font-medium tabular-nums">HV8M+5P Gweru</span>.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-display text-lg font-semibold text-[#133A2E] tabular-nums">
                      02.
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#18201D]">
                        Arrive During Daylight (Before 4:15 PM for Activities)
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#52605A]">
                        Grounds open at 8:00 AM daily and close at 5:00 PM. Zip line and quad bike
                        check-in closes at 4:15 PM while natural visibility remains clear.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-display text-lg font-semibold text-[#133A2E] tabular-nums">
                      03.
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#18201D]">
                        Check In at Reception Upon Arrival
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#52605A]">
                        For wedding walkthroughs, picnic lawn allocations, or quad bike safety
                        briefings, call <span className="font-medium tabular-nums">077 113 9692</span>{' '}
                        ahead of arrival.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#DDE3DE] pt-6">
                <a
                  href={VENUE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#D97706] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#B45309] whitespace-nowrap shrink-0"
                >
                  <span>Open Google Maps Directions</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={VENUE_INFO.facebookDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-[#DDE3DE] bg-white px-4 py-2.5 text-sm font-medium text-[#18201D] transition-colors hover:border-[#133A2E] hover:bg-[#EEF2EE] whitespace-nowrap shrink-0"
                >
                  <span>Facebook Directions Post</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
