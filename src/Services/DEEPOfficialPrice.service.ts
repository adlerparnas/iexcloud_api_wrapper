import { iexApiRequest } from "./iexcloud.service";

type PriceType = "Open" | "Close";

export const officialPrice = async (
  symbol: string
): Promise<DEEPOfficialPrice> => {
  return await iexApiRequest<DEEPOfficialPrice>("/deep/official-price", {
    symbols: symbol,
  });
};

export interface DEEPOfficialPrice {
  symbol: string;
  priceType: PriceType;
  price: number;
  timestamp: number;
}