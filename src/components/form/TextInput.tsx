import { FC } from "react";

const TextInput: FC<any> = ({
  title = "Title",
  placeholder = "Placeholder",
  name = "",
  value = "",
  error = false,
  errorMess = "",
  onChange = () => {},
}) => {
  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        {title}
      </label>
      <input
        className={`shadow appearance-none border ${
          error ? `border-red-500` : ``
        } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-xs italic">{errorMess}</p>}
    </>
  );
};
export default TextInput;
