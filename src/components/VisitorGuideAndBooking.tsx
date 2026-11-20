import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, Clock, Phone, ShieldCheck } from 'lucide-react';
import { ExperienceId, OPERATING_GUIDELINES, VENUE_INFO } from '../data/venueData';

interface VisitorGuideAndBookingProps {
  selectedExperience: ExperienceId;
  onChangeExperience: (id: ExperienceId) => void;
}

const EXPERIENCE_OPTIONS: { id: ExperienceId; label: string }[] = [
  { id: 'weddings', label: 'Wedding or Private Event' },
  { id: 'picnics', label: 'Family Picnic & Photo Shoot' },
  { id: 'zipline', label: 'Lagoon Zip Line Session' },
  { id: 'quadbikes', label: 'Quad Bike Trail Session' },
];

const ARRIVAL_SLOTS = [
  '08:30 AM (Morning Opening)',
  '10:30 AM (Mid-Morning)',
  '12:30 PM (Midday Picnic)',
  '02:00 PM (Afternoon)',
  '03:30 PM (Golden Hour — Before 4:15 PM Last Dispatch)',
];

export function VisitorGuideAndBooking({
  selectedExperience,
  onChangeExperience,
}: VisitorGuideAndBookingProps) {
  const [guestName, setGuestName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [arrivalSlot, setArrivalSlot] = useState(ARRIVAL_SLOTS[1]);
  const [guestCount, setGuestCount] = useState('4');
  const [notes, setNotes] = useState('');
  const [acknowledgedDaylight, setAcknowledgedDaylight] = useState(true);
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedSummary, setSubmittedSummary] = useState<{
    reference: string;
    name: string;
    experienceLabel: string;
    date: string;
    slot: string;
    guests: string;
    phone: string;
  } | null>(null);

  useEffect(() => {
    setSubmittedSummary(null);
  }, [selectedExperience]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const trimmedName = guestName.trim();
    const trimmedPhone = contactPhone.trim();

    if (trimmedName.length < 2) {
      setFormError('Please enter your full name for the inquiry.');
      return;
    }

    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (digitsOnly.length < 7) {
      setFormError('Please enter a valid phone number (e.g. 077 123 4567) so the team can reply.');
      return;
    }

    if (!visitDate) {
      setFormError('Please choose your preferred visit or event date.');
      return;
    }

    if (!acknowledgedDaylight) {
      setFormError(
        'Please confirm awareness of the 8:00 AM – 5:00 PM daylight operating hours.'
      );
      return;
    }

    const expLabel =
      EXPERIENCE_OPTIONS.find((item) => item.id === selectedExperience)?.label ??
      'Venue Visit';

    setSubmittedSummary({
      reference: `SL-${digitsOnly.slice(-4)}`,
      name: trimmedName,
      experienceLabel: expLabel,
      date: visitDate,
      slot: arrivalSlot,
      guests: guestCount,
      phone: trimmedPhone,
    });
  };

  return (
    <section id="hours-plan" className="border-b border-[#DDE3DE] bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: Operating Hours & Transparent Guest Guidelines */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-[#52605A]">
              Visitor Planning · Harben Park Venue Standards
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#18201D] text-balance">
              Hours, Safety &amp; Clear Expectations
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#52605A]">
              We believe clear daylight schedules and transparent safety rules make every family
              outing and celebration smooth from arrival to departure.
            </p>

            <div className="mt-8 divide-y divide-[#DDE3DE] rounded-xl border border-[#DDE3DE] bg-[#F8F9F7]">
              <div className="flex items-start gap-3.5 p-5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#133A2E]" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#18201D]">
                    Daily Hours: <span className="tabular-nums">8:00 AM – 5:00 PM</span>
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#52605A]">
                    Gates open at 8:00 AM (including Saturdays) and close at 5:00 PM sharp. Arrive by
                    3:45 PM if you plan to ride quad bikes or the zip line.
                  </p>
                </div>
              </div>

              {OPERATING_GUIDELINES.map((guide) => (
                <div key={guide.title} className="flex items-start gap-3.5 p-5">
                  <ShieldCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#133A2E]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#18201D]">{guide.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#52605A]">{guide.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 rounded-xl border border-[#DDE3DE] bg-white p-5">
              <div>
                <p className="text-xs font-medium text-[#52605A]">
                  Prefer to confirm directly by phone?
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[#18201D] tabular-nums">
                  {VENUE_INFO.phoneDisplay} · Women-Owned Management
                </p>
              </div>
              <a
                href={VENUE_INFO.phoneHref}
                className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#133A2E] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0E2B22] whitespace-nowrap shrink-0"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Call Venue</span>
              </a>
            </div>
          </div>

          {/* Right column: Interactive Booking & Event Inquiry Planner */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#DDE3DE] bg-[#F8F9F7] p-6 sm:p-8">
              <div className="border-b border-[#DDE3DE] pb-5">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-[#18201D]">
                  Event &amp; Day Visit Inquiry Planner
                </h3>
                <p className="mt-1 text-sm text-[#52605A]">
                  Prepare your visit schedule within our daylight hours (8:00 AM – 5:00 PM) and get
                  an instant booking reference.
                </p>
              </div>

              {submittedSummary ? (
                <div className="mt-6 rounded-xl border border-[#DDE3DE] bg-white p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-[#133A2E]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-medium text-[#133A2E]">
                        Inquiry Prepared · Ref {submittedSummary.reference}
                      </p>
                      <h4 className="mt-1 font-display text-xl font-semibold text-[#18201D]">
                        Your {submittedSummary.experienceLabel} Plan is Ready
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-[#52605A]">
                        Thank you, {submittedSummary.name}. To lock in availability, pricing, and
                        event hosting setup, call our team on{' '}
                        <a
                          href={VENUE_INFO.phoneHref}
                          className="font-semibold text-[#133A2E] underline tabular-nums"
                        >
                          {VENUE_INFO.phoneDisplay}
                        </a>{' '}
                        with reference <span className="font-semibold">{submittedSummary.reference}</span>.
                      </p>
                    </div>
                  </div>

                  <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-[#EEF2EE] pt-5 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-xs text-[#52605A]">Experience</dt>
                      <dd className="mt-0.5 font-medium text-[#18201D]">
                        {submittedSummary.experienceLabel}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#52605A]">Preferred Date &amp; Guests</dt>
                      <dd className="mt-0.5 font-medium text-[#18201D] tabular-nums">
                        {submittedSummary.date} · {submittedSummary.guests} guests
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#52605A]">Daylight Arrival Window</dt>
                      <dd className="mt-0.5 font-medium text-[#18201D]">{submittedSummary.slot}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#52605A]">Callback Number</dt>
                      <dd className="mt-0.5 font-medium text-[#18201D] tabular-nums">
                        {submittedSummary.phone}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#EEF2EE] pt-5">
                    <a
                      href={VENUE_INFO.phoneHref}
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#D97706] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#B45309] whitespace-nowrap shrink-0"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      <span>Call 077 113 9692 to Confirm</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedSummary(null)}
                      className="min-h-[42px] cursor-pointer rounded-lg border border-[#DDE3DE] bg-white px-4 py-2.5 text-sm font-medium text-[#18201D] transition-colors hover:bg-[#EEF2EE] whitespace-nowrap shrink-0"
                    >
                      Edit Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div>
                    <span className="block text-xs font-semibold text-[#18201D]">
                      Select Experience
                    </span>
                    <div
                      role="group"
                      aria-label="Select experience type"
                      className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2"
                    >
                      {EXPERIENCE_OPTIONS.map((option) => {
                        const active = selectedExperience === option.id;
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => onChangeExperience(option.id)}
                            className={`min-h-[42px] cursor-pointer rounded-lg border px-3.5 py-2 text-left text-sm font-medium transition-colors duration-150 ${
                              active
                                ? 'border-[#133A2E] bg-[#133A2E] text-white'
                                : 'border-[#DDE3DE] bg-white text-[#18201D] hover:border-[#133A2E]/50'
                            }`}
                          >
                            {option.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="guest-name"
                        className="block text-xs font-semibold text-[#18201D]"
                      >
                        Full Name
                      </label>
                      <input
                        id="guest-name"
                        type="text"
                        required
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="e.g. Rumbidzai Moyo"
                        className="mt-1.5 w-full rounded-lg border border-[#DDE3DE] bg-white px-3.5 py-2.5 text-sm text-[#18201D] placeholder:text-[#52605A]/60 focus:border-[#133A2E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="guest-phone"
                        className="block text-xs font-semibold text-[#18201D]"
                      >
                        Phone / WhatsApp Number
                      </label>
                      <input
                        id="guest-phone"
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="e.g. 077 000 0000"
                        className="mt-1.5 w-full rounded-lg border border-[#DDE3DE] bg-white px-3.5 py-2.5 text-sm text-[#18201D] tabular-nums placeholder:text-[#52605A]/60 focus:border-[#133A2E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label
                        htmlFor="visit-date"
                        className="block text-xs font-semibold text-[#18201D]"
                      >
                        Preferred Date
                      </label>
                      <input
                        id="visit-date"
                        type="date"
                        required
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-[#DDE3DE] bg-white px-3.5 py-2.5 text-sm text-[#18201D] tabular-nums focus:border-[#133A2E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="arrival-slot"
                        className="block text-xs font-semibold text-[#18201D]"
                      >
                        Arrival Window (8 AM – 5 PM)
                      </label>
                      <select
                        id="arrival-slot"
                        value={arrivalSlot}
                        onChange={(e) => setArrivalSlot(e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-[#DDE3DE] bg-white px-3 py-2.5 text-sm text-[#18201D] focus:border-[#133A2E] focus:outline-none"
                      >
                        {ARRIVAL_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="guest-count"
                        className="block text-xs font-semibold text-[#18201D]"
                      >
                        Estimated Guests
                      </label>
                      <input
                        id="guest-count"
                        type="number"
                        min={1}
                        max={500}
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-[#DDE3DE] bg-white px-3.5 py-2.5 text-sm text-[#18201D] tabular-nums focus:border-[#133A2E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="visit-notes"
                      className="block text-xs font-semibold text-[#18201D]"
                    >
                      Event or Activity Notes (Optional)
                    </label>
                    <textarea
                      id="visit-notes"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Wedding lawn setup, photography session timing, or group quad bike briefing needs..."
                      className="mt-1.5 w-full rounded-lg border border-[#DDE3DE] bg-white px-3.5 py-2.5 text-sm text-[#18201D] placeholder:text-[#52605A]/60 focus:border-[#133A2E] focus:outline-none"
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 text-xs text-[#52605A]">
                    <input
                      type="checkbox"
                      checked={acknowledgedDaylight}
                      onChange={(e) => setAcknowledgedDaylight(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-[#DDE3DE] accent-[#133A2E]"
                    />
                    <span>
                      I understand Sunset Gardens and Lagoon closes at 5:00 PM and outdoor zip line
                      and quad bike sessions operate strictly during daylight hours.
                    </span>
                  </label>

                  {formError && (
                    <div
                      role="alert"
                      className="rounded-lg border border-[#B91C1C]/30 bg-[#FEF2F2] px-4 py-3 text-xs font-medium text-[#991B1B]"
                    >
                      {formError}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-[#52605A]">
                      No online payment charged here · Confirm directly with venue reception
                    </p>
                    <button
                      type="submit"
                      className="min-h-[44px] cursor-pointer rounded-lg bg-[#D97706] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#B45309] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133A2E]"
                    >
                      Prepare Visit Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
