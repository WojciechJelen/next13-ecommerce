import { getProductById } from "@/api/products";

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<main className="">
			<section>{JSON.stringify(product)}</section>
		</main>
	);
}
