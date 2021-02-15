import { iexApiRequest } from "./iexcloud.service";

export const news = async (
  symbol: string,
  lastN: number = 10
): Promise<NewsItem[]> => {
  return await iexApiRequest<NewsItem[]>(
    `/stock/${symbol}/news/last/${lastN}`
  );
};

export interface NewsItem {
  datetime: number;
  headline: string;
  source: string;
  url: string;
  summary: string;
  related: string;
  image: string;
  lang: string;
  hasPaywall: boolean;
}