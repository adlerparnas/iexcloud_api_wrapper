import { iexApiRequest, KVP } from "./iexaccount.service";

type UsageType =
  | "messages"
  | "rules"
  | "rule-records"
  | "alerts"
  | "alert-records";

export const accountUsage = async (type: UsageType): Promise<AccountUsage> => {
  return iexApiRequest<AccountUsage>(`/account/usage/${type}`);
};

export interface AccountUsage {
    monthlyUsage: number;
    monthlyPayAsYouGo: number;
    dailyUsage: KVP<number>,
    tokenUsage: KVP<number>,
    keyUsage: KVP<number>
}