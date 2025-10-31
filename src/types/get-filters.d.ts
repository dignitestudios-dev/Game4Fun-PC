 interface CpuGraphicResponse {
  success: boolean;
  data: {
    cpus: string[];
    graphicCards: string[];
  };
}
interface CpuResponse {
  success: boolean;
  data: {
    cpus: {
      manufacturer: string;
      model: string;
      queryName: string;
      segment: string;
      bestPicks: {
        position: number;
        value: number;
      };
      id: string;
    }[];
  
  };
}
