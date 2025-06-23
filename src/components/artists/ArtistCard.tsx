import Image from 'next/image';
import type { Artist } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, DollarSign } from 'lucide-react';

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  const getCategoryHint = (category: string) => {
    switch (category) {
      case 'musician': return 'musician portrait';
      case 'painter': return 'painter studio';
      case 'photographer': return 'photographer action';
      case 'dancer': return 'dancer posing';
      default: return 'artist portrait';
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative h-56 w-full">
          <Image
            src={artist.imageUrl}
            alt={`Portrait of ${artist.name}`}
            layout="fill"
            objectFit="cover"
            data-ai-hint={getCategoryHint(artist.category)}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <Badge variant="secondary" className="mb-2 capitalize">{artist.category}</Badge>
        <CardTitle className="font-headline text-2xl mb-2">{artist.name}</CardTitle>
        <p className="text-muted-foreground line-clamp-3">{artist.bio}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center bg-muted/50 p-4">
        <div className="flex items-center gap-2 font-semibold">
           <DollarSign className="h-5 w-5 text-primary" />
           <span>{artist.hourlyFee} / hour</span>
        </div>
        <Button variant="outline">View Profile</Button>
      </CardFooter>
    </Card>
  );
}
