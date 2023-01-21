export interface Product {
  name: string;
  image_url: string;
  logo_url?: string;
  category: string;
  views: number;
  start_date: string;
  end_date: string;
  discount?: string;
  stars?: number;
  old_price?: number | string;
  new_price?: number | string;
  disclaimer?: string;
}

export interface SortPayload {
  sort: 'name' | 'views' | 'start_date' | 'end_date';
  queue: string;
  type?: string;
}
