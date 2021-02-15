import { iexApiRequest } from "./iexcloud.service";

export type SentimentType = "daily" | "minute";

export const socialSentiment = async (
  symbol: string,
  type: SentimentType = "daily",
  date: string = ""
): Promise<null | SocialSentiment | SocialSentiment[]> => {
  let endpoint = `/stock/${symbol}/sentiment/${type}`;
  if (date) {
    endpoint = endpoint + "/" + date.replace(/-/g, "");
  }

  if (type.includes("daily")) {
    return await iexApiRequest<SocialSentiment>(endpoint);
  }

  return await iexApiRequest<SocialSentiment[]>(endpoint);
};

export interface SocialSentiment {
  symbol: string;
  date: string;
  minute: string | null;
  sentiment: number;
  totalScores: number;
  positive: number;
  negative: number;
}