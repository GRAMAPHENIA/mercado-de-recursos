import { Size } from "@/interfaces";
import clsx from 'clsx';

interface Props {
  selectedSize: Size;
  availableSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className="my-5">
      <h3>Tallas disponibles</h3>
      <div className="flex">
        {availableSizes.map((size) => (
          <button key={size} className={
            clsx(
                "mx-2 hover:underline underline-offset-4 text-lg",
                {
                    'underline underline-offset-4' : size===selectedSize
                }
            )
          } >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
