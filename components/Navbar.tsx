"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-[30px] py-[15px] bg-transparent flex items-center justify-between transition-all duration-300">
      <Link href="/">
        <Image src="/font-01.svg" alt="Audiobites Brand" width={100} height={50} priority />
      </Link>

      <ul className="flex items-center gap-6 m-0 p-0 list-none">
        <li><Link href="/#page-general" className="text-white font-elsie text-[18px] hover:text-[#C4AE45] transition-colors duration-300 no-underline">General</Link></li>
        <li><Link href="/team" className="text-white font-elsie text-[18px] hover:text-[#C4AE45] transition-colors duration-300 no-underline">Team</Link></li>
        <li><Link href="/overview" className="text-white font-elsie text-[18px] hover:text-[#C4AE45] transition-colors duration-300 no-underline">Overview</Link></li>
        <li><Link href="/menu" className="text-white font-elsie text-[18px] hover:text-[#C4AE45] transition-colors duration-300 no-underline">Menu</Link></li>
        <li><button onClick={() => alert("Please place an order first")} className="text-white font-elsie text-[18px] hover:text-[#C4AE45] transition-colors duration-300 no-underline bg-transparent border-none cursor-pointer">Checkout</button></li>
        <li><Link href="/payment#events" className="text-white font-elsie text-[18px] hover:text-[#C4AE45] transition-colors duration-300 no-underline">Event</Link></li>
        <li><Link href="/review" className="text-white font-elsie text-[18px] hover:text-[#C4AE45] transition-colors duration-300 no-underline">Review</Link></li>
        <li><Link href="/review#questionaire" className="text-white font-elsie text-[18px] hover:text-[#C4AE45] transition-colors duration-300 no-underline">Contact</Link></li>
      </ul>
    </nav>
  );
}
