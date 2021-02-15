import { iexApiRequest } from "./iexcloud.service";

export const internationalExchanges = async (): Promise<InternationalExchange[]> => {
  return await iexApiRequest<InternationalExchange[]>("/ref-data/exchanges");
};

export interface InternationalExchange {
  exchange: string;
  region: string;
  description: string;
  mic: string;
  exchangeSuffix: string;
}
