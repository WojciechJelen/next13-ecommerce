import { getProductsList } from "@/api/products";
import { ProductsList } from "@/ui/molecules/ProductsList";

export default async function Products({ params }: { params: { pageNumber: string } }) {
	const products = await getProductsList({ offset: Number(params.pageNumber) * 8 });

	return (
		<main>
			<section>
				<ProductsList products={products} currentPage={Number(params.pageNumber)} />
			</section>
		</main>
	);
}
