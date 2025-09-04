// types.ts

 interface Image {
  _id: string;
  file: string;
  fileExtension: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

 interface ProductDetails {
  _id: string;
  cpu: string;
  cpuCooler: string;
  motherboard: string;
  graphicCards: string;
  ram: string;
  gpuManufactured:string;
  pcRam:number;
  processor:string;
  processorManufactured:string;
  ramManufactured:string;
  gpu:number;
  ramManufactured:string;
  storage: string;
  cpuCase: string;
  rgbFans: string;
  __v: number;
}

 interface Product {
  _id: string;
  productName: string;
  description: string;
  price: number;
  images: Image[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  details: ProductDetails;
}

 interface ProductsResponse {
  success: boolean;
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  products: Product[];
}
