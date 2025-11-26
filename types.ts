
export enum SkinType {
  Dry = 'Dry',
  Oily = 'Oily',
  Combination = 'Combination',
  Sensitive = 'Sensitive',
}

export enum DeliveryOption {
  Online = 'Online Delivery',
  InStore = 'In-Store Pickup',
}

export interface UserPreferences {
  skinType: SkinType;
  age: number;
  budget: number;
  delivery: DeliveryOption;
}

export interface LocalizedText {
  en: string;
  ko: string;
}

export interface Product {
  productName: LocalizedText;
  brand: LocalizedText;
  price: number;
  imageUrl: string;
  productUrl: string;
  explanation: LocalizedText;
}

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}