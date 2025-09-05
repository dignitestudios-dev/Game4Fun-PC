 interface Faq {
  _id: string;
  question: string;
  answer: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

 interface GetFaqsResponse {
  message: string;
  data: Faq[];
}
