import { iexApiRequest } from "./iexcloud.service";

export const logoURL = async (symbol: string): Promise<Logo> => {
  return await iexApiRequest<Logo>(`/stock/${symbol}/logo`);
};

export interface Logo {
  url: string;
}