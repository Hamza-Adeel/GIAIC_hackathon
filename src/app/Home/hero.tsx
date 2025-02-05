import Image from "next/image";
import Hero_plate from "@/app/assets/hero_plate.png";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="w-full flex justify-center items-center ">
      <div className="sm:w-full md:w-[100%] sm:p-5 sm:h--auto md:h-[500px] flex sm:flex-row sm:justify-start md:justify-center sm:items-start md:items-center  bg-black w-1390">
        <div className="sm:w-full md:w-[50%] p-4 ">
          <h3 className="text-[#FF9F0D] font-sans">Its Quick & Amusing</h3>

          <h1 className="text-white font-bold font-bolf sm:text-md md:text-3xl lg:text-5xl flex flex-row mt-2">
            <div className="text-[#FF9F0D]">Th</div>e Art of Speed
          </h1>
          <h2 className="text-white font-bolf sm:text-md md:text-3xl lg:text-5xl pt-4">
            Food Quality
          </h2>
          {/* timer */}
          <div className="flex sm:flex-wrap sm:justify-start md:justify-start pt-5 pb-4 gap-4">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              facere voluptatum tempore massa conque
            </p>
          </div>
          <Link href="/menu">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
              See Menu
            </button>
          </div>
          </Link>
        </div>
        {/* image */}
        <div className="sm-w-full md:w-[30%] lg:w-[30%] pl-7 justify-center items-center flex flex-row">
          <Image
            src={Hero_plate}
            alt="hero_plate"
            className="w-50 h-auto shadow-md "
          />
        </div>
      </div>
    </main>
  );
}
