import { iexApiRequest } from "./iexcloud.service";

export const recommendationTrends = async (
  symbol: string
): Promise<Recommendation[]> => {
  return await iexApiRequest<Recommendation[]>(
    `/stock/${symbol}/recommendation-trends`
  );
};

export interface Recommendation {
  consensusEndDate: Date;
  consensusStartDate: Date;
  corporateActionsAppliedDate: Date;
  ratingBuy: number;
  ratingHold: number;
  ratingNone: number;
  ratingOverweight: number;
  ratingScaleMark: number;
  ratingSell: number;
  ratingUnderweight: number;
  symbol: string;
}