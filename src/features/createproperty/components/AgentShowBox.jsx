export default function AgentShowBox({ icon, title, number }) {
  return (
    <div className=" w-[200px] h-10 pl-3 border border-c-green2  flex rounded-lg justify-start items-center gap-2  text-c-gray3">
      <div className="text-[20pt] ">{icon}</div>
      <div className="text-sm">{title}</div>
      <div className=" text-sm"> {number}</div>
    </div>
  );
}
