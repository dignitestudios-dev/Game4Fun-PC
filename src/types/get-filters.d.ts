 interface CpuGraphicResponse {
  success: boolean;
  data: {
    cpus: string[];
    graphicCards: string[];
  };
}
