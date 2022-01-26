import { BigNumber, ethers } from "ethers";
import styles from "./style.module.scss";
import ErrorMess from "components/message/ErrorMess";
import { searchwallet } from "../../business/searchwallet";
import { useEffect, useState } from "react";
import InfoMess from "components/message/InfoMess";
import { Spin } from "antd";
import { isEmpty } from "../../static/utils/validation";
import SuccessMess from "components/message/SuccessMess";
import { convertCrypto } from "../../static/utils/convertCrypto";

const ViewWallet = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(BigNumber.from(0));
  const [USDBanlance, setUSDBanlance] = useState(0);
  const [error, setError] = useState("");

  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    convertCrypto(
      Number.parseFloat(ethers.utils.formatEther(balance)),
      "ethereum",
      "usd",
      setUSDBanlance
    ).then((result) => setUSDBanlance(result));
  }, [address, balance]);

  return (
    <div className={`w-full max-w-xs ${styles.container}`}>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="addresss"
          >
            Address (
            <a
              href="https://rinkeby.etherscan.io"
              target={"_blank"}
              rel="noreferrer"
            >
              Rinkeby
            </a>
            )
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="addresss"
            type="text"
            placeholder="Testnet Addresss Here"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button
          style={{ width: "100%" }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={
            !isEmpty(address)
              ? () => {
                  setError("");
                  setLoading(true);
                  setStatus(true);
                  searchwallet(address, setBalance, setError, setLoading);
                }
              : () => {
                  setStatus(true);
                  setError("Please type an address");
                }
          }
        >
          View wallet balance
        </button>
      </form>
      {status ? (
        error.length === 0 ? (
          <>
            <InfoMess
              title="Balance in ETH: "
              description={
                loading ? (
                  <Spin size="small" />
                ) : (
                  ethers.utils.formatEther(balance)
                )
              }
            />
            <br></br>
            <InfoMess
              color="green"
              title="Balance in USD: "
              description={loading ? <Spin size="small" /> : USDBanlance}
            />
          </>
        ) : (
          <ErrorMess mess={error} />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default ViewWallet;
