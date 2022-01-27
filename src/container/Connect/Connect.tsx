import { Card, Avatar } from "antd";
import { BigNumber, ethers } from "ethers";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.scss";
import ErrorMess from "components/message/ErrorMess";
import { connectwallet } from "../../business/connectwallet";
import { disconnectwallet } from "../../business/disconnectwallet";
import { useEffect, useState } from "react";
import SuccessMess from "components/message/SuccessMess";
import { CopyOutlined } from "@ant-design/icons";
import { trimText } from "static/utils/trimText";
import { UPDATE_WALLET } from "data/Action";
import { walletType } from "application/context/reducer";

const { Meta } = Card;

const Connect = () => {
  const dispatch = useDispatch();
  const wallet = useSelector(
    (state: any) => state.globalState.wallet
  ) as walletType;

  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(BigNumber.from(0));
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("use metamask wallet");

  const [color, setColor] = useState("black");

  useEffect(() => {
    setAddress(wallet.address);
    setBalance(wallet.credit);
    setStatus(wallet.connected);
  }, []);

  useEffect(() => {
    dispatch({
      type: UPDATE_WALLET,
      wallet: {
        address: address,
        credit: balance,
        connected: status,
      } as walletType,
    });
  }, [dispatch, status]);

  return (
    <div className={`w-full max-w-xs ${styles.container}`}>
      <Card loading={!status}>
        <Meta
          className={styles.body_layout}
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={
            <>
              <span className={styles.address_text}>
                {trimText(address.toString(), 22)}&nbsp;
              </span>
              <CopyToClipboard text={address.toString()}>
                <CopyOutlined
                  style={{ display: "inline-block", color: color }}
                  onMouseDown={() => setColor("orange")}
                  onMouseUp={() => setColor("black")}
                />
              </CopyToClipboard>
            </>
          }
          description={"Balance in ETH: " + ethers.utils.formatEther(balance)}
        />
      </Card>
      {status ? (
        <SuccessMess />
      ) : (
        <ErrorMess title={"Not connected ! "} mess={error} />
      )}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4"></div>

        <div className="flex items-center justify-between">
          <a
            target={"_blank"}
            rel="noreferrer"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
          >
            Metamask
          </a>
          {status ? (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() =>
                disconnectwallet(setAddress, setBalance, setStatus, setError)
              }
            >
              Disconnect
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() =>
                connectwallet(setAddress, setBalance, setStatus, setError)
              }
            >
              Connect
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Connect;
function dispatch(arg0: { type: any; fontFamily: any }) {
  throw new Error("Function not implemented.");
}
