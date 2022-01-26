import { ethers } from "ethers";
import { NETWORK } from "data/Variables";
import { getAddress } from "ethers/lib/utils";

export const searchwallet = async (
  address: any,
  setBalance: any,
  setError: any,
  setLoading: any
) => {
  try {
    getAddress(address);
    const provider = ethers.getDefaultProvider(NETWORK);
    provider.getBalance(address).then((balance) => {
      setBalance(balance);
      setLoading(false);
    });
  } catch (err: any) {
    setError(err.message);
    setLoading(false);
  }
};
