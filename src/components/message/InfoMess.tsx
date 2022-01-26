import styles from "./style.module.scss";

const InfoMess = (props: any) => (
  <div
    className={`border px-4 py-3 rounded relative text-center ${styles.info_mess}`}
    role="alert"
  >
    <strong className="font-bold">{props.title}</strong>
    <span className="block sm:inline">{props.description}</span>
  </div>
);

export default InfoMess;
