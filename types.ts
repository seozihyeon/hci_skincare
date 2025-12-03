
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

export enum SkinProblem {
  Acne = 'Acne',
  Redness = 'Redness',
  DrynessDehydration = 'Dryness / Dehydration',
  Oiliness = 'Oiliness',
  Sensitivity = 'Sensitivity',
  UnevenTone = 'Uneven Tone',
  FineLinesWrinkles = 'Fine Lines / Wrinkles',
  LargePores = 'Large Pores',
}

export interface UserPreferences {
  skinType: SkinType;
  age: number;
  budget: number;
  delivery: DeliveryOption;
  ingredientsToAvoid: string;
  skinProblems: SkinProblem[];
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
  keyIngredients: LocalizedText[];
}

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}