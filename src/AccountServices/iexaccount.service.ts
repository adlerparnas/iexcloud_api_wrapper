import * as dotenv from "dotenv";

import axios from "axios";

const baseURL = "https://cloud.iexapis.com/";

dotenv.config();

const sk = process.env.IEXCLOUD_SECRET_KEY;
const apiversion = process.env.IEXCLOUD_API_VERSION;

export const iexApiRequest = async <T = any> (
  endpoint: string,
  params = {}
): Promise<T> => {
  const { data } = await axios.get<T>(`${baseURL}${apiversion}${endpoint}`, {
    params: {
      ...params,
      token: sk,
    },
  });

  return data;
};

export interface KVP<T> {
  [k: string]: T;
}