export interface Lactation {
  lactationType: lactationType;
  amount: number;
  recordTime: string;
}

export interface LactationOption {
  title: string;
  lactation: lactationType;
}

export type lactationType = 'breastMilk' | 'MotherBottleMilk' | 'PowderedBottleMilk';
