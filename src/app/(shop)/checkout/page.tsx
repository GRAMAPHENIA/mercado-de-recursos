import Image from "next/image";
import Link from "next/link";

import { initialData } from "@/seed/seed";

import { Title } from "@/components/title/Title";
import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function () {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}

          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/cart" className="underline underline-offset-2 mb-6">
              Editar carrito
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
                  <p className="mb-2">$ {product.price} X 3</p>
                  <p className="text-stone-700 font-bold">
                    Subtotal: ${product.price * 3}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout - Resumen de orden */}

          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Jhon Doe</p>
              <p>Ruta 40</p>
              <p>Provincia de Chubút</p>
              <p>CP. 1234</p>
              <p>11 4567 8905</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-stone-300" />

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

              <span className="mt-5 text-2xl text-stone-700 font-bold">
                Total
              </span>
              <span className="mt-5 text-2xl text-stone-700 font-bold text-right">
                $ 100
              </span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                {/* Disclaimer */}
                <span className="text-xs">
                  Al hacer click en "Colocar orden", aceptas nuestros{" "}
                  <a href="#" className="underline">
                    términos y condiciones y políticas de privacidad.
                  </a>
                </span>
              </p>

              <Link
                href="/orders/123"
                className="flex btn-secondary justify-center"
              >
                Colocar orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
