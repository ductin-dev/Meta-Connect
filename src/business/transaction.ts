import { ethers } from "ethers";
import { isNumber, isEmpty } from "../static/utils/validation";

const validation = (address: string, amount: string) => {
  if (!isNumber(Number.parseFloat(amount), 0, Number.MAX_VALUE))
    throw new Error("Please type a valid amount");
  if (isEmpty(address)) throw new Error("Please type a valid address");
};

export const transaction = async (
  address: any,
  amount: any,
  setError: any,
  setTxs: any
) => {
  try {
    validation(address, amount);
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(address);

    const tx = await signer.sendTransaction({
      to: address,
      value: ethers.utils.parseEther(amount),
    });

    setTxs([tx]);
  } catch (err: any) {
    setError(err.message);
  }
};
