import Single_White from "../../static/image/4x6_Single_White.jpg";
import { Avatar } from "antd";
import styles from "./style.module.scss";

const About = () => {
  return (
    <div className="flex justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
      <div
        className={`bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs ${styles.card_body}`}
      >
        <Avatar src={Single_White} style={{ width: 80, height: 80 }} />
        <br></br>
        <br></br>
        <h1 className="text-lg text-gray-700"> Doan Duc Tin (Mr.Tin) </h1>
        <h3 className="text-sm text-gray-400 "> Full Stack Developer </h3>
        <p className="text-xs text-gray-400 mt-4">
          Most confident in algorithms, thinking, and solving problems. Besides,
          I could research and rapidly adopt new knowledge quickly to implement
          it in real situations
        </p>
      </div>
    </div>
  );
};

export default About;
