import { ethers } from "ethers";
import { initState } from "./reducer";

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
    //Set context to init
  } catch (err: any) {
    setError(err.message);
  }
};
