import { ethers } from "ethers";

export const connectwallet = async (
  setAddress: any,
  setBalance: any,
  setStatus: any,
  setError: any
) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    signer.getAddress().then((address) => {
      setAddress(address);
      setStatus(address.length > 0);
      provider.getBalance(address).then((balance) => {
        setBalance(balance);
      });
    });
  } catch (err: any) {
    setError(err.message);
  }
};
