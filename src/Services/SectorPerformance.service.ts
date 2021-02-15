import { iexApiRequest } from "./iexcloud.service";

export const sectorPerformance = async (): Promise<SectorPerformance[]> => {
  return await iexApiRequest<SectorPerformance[]>("/stock/market/sector-performance");
};

export interface SectorPerformance {
  type: string;
  name: string;
  performance: number;
  lastUpdated: number;
}
