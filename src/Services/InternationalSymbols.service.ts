import { DynamicObject, iexApiRequest } from "./iexcloud.service";

export const internationalSymbolsByExchange = async (exchange: string): Promise<IEXInternationalSymbol[]> => {
  return await iexApiRequest<IEXInternationalSymbolI[]>(`/ref-data/exchange/${exchange}/symbols`);
};

export const internationalSymbolsByRegion = async (region: string): Promise<IEXInternationalSymbol[]> => {
  return await iexApiRequest<IEXInternationalSymbolI[]>(`/ref-data/region/${region}/symbols`);
};

export interface IEXInternationalSymbolI {
  symbol: string;
  date: string;
  isEnabled: boolean;

  exchange: string;
  name: string;
  type: string;
  iexId: string;
  region: string;
  currency: string;
}

export class IEXInternationalSymbol extends DynamicObject {
  public symbol: string = "";
  public date: string = "";
  public isEnabled: boolean = true;
  public exchange: string = "";
  public name: string = "";
  public type: string = "";
  public iexId: string = "";
  public region: string = "";
  public currency: string = "";
}

