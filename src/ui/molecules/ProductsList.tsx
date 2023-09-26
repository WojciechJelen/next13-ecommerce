import { ProductCard } from "../organisms/ProductCard";
import { Pagination } from "./Pagination";
import { type SingleProductType } from "@/types";

type PropsType = {
	products: NonNullable<SingleProductType>[];
	currentPage: number;
};

export function ProductsList({ products, currentPage = 1 }: PropsType) {
	return (
		<div className="bg-white" data-testid="products-list">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">Products list</h2>

				<ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{products.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
				</ul>
				<Pagination totalPages={8} currentPage={currentPage} className="mt-10" />
			</div>
		</div>
	);
}
