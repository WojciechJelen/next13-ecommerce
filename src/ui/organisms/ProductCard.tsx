import { type SingleProductType } from "@/types";
import { ProductCardDescription } from "@/ui/atoms/ProductCardDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { formatPrice } from "@/utils/formatPrice";

type PropsType = {
	product: NonNullable<SingleProductType>;
};

export function ProductCard({ product }: PropsType) {
	const price = formatPrice(product.price / 100);

	return (
		<li key={product.id} className="group relative">
			{/** TODO: fix images later */}
			<ProductCoverImage imageAlt={""} imageSrc={product.images[0]?.url ?? "#"} />
			<ProductCardDescription name={product.name} color={"white"} price={price} id={product.id} />
		</li>
	);
}
