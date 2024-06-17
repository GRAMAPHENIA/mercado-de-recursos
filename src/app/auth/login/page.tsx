import Link from "next/link";

import { titleFont } from "@/config/fonts";

export default function () {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} text-4xl mb-10 text-center font-thin`}>
        INGRESAR
      </h1>

      <div className="flex flex-col">
        <label htmlFor="email">Correo electrónico</label>
        <input
          className="px-5 py-2 border border-stone-300 focus:outline-none focus:border-stone-400 bg-gray-200 rounded mb-5"
          type="email"
        />

        <label htmlFor="email">Contraseña</label>
        <input
          className="px-5 py-2 border border-stone-300 focus:outline-none focus:border-stone-400 bg-gray-200 rounded mb-5"
          type="email"
        />

        <button className="btn-primary">Ingresar</button>

        {/* divisor line */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link href="/auth/new-account" className="btn-new text-center">
          Crear una nueva cuenta
        </Link>
      </div>
    </div>
  );
}
