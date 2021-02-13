import { iexApiRequest } from "./iexaccount.service";

export const accountMetadata = async (): Promise<IEXAccountMetaData> => {
  return await iexApiRequest<IEXAccountMetaData>(`/account/metadata`);
};

export interface IEXAccountMetaData {
  payAsYouGoEnabled: boolean;
  effectiveDate: number;
  endDateEffective: number;
  subscriptionTermType: string;
  tierName: string;
  messageLimit: number;
  messagesUsed: number;
}