import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const SuccessMess = (props: any) => (
  <div
    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center"
    role="alert"
  >
    <div className="font-bold">
      Connected&nbsp;&nbsp;
      <Link to="/transaction">
        <span className={styles.span_link}>Send ETH</span>
      </Link>
    </div>
    <span className="block sm:inline">{props.mess}</span>
  </div>
);

export default SuccessMess;
