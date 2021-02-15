import { iexApiRequest } from "./iexcloud.service";
import { Quote } from "./Quote.service";

export type CollectionType = "sector" | "tag" | "list";

export const collection = async (
  collectionType: CollectionType,
  collectionName: string
): Promise<Quote[]> => {
  return await iexApiRequest<Quote[]>(
    `/stock/market/collection/${collectionType}`,
    {
      collectionName,
    }
  );
};
