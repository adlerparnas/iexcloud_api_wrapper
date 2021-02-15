import { iexApiRequest } from "./iexcloud.service";

export const auction = async (symbol: string): Promise<Auction> => {
  return await iexApiRequest<Auction>("/deep/auction", {
    symbols: symbol,
  });
};

export interface Auction {
  auctionType: string;
  pairedShares: number;
  imbalanceShares: number;
  referencePrice: number;
  indicativePrice: number;
  auctionBookPrice: number;
  collarReferencePrice: number;
  lowerCollarPrice: number;
  upperCollarPrice: number;
  extensionNumber: number;
  startTime: string;
  lastUpdate: number;
}