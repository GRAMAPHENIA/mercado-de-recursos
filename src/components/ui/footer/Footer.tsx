import { titleFont } from "@/config/fonts";

import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link href="/">
        <span className={`${titleFont.classNamne} antialised font-bold`}>
          Gramaphenia{" "}
        </span>
        <span>| tienda </span>
        <span>©{new Date().getFullYear()}</span>
      </Link>

      <Link href="/" className="mx-3">
        Privacidad & Legal
      </Link>

      <Link href="/" className="mx-3">
        Ubicaciones
      </Link>
    </div>
  );
};
