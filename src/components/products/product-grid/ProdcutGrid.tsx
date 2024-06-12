import { Product } from "@/interfaces/product.interface";

interface Props {
  products: Product[];
}

export const ProdcutGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
      {products.map((product) => (
        <span key={product.slug}>{product.title}</span>
      ))}
    </div>
  );
};
