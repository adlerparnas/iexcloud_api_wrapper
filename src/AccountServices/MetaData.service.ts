import { iexApiRequest } from "./iexaccount.service";

export const accountMetadata = async (): Promise<AccountMetaData> => {
  return await iexApiRequest<AccountMetaData>(`/account/metadata`);
};

export interface AccountMetaData {
  payAsYouGoEnabled: boolean;
  effectiveDate: number;
  endDateEffective: number;
  subscriptionTermType: string;
  tierName: string;
  messageLimit: number;
  messagesUsed: number;
}