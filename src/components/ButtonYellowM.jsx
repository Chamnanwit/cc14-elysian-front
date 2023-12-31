export default function ButtonYellowM({ children }) {
  return (
    <button className="  w-fit mt-10 px-7 py-2 rounded-full bg-c-yellow1 font-semibold transition-all hover:bg-c-yellow2 hover:scale-105 active:scale-95 active:bg-c-yellow3">
      {children}
    </button>
  );
}
