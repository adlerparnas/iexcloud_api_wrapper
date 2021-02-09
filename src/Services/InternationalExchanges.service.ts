import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export const internationalExchanges = async (): Promise<InternationalExchange[]> => {
  const data: KVP[] = await iexApiRequest("/ref-data/exchanges");

  return data.map((o: KVP) => new InternationalExchange(o));
};

export interface IEXInternationalExchangeI {
  exchange: string;
  region: string;
  description: string;
  mic: string;
  exchangeSuffix: string;
}

export class InternationalExchange extends DynamicObject {
  public exchange: string = "";
  public region: string = "";
  public description: string = "";
  public mic: string = "";
  public exchangeSuffix: string = "";
}
