import { iexApiRequest } from "./iexcloud.service";
import { Quote } from "./Quote.service";

export type ListType =
  | "mostactive"
  | "gainers"
  | "losers"
  | "iexvolume"
  | "iexpercent"
  | "infocus";

export const list = async (
  listType: ListType = "mostactive"
): Promise<Quote[]> => {
  return await iexApiRequest<Quote[]>(`/stock/market/list/${listType}`);
};
