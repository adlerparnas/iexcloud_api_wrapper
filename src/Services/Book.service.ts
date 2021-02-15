import { iexApiRequest } from "./iexcloud.service";
import { Quote } from "./Quote.service";

export const book = async (symbol: string): Promise<Book> => {
  return await iexApiRequest<Book>(`/stock/${symbol}/book`);
};

export interface BidOrAsk {
  price: number;
  size: number;
  timestamp: number;
}

export interface Trade {
  price: number;
  size: number;
  tradeId: number;
  isISO: boolean;
  isOddLot: boolean;
  isOutsideRegularHours: boolean;
  isSinglePriceCross: boolean;
  isTradeThroughExempt: boolean;
  timestamp: number;
}

export interface SystemEvent {
  systemEvent: string;
  timestamp: number;
}

export interface Book {
  quote: Quote;
  bids: BidOrAsk[];
  asks: BidOrAsk[];
  trades: Trade[];
  systemEvent: SystemEvent;
}
