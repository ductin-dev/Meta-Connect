import { ethers } from "ethers";
import { initState } from "../application/context/reducer";

export const disconnectwallet = async (
  setAddress: any,
  setBalance: any,
  setStatus: any,
  setError: any
) => {
  try {
    setAddress(initState.wallet.address);
    setBalance(initState.wallet.credit);
    setStatus(initState.wallet.connected);
  } catch (err: any) {
    setError(err.message);
  }
};
