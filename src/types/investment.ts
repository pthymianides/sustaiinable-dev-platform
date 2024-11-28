export interface Investment {
  id: string;
  title: string;
  amount: number;
  returnRate: number;
  progress: {
    current: number;
    total: number;
  };
  status: 'active' | 'pending';
  nextPayout: string;
}