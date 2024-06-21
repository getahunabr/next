import { Metadata } from "next";

interface Props {
  params: {
    productId: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 1000);
  });

  return {
    title: `Product Detail ${title}`,
    description: `Product Detail ${params.productId}`,
  };
}

const ProductDetail = ({ params }: Props) => {
  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {params.productId}</p>
    </div>
  );
};

export default ProductDetail;
