import { getProductsList, getProductsGQL } from "@/api/products";
import { ProductsList } from "@/ui/molecules/ProductsList";

export default async function Products({ params }: { params: { pageNumber: string } }) {
	const products = await getProductsList({ offset: Number(params.pageNumber) * 8 });

	// TODO: remove later
	const productsGQL = await getProductsGQL();

	return (
		<main>
			<section>
				<div>{JSON.stringify(productsGQL)}</div>
				<ProductsList products={products} currentPage={Number(params.pageNumber)} />
			</section>
		</main>
	);
}
