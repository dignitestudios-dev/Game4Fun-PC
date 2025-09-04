 interface ProductImage {
  _id: string;
  file: string;
  fileExtension: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

 interface ProductDetails {
  _id: string;
  productId: string;
  cpu: string;
  cpuCooler: string;
  motherboard: string;
  powerSupply: string;
  graphicCards: string;
  ram: string;
  storage: string;
  cpuCase: string;
  rgbFans: string;
  operatingSystems: string;
  processorBenchmark: number;
  cpuMathematicalOperationsBenchmark: number;
  cpuCommonAlgorithmsBenchmark: number;
  cpuMultiCoreBenchmark: number;
  ramBenchmark: number;
  ramAccessBenchmark: number;
  diskAppIOBenchmark: number;
  diskRandomAccessBenchmark: number;
  diskSeauentialReadBenchmark: number;
  diskSeauentialWriteBenchmark: number;
  graphicCardBenchmark: number;
  threeDCoastlineOpenGLBenchmark: number;
  threeDBrutalistBenchmark: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

 interface Product {
  _id: string;
  productName: string;
  description: string;
  price: number;
  images: ProductImage[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  details: ProductDetails;
}

 interface SingleProductResponse {
  success: boolean;
  product: Product;
}
