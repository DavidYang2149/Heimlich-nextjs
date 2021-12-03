export interface Lactation {
  lactationType: lactationType;
  amount: number;
  recordTime: string;
}

export type lactationType = 'breastMilk' | 'MotherBottleMilk' | 'PowderedBottleMilk';
