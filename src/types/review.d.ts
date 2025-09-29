 interface ReviewResponse {
  success: boolean;
  message: string;
  data: Review[];
  totalCount: number;
  totalPages: number;
}

 interface Review {
  _id: string;
  title: string;
  rating: number;
  review: string;
  picture: string | null;
  status: "accepted" | "pending" | "rejected";
  createdAt: string; // ISO Date string
  userData: UserData;
}

 interface UserData {
  fullName: string;
  email: string;
  profilePicture: string;
}
