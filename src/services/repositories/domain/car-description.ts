export interface CarDescription {
  vin: string;
  color: string;
  year: number;
  model: string;
  make : string
  created_at: Date | null;
  updated_at: Date | null;
}