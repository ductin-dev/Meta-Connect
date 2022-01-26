const ErrorMess = (props: any) => (
  <div
    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
    role="alert"
  >
    <strong className="font-bold">{props.title}</strong>
    <span className="block sm:inline">{props.mess}</span>
  </div>
);

export default ErrorMess;
