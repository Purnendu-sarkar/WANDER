export interface Destination {
  number: string;
  name: string;
  country: string;
  description: string;
  image: string;
  coordinates: string;
  category: string;
}

export const destinations: Destination[] = [
  {
    number: '01',
    name: 'PATAGONIA',
    country: 'Argentina / Chile',
    category: 'Adventure',
    coordinates: "49°18' S  73°02' W",
    description: 'Where the earth feels endless.',
    image: '/6d133e20-a92c-4446-9e08-d84367a3db4c.jpg',
  },
  {
    number: '02',
    name: 'KYOTO',
    country: 'Japan',
    category: 'Culture',
    coordinates: "35°01' N  135°46' E",
    description: 'Where tradition moves quietly.',
    image: '/055e4b9a-a541-4dba-be91-f4561f939e36.jpg',
  },
  {
    number: '03',
    name: 'SANTORINI',
    country: 'Greece',
    category: 'Coastal',
    coordinates: "36°23' N  25°27' E",
    description: 'Where blue meets the horizon.',
    image: '/f3e1f621-82ca-43e2-8d51-5437629e7866.jpg',
  },
  {
    number: '04',
    name: 'ICELAND',
    country: 'Iceland',
    category: 'Wilderness',
    coordinates: "64°08' N  21°56' W",
    description: 'Where nature feels unreal.',
    image: '/2a9df3a5-33c7-40d6-93e0-dc784a0680dc.jpg',
  },
  {
    number: '05',
    name: 'BALI',
    country: 'Indonesia',
    category: 'Tropical',
    coordinates: "08°24' S  115°11' E",
    description: 'Where mornings arrive slowly.',
    image: '/a5e5d242-d869-4552-a0a4-6383d099e832.jpg',
  },
];

export const heroImage =
  'https://images.pexels.com/photos/18261765/pexels-photo-18261765.jpeg?auto=compress&cs=tinysrgb&w=1920';

export interface ExperienceItem {
  number: string;
  title: string;
  highlightText: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  tag: string;
  image: string;
  duration: string;
  bestSeason: string;
  difficulty: string;
  highlights: string[];
  audioAmbientTitle: string;
}

export interface JournalStory {
  number: string;
  title: string;
  subtitle: string;
  excerpt: string;
  fullContent: string[];
  quote: string;
  image: string;
  galleryImages: string[];
  location: string;
  date: string;
  category: 'Expeditions' | 'Culture' | 'Coastal' | 'Wilderness';
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  audioDuration: string;
}

export const experiences: ExperienceItem[] = [
  {
    number: '01',
    title: 'DISCOVER',
    highlightText: 'Into the Unseen',
    subtitle: 'Wander Beyond the Mapped Horizon',
    description: 'Traverse uncharted mountain ridge lines and secluded glacial valleys untouched by commercial tourism.',
    fullDescription: 'Discovery is not merely about finding new lands—it is about looking with fresh eyes. Our discovery expeditions take you deep into raw wilderness, ancient trade routes, and secret alpine summits guided by local elders and seasoned explorers.',
    tag: 'EXPLORATION',
    image: 'https://images.pexels.com/photos/31814582/pexels-photo-31814582.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '7 - 14 Days',
    bestSeason: 'Oct — April',
    difficulty: 'Challenging',
    highlights: ['Glacial Ridge Treks', 'Private Base Camp Stays', 'Midnight Star Navigation', 'Drone Cinematography'],
    audioAmbientTitle: 'Patagonian Wind & Ice Whispers',
  },
  {
    number: '02',
    title: 'CONNECT',
    highlightText: 'Ancient Wisdom',
    subtitle: 'Immerse in Living Heritage',
    description: 'Share quiet tea ceremonies in wooden Kyoto Machiya and break bread with nomadic desert artisans.',
    fullDescription: 'True connection transforms travel from observation into intimate dialogue. We facilitate authentic cultural immersion where you learn ancient craft techniques, participate in sacred dawn rituals, and build friendships that cross continents.',
    tag: 'CULTURE & RITUALS',
    image: 'https://images.pexels.com/photos/33469141/pexels-photo-33469141.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '5 - 10 Days',
    bestSeason: 'Year Round',
    difficulty: 'Leisurely',
    highlights: ['Master Tea Ceremonies', 'Artisan Studio Visits', 'Private Temple Sunrise Access', 'Culinary Heritage Workshops'],
    audioAmbientTitle: 'Kyoto Bamboo Forest Raindrops',
  },
  {
    number: '03',
    title: 'AWAKEN',
    highlightText: 'Celestial Solitude',
    subtitle: 'Find Stillness in the Elements',
    description: 'Sleep beneath the dance of the Northern Lights and wake to geothermal mist rising across volcanic valleys.',
    fullDescription: 'In the noise of modern life, clarity requires deep stillness. Our awakening retreats combine luxury eco-lodges with hot spring therapy, dark sky astronomy, and guided silent treks designed to reset body and soul.',
    tag: 'WELLNESS & RETREAT',
    image: 'https://images.stockcake.com/public/a/2/e/a2eb4036-9f36-4429-a810-c74c636fefe7_large/mystical-moonlit-solitude-stockcake.jpg',
    duration: '4 - 8 Days',
    bestSeason: 'Sept — March',
    difficulty: 'Moderate',
    highlights: ['Aurora Borealis Glamping', 'Geothermal Lagoon Immersion', 'Mindfulness in Nature', 'Private Astrophotography'],
    audioAmbientTitle: 'Icelandic Thermal Geyser & Aurora Ambient',
  },
  {
    number: '04',
    title: 'ASCEND',
    highlightText: 'Wild Summits',
    subtitle: 'Reach High Altitude Horizons',
    description: 'Harness high alpine breezes, fly over fjords, and push your spirit to breathtaking heights.',
    fullDescription: 'For those who seek the thrill of high altitude, Ascend delivers high-elevation mountaineering, heliskiing over untouched powder, and cliffside ocean rappelling backed by certified alpine guides.',
    tag: 'EXTREME ADVENTURE',
    image: 'https://images.pexels.com/photos/18261765/pexels-photo-18261765.jpeg?auto=compress&cs=tinysrgb&w=1200',
    duration: '6 - 12 Days',
    bestSeason: 'Nov — March',
    difficulty: 'Advanced',
    highlights: ['Helicopter Fjord Drop', 'Via Ferrata Climbing', 'Summit Champagne Celebration', 'Thermal Flight Gear'],
    audioAmbientTitle: 'Alpine Peak Breeze & Snow Crunch',
  },
];

export const journalStories: JournalStory[] = [
  {
    number: '01',
    title: 'THE SILENCE OF PATAGONIAN WIND',
    subtitle: 'Walking through Fitz Roy’s granite spires at dawn',
    excerpt: 'A 14-day solo expedition through wind-carved valleys, turquoise glacial lakes, and the raw poetry of South American wilderness.',
    fullContent: [
      'Standing at the foot of Mount Fitz Roy before sunrise, the wind carries a sound unlike anything else on Earth. It is not just air moving; it is a primal roar that echoes off vertical granite monoliths that have stood for millions of years.',
      'We set off from El Chaltén with forty-pound packs, navigating narrow trails lined with Antarctic beech trees. The weather in Patagonia changes not by the hour, but by the minute. Within three miles, we experienced crisp autumn sunlight, blinding horizontal sleet, and a rainbow spanning the entire Laguna de los Tres.',
      'As night fell at our high-altitude camp, the clouds parted to reveal a sky so densely packed with stars that the Southern Cross burned like a lantern. Here, far from light pollution, travel becomes a meditation on scale and humility.'
    ],
    quote: 'In Patagonia, you do not conquer the mountain; the mountain reshapes your spirit.',
    image: 'https://images.pexels.com/photos/31814582/pexels-photo-31814582.jpeg?auto=compress&cs=tinysrgb&w=1200',
    galleryImages: [
      'https://images.pexels.com/photos/18261765/pexels-photo-18261765.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/22064527/pexels-photo-22064527.jpeg'
    ],
    location: 'Patagonia, AR',
    date: 'March 2026',
    category: 'Expeditions',
    readTime: '6 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Alpine Expedition Lead',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    audioDuration: '4:20'
  },
  {
    number: '02',
    title: 'MIDNIGHT IN ANCIENT KYOTO',
    subtitle: 'When lantern-lit wooden alleys fall completely silent',
    excerpt: 'Sipping matcha in centuries-old tea houses and exploring Gion’s quietest stone pathways long after tourists retreat.',
    fullContent: [
      'At 1:00 AM in Gion, Kyoto sheds its modern bustle. The soft glow of red paper lanterns flickers against dark cedar facades, casting long shadows across rain-slicked cobblestones.',
      'We were invited into a private tea house by Master Kenjiro, whose family has cultivated green tea fields in Uji for six generations. Over two quiet hours, he demonstrated the precise geometry of whisking ceremonial-grade matcha.',
      'Every movement—from the tilt of the bamboo ladle to the gentle turn of the ceramic bowl—was performed with effortless mindfulness. In Kyoto, hospitality is an art form rooted in zero wasted motion.'
    ],
    quote: 'Tradition is not the preservation of ashes, but the preservation of fire.',
    image: 'https://images.pexels.com/photos/33469141/pexels-photo-33469141.jpeg?auto=compress&cs=tinysrgb&w=1200',
    galleryImages: [
      'https://images.pexels.com/photos/29510510/pexels-photo-29510510.jpeg',
      'https://images.pexels.com/photos/28439478/pexels-photo-28439478.jpeg'
    ],
    location: 'Kyoto, JP',
    date: 'November 2025',
    category: 'Culture',
    readTime: '4 min read',
    author: {
      name: 'Kenji Takahashi',
      role: 'Cultural Historian',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    audioDuration: '3:15'
  },
  {
    number: '03',
    title: 'CHASING BLUE BEYOND THE AEGEAN',
    subtitle: 'Cliffside sanctuaries and volcanic sea caves in Greece',
    excerpt: 'Sailing along Santorini’s caldera at dusk as cobalt waters absorb the golden light of the Mediterranean sun.',
    fullContent: [
      'The Aegean Sea has a specific shade of indigo that seems impossible until you sail across it. Departing from Ammoudi Bay on a wooden schooner, we navigated beneath 300-meter cliffs of black volcanic basalt.',
      'Our captain, Captain Spiros, pointed toward hidden sea caves carved by ancient eruption surges. We dropped anchor in crystal-clear waters off the Red Beach and swam into underwater thermal springs.',
      'As evening descended, the cliffside village of Oia transformed into an amphitheater of pastel pinks, deep corals, and shimmering whitewashed rooftops. Dining on fresh grilled octopus and sun-cured tomatoes, time seemed to stand still.'
    ],
    quote: 'The ocean is the canvas where light paints its most timeless stories.',
    image: 'https://images.pexels.com/photos/161342/greece-santorini-architecture-island-161342.jpeg?auto=compress&cs=tinysrgb&w=1200',
    galleryImages: [
      'https://images.pexels.com/photos/6980275/pexels-photo-6980275.jpeg',
      'https://images.pexels.com/photos/32654599/pexels-photo-32654599.jpeg',
      'https://images.pexels.com/photos/37825188/pexels-photo-37825188.jpeg'
    ],
    location: 'Santorini, GR',
    date: 'July 2025',
    category: 'Coastal',
    readTime: '5 min read',
    author: {
      name: 'Sofia Moraitis',
      role: 'Maritime Writer',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    audioDuration: '3:50'
  },
  {
    number: '04',
    title: 'ICELAND: WHERE FIRE MEETS ICE',
    subtitle: 'Dancing auroras over black sand volcanic beaches',
    excerpt: 'An ethereal journey across glacier lagoons, hidden geothermal waterfalls, and glowing green skies in Reynisfjara.',
    fullContent: [
      'In winter, Iceland feels like another planet altogether. Driving along the southern Ring Road, steam columns rise from snow-covered lava fields while massive glaciers spill out toward the ocean.',
      'At Jökulsárlón glacier lagoon, icebergs detached from Vatnajökull float serenely like blue diamonds before washing ashore onto pitch-black basalt sands.',
      'Around midnight, the forecast signaled high geomagnetic activity. Stepping out into the sub-zero night air, emerald curtains of Aurora Borealis began to ripple across the heavens, reflecting in the glassy waters of the fjord.'
    ],
    quote: 'To witness the Aurora is to hear the solar system hum.',
    image: 'https://images.pexels.com/photos/29213491/pexels-photo-29213491.jpeg',
    galleryImages: [
      'https://images.pexels.com/photos/16251253/pexels-photo-16251253.jpeg'
    ],
    location: 'Reykjavik, IS',
    date: 'February 2026',
    category: 'Wilderness',
    readTime: '7 min read',
    author: {
      name: 'Aria Lindqvist',
      role: 'Astrophotographer',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    audioDuration: '5:10'
  }
];

export const stats = [
  { value: 48, label: 'DESTINATIONS', suffix: '' },
  { value: 27, label: 'COUNTRIES', suffix: '' },
  { value: 12, label: 'TRAVELERS', suffix: 'K+' },
];

/* ── The Wander Way (Philosophy) ─────────────────────────────── */

export interface Principle {
  number: string;
  title: string;
  tagline: string;
  body: string;
}

export const principles: Principle[] = [
  {
    number: '01',
    title: 'SLOW',
    tagline: 'The shortest route is the one everyone took.',
    body: 'We book fewer stops and stay longer. A week in one village, not seven countries — enough time for the weather to turn on you twice, then forgive you.',
  },
  {
    number: '02',
    title: 'RARE',
    tagline: 'Access is earned, never queued for.',
    body: 'Small groups, private doors, after-hours temples and empty ridgelines. Every journey is limited — to eight explorers, never more.',
  },
  {
    number: '03',
    title: 'HUMAN',
    tagline: 'The map is a suggestion. Locals are the authority.',
    body: 'Every route is guided by people who live there. Elders, artisans and hosts — never third-party scripts, never rehearsed lines.',
  },
];

export const philosophyPullLine =
  'We don\'t sell tickets. We open doors.';

/* ── When to Wander (Seasonal field guide) ───────────────────── */

export interface Season {
  id: string;
  name: string;
  icon: 'spring' | 'summer' | 'autumn' | 'winter';
  months: string;
  mood: string;
  blurb: string;
  best: string[];
  fieldNote: string;
  image: string;
}

export const seasons: Season[] = [
  {
    id: 'spring',
    name: 'SPRING',
    icon: 'spring',
    months: 'MAR — MAY',
    mood: 'AWAKENING',
    blurb:
      'New leaves, thin light, and gardens no one else wakes up for. Kyoto sheds its crowds the moment the last tour bus leaves.',
    best: ['Kyoto', 'Himalayan Foothills'],
    fieldNote:
      'Peak sakura is a ten-day window. Book your Machiya stay by December.',
    image: '/055e4b9a-a541-4dba-be91-f4561f939e36.jpg',
  },
  {
    id: 'summer',
    name: 'SUMMER',
    icon: 'summer',
    months: 'JUN — AUG',
    mood: 'RADIANCE',
    blurb:
      'Long golden hours, empty cliffs at first swim, and dinners that start late and simply never end.',
    best: ['Santorini', 'Bali'],
    fieldNote:
      'July in Oia is gold. August is foreign territory — we sail in July.',
    image: '/f3e1f621-82ca-43e2-8d51-5437629e7866.jpg',
  },
  {
    id: 'autumn',
    name: 'AUTUMN',
    icon: 'autumn',
    months: 'SEP — NOV',
    mood: 'GRAVITY',
    blurb:
      'Crisp air on empty trails, forests set alight, and passes the crowds have quietly abandoned.',
    best: ['Patagonia', 'Iceland'],
    fieldNote:
      'Trails clear by late October. Go before the first big storms close the passes.',
    image: '/6d133e20-a92c-4446-9e08-d84367a3db4c.jpg',
  },
  {
    id: 'winter',
    name: 'WINTER',
    icon: 'winter',
    months: 'DEC — FEB',
    mood: 'STILLNESS',
    blurb:
      'Short days, long skies, and geothermal steam rising against air cold enough to feel alive in.',
    best: ['Iceland', 'Alps'],
    fieldNote:
      'Aurora odds peak around the equinoxes. Plan February for the darkest, quietest skies.',
    image: '/2a9df3a5-33c7-40d6-93e0-dc784a0680dc.jpg',
  },
];

/* ── Expedition Leaders (Meet the guides) ────────────────────── */

export interface GuideLeader {
  number: string;
  name: string;
  role: string;
  home: string;
  languages: string;
  expertise: string;
  years: string;
  quote: string;
  avatar: string;
}

export const leaders: GuideLeader[] = [
  {
    number: '01',
    name: 'Elena Rostova',
    role: 'Alpine Expedition Lead',
    home: 'Patagonia, AR',
    languages: 'ES / EN / RU',
    expertise: 'Glacial ridgelines & high camp',
    years: '14 yrs',
    quote: 'Wind is honest. It tells you when to turn around.',
    avatar:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    number: '02',
    name: 'Kenji Takahashi',
    role: 'Cultural Historian',
    home: 'Kyoto, JP',
    languages: 'JA / EN',
    expertise: 'Tea ritual & temple access',
    years: '18 yrs',
    quote: 'A city is best read in silence, at five in the morning.',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    number: '03',
    name: 'Sofia Moraitis',
    role: 'Maritime Writer & Skipper',
    home: 'Santorini, GR',
    languages: 'EL / EN / FR',
    expertise: 'Caldera sailing & sea caves',
    years: '11 yrs',
    quote: 'The Aegean doesn\'t have a season. It has a mood.',
    avatar:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    number: '04',
    name: 'Aria Lindqvist',
    role: 'Astrophotographer',
    home: 'Reykjavik, IS',
    languages: 'IS / EN / DE',
    expertise: 'Aurora hunting & dark skies',
    years: '9 yrs',
    quote: 'I chase the sky, but I photograph the ground beneath it.',
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

/* ── Traveler Voices (Testimonials) ──────────────────────────── */

export interface TravelerTestimonial {
  quote: string;
  name: string;
  origin: string;
  route: string;
  avatar: string;
}

export const testimonials: TravelerTestimonial[] = [
  {
    quote:
      'I have climbed on five continents. Nothing prepared me for the silence above the clouds in Patagonia. Eight strangers, one ridge, zero phones — that is the whole review.',
    name: 'Marcus Thorne',
    origin: 'London, UK',
    route: 'PATAGONIA ASCENTS',
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'We arrived as clients and left as friends of our guide\'s grandmother. The Kyoto tea ceremony felt less like tourism and more like being welcomed home.',
    name: 'Amara Okafor',
    origin: 'Toronto, CA',
    route: 'KYOTO IN SAKURA',
    avatar:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'Two weeks in Bali at sunrise, before the island wakes up. The Wanderers knew exactly where the light would be — every single morning.',
    name: 'Jonas Weber',
    origin: 'Berlin, DE',
    route: 'ISLAND DAWNS',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'I chased auroras for a decade before one of Aria\'s night camps finally delivered. The sky did not disappoint — and neither did the geothermal pool after.',
    name: 'Sophie Laurent',
    origin: 'Lyon, FR',
    route: 'ICELANDIC WINTER',
    avatar:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'The "limited to eight" thing is real. Our Santorini sail met exactly seven other travelers. We shared one long dinner and the entire caldera.',
    name: 'David Chen',
    origin: 'Singapore, SG',
    route: 'AEGEAN EVENINGS',
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'I booked the wrong season, and they rebuilt the whole route around me. That is not a tour company. That is a friend who happens to own a mountain.',
    name: 'Ingrid Halvorsen',
    origin: 'Oslo, NO',
    route: 'REBUILT ROUTES',
    avatar:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

/* ── The Wanderer's Kit (Packing checklist) ───────────────── */

export interface KitItem {
  label: string;
  detail: string;
}

export interface KitCategory {
  id: string;
  number: string;
  title: string;
  note: string;
  items: KitItem[];
}

export const packingKit: KitCategory[] = [
  {
    id: 'basics',
    number: '01',
    title: 'THE BASICS',
    note: 'The unglamorous essentials',
    items: [
      { label: 'Passport & visa copies', detail: 'Digital + paper, kept apart' },
      { label: 'Travel insurance card', detail: 'We verify it before departure' },
      { label: 'Spare passport photos', detail: 'Two, never one' },
      { label: 'Adapter & backup battery', detail: '100–240V, universal' },
    ],
  },
  {
    id: 'trail',
    number: '02',
    title: 'ON THE TRAIL',
    note: 'Where weather changes by the minute',
    items: [
      { label: 'Broken-in hiking boots', detail: 'Worn by week two, not day one' },
      { label: 'Packable rain shell', detail: 'Patagonia rain arrives without a meeting' },
      { label: '40L pack — no more', detail: 'You carry it. We do not.' },
      { label: 'Physical map, unhurried', detail: 'Old school on purpose' },
    ],
  },
  {
    id: 'dark',
    number: '03',
    title: 'AFTER DARK',
    note: 'For the hours photography forgets',
    items: [
      { label: 'Red-light headlamp', detail: 'Preserves night vision for aurora' },
      { label: 'Down mid-layer', detail: 'Thermals beat jackets at −10°C' },
      { label: 'Stargazing blanket', detail: 'Insulated, packable — ours or yours' },
      { label: 'Low-glow flask', detail: 'For the summit rule: nothing heavy' },
    ],
  },
  {
    id: 'human',
    number: '04',
    title: 'THE HUMAN KIT',
    note: 'Progress doesn\'t fit in a roll-aboard',
    items: [
      { label: 'Small journal & one pen', detail: 'The real souvenir' },
      { label: 'A phrase in the local tongue', detail: 'We teach you three before landing' },
      { label: 'A gift for your host', detail: 'Sweets from home land best' },
      { label: 'An open schedule', detail: 'Patience is the only upgrade we cannot pack' },
    ],
  },
];

/* ── Before You Wander (FAQ) ─────────────────────────────────── */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'How small are WANDER groups, really?',
    answer:
      'Eight travelers per journey, one lead guide and one local host. On certain routes — like the Kyoto Machiya stay — access is fully private, and the group never feels like a group.',
  },
  {
    question: 'What happens if my plans change?',
    answer:
      'Deposits are fully refundable up to 60 days before departure. After that we will move you, split payments, or transfer the booking to a friend. The trip is the dream, not the deposit.',
  },
  {
    question: 'Do I need to be fit?',
    answer:
      'Every route lists a difficulty — from Leisurely to Advanced — and we fit the trip to the traveler, not the other way around. If you are unsure, we build the itinerary around your pace.',
  },
  {
    question: 'What about solo travelers?',
    answer:
      'Over half of our guests travel alone. Couples, friends and solo explorers are mixed into each journey, and there is no single supplement on shared expeditions.',
  },
  {
    question: 'Where do I sleep?',
    answer:
      'Where locals sleep: restored machiya, alpine refuges, eco-lodges and a handful of off-grid rooms that do not exist online. Never chain hotels, never crowded hostels.',
  },
  {
    question: 'How far ahead should I book?',
    answer:
      'Spring sakura season books out six to eight months in advance. Our open-route list refreshes each quarter — the earlier you lock in, the more flexible rebooking becomes.',
  },
];
