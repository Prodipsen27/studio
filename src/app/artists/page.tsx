import ArtistList from '@/components/artists/ArtistList';
import { artists } from '@/data/artists';

export default function ArtistsPage() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold font-headline">Meet Our Artists</h1>
        <p className="text-lg text-muted-foreground mt-2">Filter and find the perfect creative professional for your project.</p>
      </div>
      <ArtistList allArtists={artists} />
    </div>
  );
}
