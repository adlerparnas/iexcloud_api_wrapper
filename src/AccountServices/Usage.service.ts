import { iexApiRequest, KVP } from "./iexaccount.service";

type UsageType =
  | "messages"
  | "rules"
  | "rule-records"
  | "alerts"
  | "alert-records";

export const accountUsage = async (type: UsageType): Promise<IEXAccountUsage> => {
  return iexApiRequest<IEXAccountUsage>(`/account/usage/${type}`);
};

export interface IEXAccountUsage {
    monthlyUsage: number;
    monthlyPayAsYouGo: number;
    dailyUsage: KVP<number>,
    tokenUsage: KVP<number>,
    keyUsage: KVP<number>
}