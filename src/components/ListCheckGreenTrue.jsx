import { BsCheckCircle } from "react-icons/bs";

export default function ListCheckGreenTrue({ children }) {
  return (
    <div className="flex gap-5 items-center text-c-gray3 text-xs">
      <span className=" text-c-green3 ">
        <BsCheckCircle />
      </span>
      {children}
    </div>
  );
}
