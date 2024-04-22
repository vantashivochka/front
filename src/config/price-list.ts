export interface PriceListItem {
  id: string | number;
  createdAt?: string;
  updatedAt?: string;
  title: string;
  description?: string | null;
  price: number;
}

