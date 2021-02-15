import { iexApiRequest } from "./iexcloud.service";

export const volumeByVenue = async (
  symbol: string
): Promise<VolumeByVenue[]> => {
  return await iexApiRequest<VolumeByVenue[]>(`/stock/${symbol}/volume-by-venue`);
};

export interface VolumeByVenue {
  symbol: string;
  volume: number;
  venue: string;
  venueName: string;
  date: string;
  marketPercent: number;
  avgMarketPercent: number;
}