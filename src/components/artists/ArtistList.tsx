"use client";

import { useState, useMemo } from 'react';
import type { Artist, ArtistCategory } from '@/lib/types';
import ArtistCard from './ArtistCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';

interface ArtistListProps {
  allArtists: Artist[];
}

const categories: ArtistCategory[] = ["musician", "painter", "photographer", "dancer"];

export default function ArtistList({ allArtists }: ArtistListProps) {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [maxFee, setMaxFee] = useState(10000);

  const filteredArtists = useMemo(() => {
    return allArtists.filter(artist => {
      const categoryMatch = categoryFilter === 'all' || artist.category === categoryFilter;
      const feeMatch = artist.hourlyFee <= maxFee;
      return categoryMatch && feeMatch;
    });
  }, [allArtists, categoryFilter, maxFee]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-1">
        <Card className="p-6 sticky top-24">
          <h3 className="font-headline text-2xl mb-6">Filters</h3>
          <div className="space-y-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-muted-foreground mb-2">Category</label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat} className="capitalize">{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-muted-foreground mb-2">
                Max Hourly Fee: ₹{maxFee}
              </label>
              <Slider
                id="price"
                min={0}
                max={10000}
                step={500}
                value={[maxFee]}
                onValueChange={(value) => setMaxFee(value[0])}
              />
            </div>
          </div>
        </Card>
      </div>

      <div className="lg:col-span-3">
        {filteredArtists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredArtists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="font-headline text-2xl">No Artists Found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters to find more artists.</p>
          </div>
        )}
      </div>
    </div>
  );
}
