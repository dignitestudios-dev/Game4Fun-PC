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
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  motherboard: string;
  cooling: "air" | "aio" | string;
  psu: string;
  caseAndAirflow: string;
  monitor: string;
  games: string[] | string;
  setting: "competitive" | "low" | "high" | "ultra" | "custom" | string;
}
