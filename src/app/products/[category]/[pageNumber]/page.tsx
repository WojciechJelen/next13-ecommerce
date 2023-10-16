import { getProductsByCategory } from "@/api/products";
import { ProductsList } from "@/ui/molecules/ProductsList";

export default async function Products({
	params,
}: {
	params: { pageNumber: string; category: string };
}) {
	const products = await getProductsByCategory(params.category);

	if (!products) {
		return <div>loading...</div>;
	}

	return (
		<main>
			<section>
				<ProductsList
					products={products}
					category={params.category}
					currentPage={Number(params.pageNumber)}
				/>
			</section>
		</main>
	);
}

// import { getProductsList } from "@/api/products";
// import { ProductsList } from "@/ui/molecules/ProductsList";

// export default async function Products({
// 	params,
// }: {
// 	params: { pageNumber: string; category: string };
// }) {
// 	const products = await getProductsList();

// 	console.log("###params", params);

// 	return (
// 		<main>
// 			<section>
// 				<ProductsList products={products} currentPage={Number(params.pageNumber)} />
// 			</section>
// 		</main>
// 	);
// }
