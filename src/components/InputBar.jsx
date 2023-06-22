export default function InputBar({ children, value, onChange, name, style }) {
  return (
    <input
      type="text"
      name={name}
      placeholder={children}
      value={value}
      onChange={onChange}
      style={style}
      className="px-5 py-1 border-none text-lg rounded-full w-full ring-2 ring-c-gray1 outline-none focus:ring-c-blue1 focus:ring-2 opacity-100 bg-white hover:ring-2 hover:ring-c-green2 transition-all duration-200"
    />
  );
}
