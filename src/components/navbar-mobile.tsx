"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MENU } from "@/config/menu";

const NavbarMobile: React.FC = () => {
  const pathname = usePathname();

  React.useEffect(() => {}, [pathname]);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden rounded-sm">
          <Menu className="text-slate-900" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex items-center">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              width={60}
              height={60}
              alt="Вантажівочка логотип"
            />
            <div className="flex flex-col gap-0.5 max-w-xs w-full text-start">
              <span className="font-bold uppercase text-sm">Вантажівочка</span>
              <span className="text-xs font-medium text-muted-foreground">
                Грузоперевезення та вивіз сміття у м. Київ
              </span>
            </div>
          </div>
        </SheetHeader>
        <nav className="w-full mt-10">
          <ul className="flex flex-col items-start w-full gap-5">
            {MENU.map((item) => (
              <li
                key={item.id}
                className="text-slate-900 font-bold text-lg hover:underline hover:text-muted-foreground transition-all underline-offset-8"
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;