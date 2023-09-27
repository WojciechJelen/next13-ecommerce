import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, getProductsList } from "@/api/products";
import { ProductOverview } from "@/ui/organisms/ProductOverview/ProductOverview";

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

	if (!product) {
		return notFound();
	}

	return {
		title: `${product.name} - Ecommerce Next`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Ecommerce Next`,
			description: product.description,
			images: [
				{
					// FIXME: use different placeholder img
					url: product.images[0]?.url || "https://via.placeholder.com/800x600",
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
	if (!product) {
		return notFound();
	}

	return (
		<main>
			<ProductOverview product={product} />
		</main>
	);
}
