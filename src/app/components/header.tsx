import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <header className="w-full h-[50px] bg-black text-white flex justify-center items-center px-4">
        <Link href="/Home">
        <h2 className="text-[24px] font-bold">
          <span className="text-[#FF9F0D]">Food</span>Tuck
        </h2>
        </Link>
      </header>
    </>
  );
}

export default Header;
