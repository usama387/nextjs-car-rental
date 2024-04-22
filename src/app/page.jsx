import Carousels from "@/components/Carousels";
import Explore from "@/components/Explore";

export default function Home() {
  return (
    <div className="">
      <Carousels />
      <div className="relative">
        <Explore />
      </div>
    </div>
  );
}
