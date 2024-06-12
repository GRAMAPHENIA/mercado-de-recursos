"use client";

import { IoCloseOutline, IoSearchOutline } from "react-icons/io5"; // Asegúrate de que el nombre del icono es correcto

export const SideBar = () => {
  return (
    <div>
      {/* Bacground black */}
      <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-70" />

      {/* Blur */}
      <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />

      {/* Sidemenu */}
      <nav
        // TAREA: efecto de slide
        className="fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300"
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => console.log("Clicked")} // Asegúrate de tener una función definida
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />

          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-stone-50 rounded pl-10 py-1 pr-1 border-b-2 text-xl border-stone-200 focus: outline-none focus:border-slate-400"
          />
        </div>
      </nav>
    </div>
  );
};
