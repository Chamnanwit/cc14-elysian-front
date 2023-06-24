import createClasses from "../utils/create-classes";
export default function InputBar({
  children,
  value,
  onChange,
  name,
  style,
  isInvalid,
  disabled,
}) {
  const className = createClasses(
    `px-5 py-1 border-none text-lg rounded-full w-full ring-2 outline-none focus:ring-2 transition-all duration-200`,
    isInvalid
      ? "border-red-500 focus:ring-red-300"
      : "border-gray-300 focus:border-blue-500 focus:ring-blue-300 w-full",
    disabled ? "bg-gray-100" : "bg-white"
  );
  return (
    <div className="input-bar">
      <input
        type="text"
        name={name}
        placeholder={children}
        value={value}
        onChange={onChange}
        style={style}
        className={className}
        disabled={disabled}
      />
    </div>
  );
}
