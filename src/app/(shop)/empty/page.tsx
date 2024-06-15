import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";

export default function () {
  return (
    <div className="flex justify-center items-center h-[650px]">
      <IoCartOutline size={100} className="mr-10 text-stone-500" />

      <div className="flex flex-col items-left">
        <h1 className="text-2xl font-light">
          Tu carrito de compras esta vacío
        </h1>

        <Link href="/" className="text-stone-500 mt-2 text-xl text-center btn-primary">
          Regresar
        </Link>
      </div>
    </div>
  );
}
