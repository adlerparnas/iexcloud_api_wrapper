import { iexApiRequest } from "./iexcloud.service";

export const marketVolume = async (): Promise<MarketVolume[]> => {
  return await iexApiRequest<MarketVolume[]>("/market");
};

export interface MarketVolume {
  mic: string;
  tapeId: string;
  venueName: string;
  volume: number;
  tapeA: number;
  tapeB: number;
  tapeC: number;
  marketPercent: number;
  lastUpdated: number;
}