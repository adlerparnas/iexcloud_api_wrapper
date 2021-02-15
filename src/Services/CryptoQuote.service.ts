import { iexApiRequest, KVP } from "./iexcloud.service";
import { Quote as CryptoQuote } from "./Quote.service";

const cryptoQuote = async (symbol: string): Promise<CryptoQuote> => {
  return await iexApiRequest<CryptoQuote>(`/crypto/${symbol}/quote`);
};

export { CryptoQuote, cryptoQuote };
