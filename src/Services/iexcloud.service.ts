import * as dotenv from "dotenv";

import axios from "axios";

const baseURL = "https://cloud.iexapis.com/";
const sandboxURL = "https://sandbox.iexapis.com/";

// const baseSSEURL = "https://cloud.sse.iexapis.com/";

dotenv.config();

const pk = process.env.IEXCLOUD_PUBLIC_KEY;
const apiversion = process.env.IEXCLOUD_API_VERSION;

const prefix = () => {
  return pk && pk[0] === "T" ? sandboxURL : baseURL;
};


export const iexApiRequest = async <T>(
  endpoint: string,
  params = {}
): Promise<T> => {
  try {
    const { data } = await axios.get<T>(`${prefix()}${apiversion}${endpoint}`, {
      params: {
        ...params,
        token: pk,
      },
    });

    return data as T;
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error);
    throw error;
  }
};

export interface KVP {
  [k: string]: any;
}

export class DynamicObject implements KVP {
  [k: string]: any;

  constructor(theObject: { [x: string]: any }) {
    for (const key of Object.keys(theObject)) {
      this[key] = theObject[key];
    }
  }
}
