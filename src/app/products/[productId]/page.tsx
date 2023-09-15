import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";

export const generateStaticParams = async () => {
	const productsIds = (await getProductsList()).map((product) => ({
		productId: product.id,
	}));
	return productsIds.slice(0, 2);
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: `${product.name} - Ecommerce Next`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Ecommerce Next`,
			description: product.description,
			images: [
				{
					url: product.imageSrc,
					// TODO: add width and height
					width: 800,
					height: 600,
					alt: product.name,
				},
			],
		},
	};
};

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<main className="">
			<section>{JSON.stringify(product)}</section>
		</main>
	);
}
