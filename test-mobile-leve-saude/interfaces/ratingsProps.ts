export default interface Rating {
  userId: string;
  name: string;
  stars: number;
  comment: string;
  createdAt: Date;
  key?: string;
}
