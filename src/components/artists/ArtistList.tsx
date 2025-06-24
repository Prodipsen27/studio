"use client";

import { useState, useMemo } from 'react';
import type { Artist, ArtistCategory } from '@/lib/types';
import ArtistCard from './ArtistCard';

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
        <div className="p-6 sticky top-24 rounded-lg border bg-card text-card-foreground shadow-sm">
          <h3 className="font-headline text-2xl mb-6">Filters</h3>
          <div className="space-y-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-muted-foreground mb-2">Category</label>
              <select
                id="category"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat} className="capitalize">{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-muted-foreground mb-2">
                Max Hourly Fee: ₹{maxFee}
              </label>
              <input
                type="range"
                id="price"
                min="0"
                max="10000"
                step="500"
                value={maxFee}
                onChange={(e) => setMaxFee(Number(e.target.value))}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
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
