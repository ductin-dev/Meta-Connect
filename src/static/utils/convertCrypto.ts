import { COINGECKO_API } from "../../data/Variables";
import axios from "axios";
import { message } from "antd";

export const convertCrypto = async (
  amount: number,
  from: string,
  to: string,
  setUSDBanlance: any
) => {
  let result = 0;
  await axios
    .get(COINGECKO_API, {
      params: {
        ids: from,
        vs_currencies: to,
      },
    })
    .then((res: any) => {
      result = res.data.ethereum.usd * amount;
    })
    .catch((err) => {
      message.warning(err);
    });
  return result;
};
