"use client";

import Link from "next/link";
import { titleFont } from "@/config/fonts";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { useUIStore } from "@/store/ui/ui-store";

export const TopMenu = () => {
  const openSideMenu = useUIStore(state => state.openSideMenu);

  return (
    <nav className="flex px-5 justify-between items-center w-full py-2">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            GRAMAPHENICOS
          </span>
          <span> | Tienda</span>
        </Link>
      </div>

      {/* Center Menu */}

      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-stone-100"
          href="/category/materiales"
        >
          Materiales
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-stone-100"
          href="/category/modelos"
        >
          Modelos
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-stone-100"
          href="/category/personajes"
        >
          Personajes
        </Link>
      </div>

      {/* Search, cart, Menu */}
      <div className="flex items-center">
        <Link className="mx-2" href="/search">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link className="mx-2" href="/cart">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-stone-500/80 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button onClick={openSideMenu} className="m-2 p-2 rounded-md transition-all hover:bg-stone-100">
          Menú
        </button>
      </div>
    </nav>
  );
};
