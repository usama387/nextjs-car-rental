import Carousels from "@/components/Carousels";
import Explore from "@/components/Explore";
import SubFooter from "@/components/SubFooter";

export default function Home() {
  return (
    <div className="">
      <Carousels />
      <div className="relative">
        <Explore />
        <SubFooter />
      </div>
    </div>
  );
}
