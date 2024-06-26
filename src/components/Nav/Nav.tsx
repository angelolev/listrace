"use client";
import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="py-[10px] bg-white sticky z-30 top-0 shadow-nav">
      <div className="container mx-auto flex flex-wrap justify-start gap-2 items-center p-2 max-w-6xl lg:justify-between relative">
        <div className="burguer relative border-primary-500 border-[1px] p-1 rounded-md lg:hidden">
          <Image
            src={isOpen ? "/images/close.svg" : "/images/menu.svg"}
            alt="Menu"
            width={24}
            height={24}
            onClick={toggleMenu}
          />
        </div>
        <div className="logo">
          <a className="text-[#1b1e20] font-bold text-[20px]" href="/">
            List <span className="text-primary-500">Race</span>
          </a>
        </div>
        <div
          className={
            isOpen
              ? "active animacion w-full absolute top-[60px] left-0 bg-white px-2"
              : `hidden lg:flex`
          }
        >
          <ul className="flex flex-col gap-6 pt-4 pb-4 md:gap-10 lg:flex-row">
            <li>
              <a
                className="text-[#859098] uppercase font-medium hover:text-primary-500"
                href=""
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-[#859098] uppercase font-medium hover:text-primary-500"
                href=""
              >
                How it works
              </a>
            </li>
            <li>
              <a
                className="text-[#859098] uppercase font-medium hover:text-primary-500"
                href=""
              >
                Explore
              </a>
            </li>
            <li>
              <a
                className="text-[#859098] uppercase font-medium hover:text-primary-500"
                href=""
              >
                Review
              </a>
            </li>
            <li>
              <a
                className="text-[#859098] uppercase font-medium hover:text-primary-500"
                href=""
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="text-[#859098] uppercase font-medium hover:text-primary-500"
                href=""
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
