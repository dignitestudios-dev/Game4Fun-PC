 interface BenchmarkSetting {
  setting: string;
  minimumFPS: number;
  averageFPS: number;
  maximumFPS: number;
}

 interface GameBenchmark {
  game: string;
  image: string | null;
  resolution: string;
  settings: BenchmarkSetting[];
}

 interface SystemBenchmark {
  processor: string;
  graphicCard: string;
  ram: string;
  screenResolution: string;
  description: string;
  benchmarks: GameBenchmark[];
}
