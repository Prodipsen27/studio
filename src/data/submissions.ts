import type { Submission } from '@/lib/types';

export const submissions: Submission[] = [
  {
    id: 1,
    name: "Aarav Gupta",
    category: "musician",
    city: "Chandigarh",
    hourlyFee: 1800,
    status: 'pending',
  },
  {
    id: 2,
    name: "Ishika Patel",
    category: "photographer",
    city: "Indore",
    hourlyFee: 2500,
    status: 'pending',
  },
  {
    id: 3,
    name: "Aditi Singh",
    category: "painter",
    city: "Lucknow",
    hourlyFee: 4500,
    status: 'approved',
  },
  {
    id: 4,
    name: "Rohan Verma",
    category: "dancer",
    city: "Noida",
    hourlyFee: 3000,
    status: 'rejected',
  },
   {
    id: 5,
    name: "Diya Mehta",
    category: "musician",
    city: "Goa",
    hourlyFee: 3200,
    status: 'pending',
  },
];
