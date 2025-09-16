 interface PcBuildData {
  PCName: string;
  PCdescription: string;
  cpuName: string;
  cpuSpecs: string;
  gpuName: string;
  gpuSpecs: string;
  ramName: string;
  ramSpecs: string;
  motherboardSpecs: string;
}

 interface BudgetRequirements {
  minBudgetRange: string;
  maxBudgetRange: string;
  useCase: string;
  performancePreference: string;
  preferredBrands: string;
  extraDescription?: string;
  description: string;
  data: PcBuildData[];
}
