import Image from "next/image";
import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>HOME</h1>
      <h1 className={`${titleFont.className} font-semibold`}>App</h1>
    </div>
  );
}
