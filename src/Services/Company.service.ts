import { iexApiRequest } from "./iexcloud.service";

export const company = async (symbol: string): Promise<Company> => {
  return await iexApiRequest<Company>(`/stock/${symbol}/company`);
};

export interface Company {
  symbol: string;
  companyName: string;
  CEO: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  issueType: string;
  sector: string;
  securityName: string | null;
  tags: string[];
  employees: number | null;
}