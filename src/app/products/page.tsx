import { getProductsList } from "@/api/products";
import { ProductsList } from "@/ui/molecules/ProductsList";

export default async function Products() {
	const products = await getProductsList();

	return (
		<main className="">
			<section>
				<ProductsList products={products} />
			</section>
		</main>
	);
}
