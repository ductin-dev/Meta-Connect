import img404 from "../../static/image/404.png";

const _404 = () => {
  return (
    <div
      className="container mx-auto flex justify-center"
      style={{ padding: "50px 0 50px 0" }}
    >
      <img
        alt="image404"
        className="object-contain justify-center"
        src={img404}
      ></img>
    </div>
  );
};

export default _404;
