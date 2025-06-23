import type { Artist } from '@/lib/types';

export const artists: Artist[] = [
  {
    id: 1,
    name: "Priya Sharma",
    category: "musician",
    city: "Mumbai",
    hourlyFee: 3500,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "A soulful singer-songwriter weaving intricate melodies with heartfelt lyrics. Classically trained in Hindustani music."
  },
  {
    id: 2,
    name: "Rohan Joshi",
    category: "painter",
    city: "Delhi",
    hourlyFee: 5000,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "Abstract expressionist who uses bold colors and textures to explore themes of urban Indian life."
  },
  {
    id: 3,
    name: "Ananya Rao",
    category: "photographer",
    city: "Bangalore",
    hourlyFee: 2800,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "Specializing in wedding and street photography, capturing the candid beauty of everyday moments in India."
  },
  {
    id: 4,
    name: "Vikram Singh",
    category: "dancer",
    city: "Jaipur",
    hourlyFee: 4200,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "A classical Kathak dancer and choreographer known for powerful, emotive performances and fluid movements."
  },
  {
    id: 5,
    name: "Sunita Krishnan",
    category: "musician",
    city: "Chennai",
    hourlyFee: 4000,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "Carnatic vocalist and violinist with a smooth, traditional sound. Performs solo or with her acclaimed ensemble."
  },
  {
    id: 6,
    name: "Arjun Mehra",
    category: "painter",
    city: "Kolkata",
    hourlyFee: 6000,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "Master of modern Indian art, blending traditional folk techniques with contemporary subjects."
  },
  {
    id: 7,
    name: "Meera Desai",
    category: "photographer",
    city: "Ahmedabad",
    hourlyFee: 2200,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "Architectural photographer with a keen eye for light, shadow, and the geometric forms of ancient and modern India."
  },
  {
    id: 8,
    name: "Kabir Khan",
    category: "dancer",
    city: "Pune",
    hourlyFee: 3800,
    imageUrl: "https://placehold.co/400x400.png",
    bio: "Bollywood and hip-hop dancer who has choreographed for films and appeared in numerous music videos."
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
