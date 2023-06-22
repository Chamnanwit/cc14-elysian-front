import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import PackagePlan from "../layouts/PackagePlan";

export default function PackagePlanPage() {
  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div>
        <Navbar />
        <div className="py-20 text-center">
          <PackagePlan />
        </div>
      </div>
      <Footer />
    </div>
  );
}
