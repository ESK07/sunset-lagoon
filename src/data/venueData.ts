export type ExperienceId = 'weddings' | 'zipline' | 'quadbikes' | 'picnics';

export interface VenueExperience {
  id: ExperienceId;
  number: string;
  title: string;
  category: string;
  hoursNote: string;
  summary: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
}

export interface GuestReview {
  id: string;
  author: string;
  authorMeta: string;
  timeAgo: string;
  rating: number;
  topic: 'weddings' | 'greenery' | 'adventure' | 'hours';
  topicLabel: string;
  quote: string;
  ownerResponse?: {
    timeAgo: string;
    message: string;
  };
}

export const VENUE_INFO = {
  name: 'Sunset Gardens and Lagoon Gweru',
  shortBrand: 'Sunset Gardens & Lagoon',
  alsoKnownAs: 'Sunset Lagoon',
  category: 'Event venue',
  ownershipNote: 'Women-owned',
  rating: 4.1,
  reviewCount: 89,
  address: '8 Mt Pleasant Rd, Harben Park, Gweru',
  plusCode: 'HV8M+5P Gweru',
  phoneDisplay: '077 113 9692',
  phoneHref: 'tel:+263771139692',
  hoursSummary: '8:00 AM – 5:00 PM Daily',
  opensAt: '8:00 AM',
  closesAt: '5:00 PM',
  lastActivityDispatch: '4:15 PM',
  websiteUrl: 'https://sunsetgardensandlagoon.com/',
  facebookDirectionsUrl:
    'https://www.facebook.com/sunsetgardensgweru/posts/sunset-lagoon-location-and-directions-/1323804523093364/',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=HV8M%2B5P+Gweru',
  heroImage: '/src/assets/images/hero_sunset_lagoon_1795187340263.jpg',
};

export const VENUE_EXPERIENCES: VenueExperience[] = [
  {
    id: 'weddings',
    number: '01',
    title: 'Weddings & Event Hosting',
    category: 'Private Ceremonies · Receptions',
    hoursNote: '8:00 AM – 5:00 PM standard garden hire',
    summary:
      'Expansive manicured lawns overlooking the lagoon, dedicated event hosting facilities, and mature shade trees tailored for weddings, anniversaries, and private celebrations in Gweru.',
    highlights: [
      'Lakeside ceremony lawn & timber pavilion backdrop',
      'Dedicated green spaces for bridal & family photo shoots',
      'On-site event coordination & pre-event walkthroughs',
    ],
    imageSrc: '/src/assets/images/weddings_garden_pavilion_1795187341450.jpg',
    imageAlt:
      'Outdoor garden wedding ceremony arch and white chairs beside the calm lagoon at Sunset Gardens and Lagoon Gweru',
    featured: true,
  },
  {
    id: 'zipline',
    number: '02',
    title: 'Lagoon Zip Line',
    category: 'Daylight Outdoor Adventure',
    hoursNote: '8:00 AM – 4:15 PM (full daylight only)',
    summary:
      'Soar across the botanical canopy and reflective lagoon water. For clear visibility and harness inspection, the zip line operates strictly during daylight hours prior to 5:00 PM close.',
    highlights: [
      'Guided harness check before every launch',
      'Full daylight operation only — arrives before 4:15 PM',
      'Panoramic aerial views across Harben Park greenery',
    ],
    imageSrc: '/src/assets/images/lagoon_zipline_adventure_1795187340501.jpg',
    imageAlt:
      'Daylight zip line platform and steel cable spanning across lush green gardens and lagoon water',
  },
  {
    id: 'quadbikes',
    number: '03',
    title: 'Quad Bike Trails',
    category: 'Guided Trail Sessions',
    hoursNote: '8:00 AM – 4:15 PM · Mandatory briefing',
    summary:
      'Explore designated red-earth garden tracks on recreational quad bikes. Every rider completes a mandatory safety briefing and wears provided protective helmets prior to trail dispatch.',
    highlights: [
      'Helmets & pre-ride speed orientation required',
      'Supervised daylight trail laps for clear terrain sightlines',
      'Direct on-site staff check-in at reception',
    ],
    imageSrc: '/src/assets/images/quad_bike_trail_1795187340537.jpg',
    imageAlt:
      'Recreational quad bikes lined up with helmets along a red-earth garden trail in daylight',
  },
  {
    id: 'picnics',
    number: '04',
    title: 'Family Picnics & Photo Shoots',
    category: 'Casual Outings · Greenery',
    hoursNote: '8:00 AM – 5:00 PM daily access',
    summary:
      'Unwind under sprawling shade trees beside the water. Celebrated by guests for spectacular greenery, quiet lakeside lawns, and scenic corners for graduation, maternity, and family portraits.',
    highlights: [
      'Shaded lakeside picnic lawns for families & small groups',
      'Natural golden-hour light from 3:00 PM to 4:45 PM',
      'Walk-in casual outings or reserved group picnic setups',
    ],
    imageSrc: '/src/assets/images/family_picnic_greenery_1795187341878.jpg',
    imageAlt:
      'Families enjoying a sunlit picnic on green grass under mature trees beside the lagoon',
  },
];

export const RATING_BREAKDOWN = [
  { stars: 5, percent: 58 },
  { stars: 4, percent: 21 },
  { stars: 3, percent: 10 },
  { stars: 2, percent: 5 },
  { stars: 1, percent: 6 },
];

export const REVIEW_TOPICS = [
  { label: 'Weddings', count: 4 },
  { label: 'Spectacular greenery', count: 2 },
  { label: 'Zip line', count: 2 },
  { label: 'Picnics', count: 2 },
  { label: 'Events', count: 2 },
  { label: 'Refund policy', count: 2 },
];

export const GUEST_REVIEWS: GuestReview[] = [
  {
    id: 'red-art',
    author: 'Red Art',
    authorMeta: '2 reviews · 14 photos',
    timeAgo: '9 months ago',
    rating: 5,
    topic: 'weddings',
    topicLabel: 'Weddings & Picnics',
    quote:
      'Best for families, weddings, picnics, casual outings, photo shoots and events. Sunset gardens also includes experiences such as event hosting facilities, and beautiful green spaces for photos or gatherings.',
    ownerResponse: {
      timeAgo: '9 months ago',
      message:
        "Greetings Red Art — Thank you so much for your review. Our goal is to meet our clients' expectations and we feel so happy that we did.",
    },
  },
  {
    id: 'tarffey-zimba',
    author: 'Tarffey Zimba',
    authorMeta: '1 review',
    timeAgo: '4 months ago',
    rating: 4,
    topic: 'hours',
    topicLabel: 'Operating Hours',
    quote: "It's a pretty nice place, though it closes a bit early at 5:00 PM.",
  },
  {
    id: 'tariro-k',
    author: 'Tariro Kufahakurambwe',
    authorMeta: '1 review',
    timeAgo: '10 months ago',
    rating: 2,
    topic: 'adventure',
    topicLabel: 'Evening Lighting, Quads & Refunds',
    quote:
      'It is a really beautiful place, but we arrived around 8:00 PM hoping to do activities without outdoor or zip-line lighting, had concerns around quad bike safety and a refund request.',
    ownerResponse: {
      timeAgo: '10 months ago',
      message:
        'Hallo Tariro — I am really sorry that you had a bad experience at our establishment. Thank you for letting us know; please get in touch with management directly on 077 113 9692 so we can resolve this with you.',
    },
  },
];

export const OPERATING_GUIDELINES = [
  {
    title: 'Daylight Operating Window (8:00 AM – 5:00 PM)',
    detail:
      'The venue opens at 8:00 AM and closes promptly at 5:00 PM. Outdoor adventure attractions do not operate after dark (such as 8:00 PM) and do not feature night floodlighting.',
  },
  {
    title: 'Adventure Safety & Last Dispatch (4:15 PM)',
    detail:
      'Zip line launches and quad bike trail rides stop accepting new dispatches at 4:15 PM. Protective helmets, harness inspections, and terrain briefings are mandatory before riding.',
  },
  {
    title: 'Rescheduling, Weather & Refund Support',
    detail:
      'If unexpected rain or late arrival affects a pre-booked activity, contact management on 077 113 9692 before your slot begins to arrange a daylight reschedule or review.',
  },
];

export type PageId = 'home' | 'experiences' | 'plan' | 'reviews' | 'faq' | 'directions';

export type FAQCategory = 'all' | 'hours' | 'parking' | 'rules' | 'bookings';

export interface FAQItem {
  id: string;
  category: Exclude<FAQCategory, 'all'>;
  categoryLabel: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'operating-hours',
    category: 'hours',
    categoryLabel: 'Operating Hours',
    question: 'What are your daily opening and closing hours?',
    answer:
      'Sunset Gardens and Lagoon Gweru opens at 8:00 AM and closes at 5:00 PM daily (including Saturdays). For outdoor adventure attractions such as the zip line and quad bike trails, the last dispatch is at 4:15 PM so all rides finish safely in daylight.',
  },
  {
    id: 'evening-lighting',
    category: 'hours',
    categoryLabel: 'Operating Hours',
    question: 'Are the zip line or grounds open at night (for example at 8:00 PM)?',
    answer:
      'No. All gardens, picnic lawns, zip line platforms, and quad bike trails operate strictly during daylight hours between 8:00 AM and 5:00 PM. We do not install evening floodlighting on the outdoor zip line or trails, so please plan your arrival before 3:45 PM for full activity access.',
  },
  {
    id: 'parking-access',
    category: 'parking',
    categoryLabel: 'Parking & Arrival',
    question: 'Is on-site parking available for day visitors and wedding guests?',
    answer:
      'Yes. Dedicated on-site parking is available inside the grounds at 8 Mt Pleasant Rd, Harben Park, Gweru. For larger weddings or private events, our team coordinates designated guest parking and vendor drop-off access near the reception lawns.',
  },
  {
    id: 'finding-harben-park',
    category: 'parking',
    categoryLabel: 'Parking & Arrival',
    question: 'What is the easiest way to navigate to Sunset Lagoon in Harben Park?',
    answer:
      'Enter the Google Maps Plus Code HV8M+5P Gweru or street address 8 Mt Pleasant Rd, Harben Park, Gweru into your navigation app. You can also consult our official Facebook location post or call reception on 077 113 9692 for live route guidance.',
  },
  {
    id: 'adventure-safety-rules',
    category: 'rules',
    categoryLabel: 'Venue Rules & Safety',
    question: 'What safety rules apply to quad bikes and the lagoon zip line?',
    answer:
      'Every participant must complete an on-site safety briefing before riding. Protective helmets are mandatory on all quad bike trails, closed-toe shoes are strongly recommended, and zip line riders undergo a harness check with our staff prior to launch. Reckless riding or entering restricted trail zones is not permitted.',
  },
  {
    id: 'picnic-photo-rules',
    category: 'rules',
    categoryLabel: 'Venue Rules & Safety',
    question: 'What are the venue rules for family picnics and photo shoots?',
    answer:
      'Families and photographers are welcome across our designated lakeside lawns and green spaces during opening hours (8:00 AM – 5:00 PM). Guests are asked to keep walkways clear for wedding parties if an event is hosted nearby, dispose of litter in provided bins, and avoid open fires outside approved event catering setups.',
  },
  {
    id: 'wedding-event-booking',
    category: 'bookings',
    categoryLabel: 'Bookings & Refunds',
    question: 'How do we book a wedding, private event, or group picnic?',
    answer:
      'Prepare your preferred date, guest count, and daylight arrival window using our Hours & Plan page, or call our women-owned management team directly on 077 113 9692 to arrange a site walkthrough at Harben Park and confirm venue availability.',
  },
  {
    id: 'refund-reschedule-policy',
    category: 'bookings',
    categoryLabel: 'Bookings & Refunds',
    question: 'What is your policy for rescheduling, weather changes, or refund requests?',
    answer:
      'If heavy rain or an unavoidable schedule change prevents your daytime activity from running safely, contact management directly on 077 113 9692 before your scheduled slot begins so we can arrange a rescheduled date or review your booking directly with you.',
  },
];

