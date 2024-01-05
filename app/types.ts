export type User = {
  id: number;
  lineUserId: string;
  birthday: string;
  createdAt: string;
  updatedAt: string;
}  

export type HealthLog = {
  id: number;
  user: User;
  content : string;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

export type ApiResponse = {
  message: string;
}