import Link from "next/link";
import Image from "next/image";

import {redirect} from "next/navigation";

import { initialData } from "@/seed/seed";

import { Title } from "@/components/title/Title";
import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function () {

  // redirect("/empty");

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}

          <div className="flex flex-col mt-5">
            <span className="text-xl"> Agregar más items</span>
            <Link href="/" className="underline underline-offset-2 mb-6">
              Continúa comprando
            </Link>

            {/* Items */}

            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  alt={product.title}
                  className="mr-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <p className="mb-2">$ {product.price}</p>
                  <QuantitySelector quantity={1} />
                  <button className="underline underline-offset-2 mt-3">
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout - Resumen de orden */}

          <div className="bg-white rounded-xl shadow-xl p-7 h-[300px]">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No.Productos</span>
              <span className="text-right">artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl ">Total</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <Link
                href="/checkout/address"
                className="flex btn-primary justify-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
