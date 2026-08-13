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
    description: 'Where the earth feels endless.',
    image:
      'https://images.pexels.com/photos/32955862/pexels-photo-32955862.jpeg?auto=compress&cs=tinysrgb&w=1600',
    coordinates: "49°18' S",
    category: 'Adventure',
  },
  {
    number: '02',
    name: 'KYOTO',
    country: 'Japan',
    description: 'Where tradition moves quietly.',
    image:
      'https://images.pexels.com/photos/34580421/pexels-photo-34580421.jpeg?auto=compress&cs=tinysrgb&w=1600',
    coordinates: "35°00' N",
    category: 'Culture',
  },
  {
    number: '03',
    name: 'SANTORINI',
    country: 'Greece',
    description: 'Where blue meets the horizon.',
    image:
      'https://images.pexels.com/photos/33851769/pexels-photo-33851769.jpeg?auto=compress&cs=tinysrgb&w=1600',
    coordinates: "36°23' N",
    category: 'Coastal',
  },
  {
    number: '04',
    name: 'ICELAND',
    country: 'Iceland',
    description: 'Where nature feels unreal.',
    image:
      'https://images.pexels.com/photos/1009136/pexels-photo-1009136.jpeg?auto=compress&cs=tinysrgb&w=1600',
    coordinates: "64°08' N",
    category: 'Wilderness',
  },
  {
    number: '05',
    name: 'BALI',
    country: 'Indonesia',
    description: 'Where green meets the sky.',
    image:
      'https://images.pexels.com/photos/35428411/pexels-photo-35428411.jpeg?auto=compress&cs=tinysrgb&w=1600',
    coordinates: "08°20' S",
    category: 'Tropical',
  },
];

export const heroImage =
  'https://images.pexels.com/photos/18261765/pexels-photo-18261765.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const journalStories = [
  {
    number: '01',
    title: 'THE ROAD TO PATAGONIA',
    excerpt:
      'A journey through wind, mountains and endless horizons.',
    image:
      'https://images.pexels.com/photos/31814582/pexels-photo-31814582.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Patagonia, AR',
    date: 'March 2026',
  },
  {
    number: '02',
    title: 'MIDNIGHT IN KYOTO',
    excerpt: 'When ancient streets become quiet.',
    image:
      'https://images.pexels.com/photos/33469141/pexels-photo-33469141.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Kyoto, JP',
    date: 'November 2025',
  },
  {
    number: '03',
    title: 'THE COLORS OF SANTORINI',
    excerpt: 'Chasing blue beyond the Aegean.',
    image:
      'https://images.pexels.com/photos/161342/greece-santorini-architecture-island-161342.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Santorini, GR',
    date: 'July 2025',
  },
];

export const experiences = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Find places beyond the obvious.',
  },
  {
    number: '02',
    title: 'CONNECT',
    description: 'Meet cultures, people and stories.',
  },
  {
    number: '03',
    title: 'REMEMBER',
    description: 'Take home moments, not souvenirs.',
  },
];

export const stats = [
  { value: 48, label: 'DESTINATIONS', suffix: '' },
  { value: 27, label: 'COUNTRIES', suffix: '' },
  { value: 12, label: 'TRAVELERS', suffix: 'K+' },
];
