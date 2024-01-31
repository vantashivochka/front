import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import NavbarMobile from "./navbar-mobile";
import { MENU } from "@/config/menu";

const Navbar: React.FC = () => {
  return (
    <MaxWidthWrapper>
      <header>
        <div className="py-4 px-2 flex justify-between items-center border-b border-gray-200">
          <div className="flex items-center gap-2 xs:gap-4 max-w-xs">
            <Link href="/" className="block relative h-16 w-20 xs:w-28">
              <Image
                src={logo}
                fill
                alt="Вантажівочка логотип"
              />
            </Link>
            <div className="flex flex-col gap-0.5">
              <span className="font-bold uppercase">Вантажівочка</span>
              <span className="hidden xs:inline text-sm text-muted-foreground">
                Грузоперевезення та вивіз сміття у м. Київ
              </span>
            </div>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-5">
              {MENU.map((item) => (
                <li
                  key={item.id}
                  className="text-slate-950 font-semibold text-lg hover:underline hover:text-muted-foreground transition-all underline-offset-8"
                >
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <NavbarMobile />
        </div>
      </header>
    </MaxWidthWrapper>
  );
};

export default Navbar;
