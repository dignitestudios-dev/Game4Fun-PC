interface CpuResponse {
  manufacturer: string;
  model: string;
  queryName: string;
  segment: string;
  bestPicks: {
    position: number;
    value: number;
  };
  id: string;
}