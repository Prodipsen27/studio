import type { Submission } from '@/lib/types';

export const submissions: Submission[] = [
  {
    id: 1,
    name: "Sophia Miller",
    category: "musician",
    city: "Austin",
    hourlyFee: 80,
    status: 'pending',
  },
  {
    id: 2,
    name: "Ben Carter",
    category: "photographer",
    city: "Chicago",
    hourlyFee: 110,
    status: 'pending',
  },
  {
    id: 3,
    name: "Olivia Rodriguez",
    category: "painter",
    city: "Seattle",
    hourlyFee: 175,
    status: 'approved',
  },
  {
    id: 4,
    name: "Noah Kim",
    category: "dancer",
    city: "Las Vegas",
    hourlyFee: 160,
    status: 'rejected',
  },
   {
    id: 5,
    name: "Ava Nguyen",
    category: "musician",
    city: "Nashville",
    hourlyFee: 130,
    status: 'pending',
  },
];
