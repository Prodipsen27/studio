import Image from 'next/image';
import type { Artist } from '@/lib/types';

interface ArtistCardProps {
  artist: Artist;
}

const IndianRupee = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 3h12" />
    <path d="M6 8h12" />
    <path d="M6 13h12" />
    <path d="M9 18c6 0 9-4 9-9" />
    <path d="M8 3v18" />
  </svg>
);

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <div className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-0">
        <div className="relative h-56 w-full">
          <Image
            src={artist.imageUrl}
            alt={`Portrait of ${artist.name}`}
            layout="fill"
            objectFit="cover"
            data-ai-hint={artist.dataAiHint}
          />
        </div>
      </div>
      <div className="p-6 flex-grow">
        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-2 capitalize">{artist.category}</span>
        <h3 className="font-headline text-2xl mb-2 font-semibold leading-none tracking-tight">{artist.name}</h3>
        <p className="text-muted-foreground line-clamp-3">{artist.bio}</p>
      </div>
      <div className="flex justify-between items-center bg-muted/50 p-4">
        <div className="flex items-center gap-2 font-semibold">
           <IndianRupee className="h-5 w-5 text-primary" />
           <span>{artist.hourlyFee} / hour</span>
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">View Profile</button>
      </div>
    </div>
  );
}
