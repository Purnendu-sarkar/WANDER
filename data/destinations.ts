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
