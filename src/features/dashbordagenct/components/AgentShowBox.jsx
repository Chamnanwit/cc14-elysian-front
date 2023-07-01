export default function AgentShowBox({ icon, title, number }) {
  return (
    <div className="bg-c-green2 w-[200px] h-[200px] flex flex-col justify-center items-center gap-2  text-c-gray3">
      <div className="text-[50pt] ">{icon}</div>
      <div>{title}</div>
      <div className=" text-2xl">{number}</div>
    </div>
  );
}
