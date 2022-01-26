import { ethers } from "ethers";

export const transaction = async (
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

    /*ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });

    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);*/
  } catch (err: any) {
    setError(err.message);
  }
};
