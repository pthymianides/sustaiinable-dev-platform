import { Investment } from '../types/investment';

export const investments: Investment[] = [
  {
    id: '1',
    title: 'Urban Forest Initiative',
    amount: 5000,
    returnRate: 8.5,
    progress: {
      current: 75000,
      total: 100000,
    },
    status: 'active',
    nextPayout: 'March 15, 2024',
  },
  {
    id: '2',
    title: 'Community Solar Farm',
    amount: 10000,
    returnRate: 12,
    progress: {
      current: 120000,
      total: 250000,
    },
    status: 'active',
    nextPayout: 'April 1, 2024',
  },
  {
    id: '3',
    title: 'Sustainable Agriculture Hub',
    amount: 7500,
    returnRate: 9.2,
    progress: {
      current: 45000,
      total: 80000,
    },
    status: 'pending',
    nextPayout: 'March 30, 2024',
  },
];