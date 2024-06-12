import { Title } from "@/components/title/Title";
import { initialData } from "@/seed/seed";
import { ProdcutGrid } from "@/components/products/product-grid/ProdcutGrid";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />

      <ProdcutGrid products={products} />
    </>
  );
}
