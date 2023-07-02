import SponserRentCardSmallList from "../features/userProperties/components/SponserRentCardSmallList";
import { motion } from "framer-motion";

export default function SponserRentbar() {
  return (
    <div className=" py-5">
      <div className="flex justify-between px-10 pt-5">
        <div className="text-xl text-c-gray3">ห้องเช่าแนะนำ</div>
        <div className="text-sm text-c-gray2"> </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className=" flex w-full gap-5 px-10 py-5 overflow-auto"
      >
        <SponserRentCardSmallList />
      </motion.div>
    </div>
  );
}
