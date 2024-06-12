import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { Title } from "@/components/title/Title";
import { ValidCategories } from "@/interfaces/product.interface";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

export default function ({ params }: Props) {
  const { id } = params;

  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };

  // if (id === "personajes") {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Artículos de ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
