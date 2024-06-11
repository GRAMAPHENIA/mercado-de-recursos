import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {
  const { id } = params;

  if (id === "personajes") {
    notFound();
  }

  return (
    <div>
      <h1>CATEGORY PAGE {id}</h1>
    </div>
  );
}
