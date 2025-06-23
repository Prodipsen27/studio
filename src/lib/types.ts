export type ArtistCategory = "musician" | "painter" | "photographer" | "dancer";

export interface Artist {
  id: number;
  name: string;
  category: ArtistCategory;
  city: string;
  hourlyFee: number;
  imageUrl: string;
  bio: string;
}

export interface Submission {
    id: number;
    name: string;
    category: ArtistCategory;
    city: string;
    hourlyFee: number;
    status: 'pending' | 'approved' | 'rejected';
}
