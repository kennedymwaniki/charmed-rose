import Link from "next/link";
import React from "react";
import { HiHome } from "react-icons/hi2";
import { RiDrinksLine } from "react-icons/ri";
import { FaBowlRice } from "react-icons/fa6";
import { FcSalesPerformance } from "react-icons/fc";
import { GiMilkCarton } from "react-icons/gi";
import { TbReportMoney } from "react-icons/tb";

const SideNav = () => {
  return (
    <div className="bg-main-200 w-full min-h-screen">
      <ul className="p-3 gap-8 text-xl">
        <li className="flex items-center m-2 py-2 gap-3">
          <span className="text-blue-500">
            <HiHome />
          </span>
          <Link href="/" className="text-white">
            home
          </Link>
        </li>
        <li className="flex items-center gap-3 m-2 py-2">
          <FaBowlRice />
          <Link href="/rice" className="text-white">
            Rice
          </Link>
        </li>
        <li className="flex items-center gap-3 m-2 py-2 ">
          <RiDrinksLine />
          <Link href="/drinks" className="text-white">
            drinks
          </Link>
        </li>
        <li className="flex items-center gap-3 m-2 py-2">
          <FcSalesPerformance />
          <Link href="/sales" className="text-white">
            sales
          </Link>
        </li>
        <li className="flex items-center gap-3 m-2 py-2">
          <span className="text-cream-300">
            <GiMilkCarton />
          </span>
          <Link href="/sales" className="text-white">
            milk
          </Link>
        </li>
        <li className="flex items-center gap-3 m-2 py-2">
          <TbReportMoney />
          <Link href="/sales" className="text-white">
            Report
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
