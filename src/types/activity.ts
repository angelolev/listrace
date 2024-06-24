export interface IActivityCard {
  id: number;
  name: string;
  rating: string;
  ratingCount: number;
  minValue: number | string;
  maxValue: number | string;
  category: string;
  image: string;
  hostImage: string;
  hostDescription: string;
  status: boolean;
}
