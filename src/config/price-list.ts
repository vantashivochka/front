export interface PriceListItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description?: string | null;
  price: number;
}

