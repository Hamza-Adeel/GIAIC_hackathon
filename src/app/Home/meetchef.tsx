import React from "react";

import Image from "next/image";

import chef1 from "@/app/assets/chef1.png";
import chef2 from "@/app/assets/chef2.png";
import chef3 from "@/app/assets/chef3.png";
import chef4 from "@/app/assets/chef4.png";
import Link from "next/link";

 
function MeetShef() {
  return (
    <>
      <section className="bg-black md:px-[135px]   py-[50px]">

        <div className="flex flex-col justify-center items-center">
      <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
      Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          <Image src={chef1} alt="" className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer"/>
          <Image src={chef2} alt="" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={chef3} alt="" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={chef4} alt="" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
        </div>
        <Link href="/our-Chefs">
        <div className="flex justify-center items-center mt-[32px]">
            <button className="border-2 border-[#FF9F0D] text-[#FF9F0D] w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] hover:bg-[#FF9F0D] hover:text-white transition-colors duration-300">
                See More
            </button>
        </div>
        </Link>
      </section>
    </>
  );
}

export default MeetShef;