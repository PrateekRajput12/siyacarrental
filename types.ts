
export interface Package {
  id: string;
  type: 'cab' | 'taxi';
  title: string;
  description: string;
  pricePerKm: number;
  baseFare: number;
  features: string[];
  image: string;
  category: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  pickup: string;
  drop: string;
  date: string;
  message: string;
  packageId?: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
