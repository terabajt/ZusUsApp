import { Company } from "./company";

export interface Company_item {
  id: number;
  company: Company;
  billing_month: string;
  billing_date: string;
  billing_zus: number;
  billing_vat: number;
  billing_us: number;
  billing_worker: number;
}
