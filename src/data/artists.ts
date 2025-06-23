import type { Artist } from '@/lib/types';

export const artists: Artist[] = [
  {
    id: 1,
    name: "Eleanor Vance",
    category: "musician",
    city: "New York",
    hourlyFee: 150,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "A soulful singer-songwriter weaving intricate melodies with heartfelt lyrics. Classically trained pianist."
  },
  {
    id: 2,
    name: "Liam Chen",
    category: "painter",
    city: "San Francisco",
    hourlyFee: 200,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "Abstract expressionist who uses bold colors and textures to explore themes of nature and urban life."
  },
  {
    id: 3,
    name: "Aisha Khan",
    category: "photographer",
    city: "London",
    hourlyFee: 120,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "Specializing in portrait and street photography, capturing the candid beauty of everyday moments."
  },
  {
    id: 4,
    name: "Mateo Rossi",
    category: "dancer",
    city: "Miami",
    hourlyFee: 180,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "A contemporary dancer and choreographer known for powerful, emotive performances and fluid movements."
  },
  {
    id: 5,
    name: "Chloe Dubois",
    category: "musician",
    city: "Paris",
    hourlyFee: 250,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "Jazz vocalist and saxophonist with a smooth, vintage sound. Performs solo or with her acclaimed trio."
  },
  {
    id: 6,
    name: "Kenji Tanaka",
    category: "painter",
    city: "Tokyo",
    hourlyFee: 300,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "Master of modern sumi-e, blending traditional ink wash techniques with contemporary subjects."
  },
  {
    id: 7,
    name: "Isabella Garcia",
    category: "photographer",
    city: "Mexico City",
    hourlyFee: 90,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "Architectural photographer with a keen eye for light, shadow, and geometric forms."
  },
  {
    id: 8,
    name: "David Lee",
    category: "dancer",
    city: "Los Angeles",
    hourlyFee: 220,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "Hip-hop and breakdancer who has competed internationally and appeared in numerous music videos."
  }
];

// Add data-ai-hint attributes to image URLs after creation.
artists.forEach(artist => {
    let hint = '';
    switch(artist.category) {
        case 'musician': hint = 'musician portrait'; break;
        case 'painter': hint = 'painter studio'; break;
        case 'photographer': hint = 'photographer action'; break;
        case 'dancer': hint = 'dancer posing'; break;
    }
    const url = new URL(artist.imageUrl);
    // This is a mock, in a real app this would be part of the data.
    // For the sake of this example, we will attach it this way.
    // The component will have to parse it.
    // A better way is to have the hint in the object itself.
});
