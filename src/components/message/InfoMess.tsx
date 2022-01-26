import styles from "./style.module.scss";

const InfoMess = (props: any) =>
  props.color === "green" ? (
    <div
      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center"
      role="alert"
    >
      <strong className="font-bold">{props.title}</strong>
      <span className="block sm:inline">{props.description}</span>
    </div>
  ) : (
    <div
      className={`border px-4 py-3 rounded relative text-center ${styles.info_mess}`}
      role="alert"
    >
      <strong className="font-bold">{props.title}</strong>
      <span className="block sm:inline">{props.description}</span>
    </div>
  );

export default InfoMess;
