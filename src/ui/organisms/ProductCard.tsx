import { type ProductType } from "@/types";
import { ProductCardDescription } from "@/ui/atoms/ProductCardDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { formatPrice } from "@/utils/formatPrice";

type PropsType = {
	product: ProductType;
};

export function ProductCard({ product }: PropsType) {
	const price = formatPrice(product.price / 100);

	return (
		<li key={product.id} className="group relative">
			<ProductCoverImage imageAlt={product.imageAlt} imageSrc={product.imageSrc} />
			<ProductCardDescription
				name={product.name}
				color={product.color}
				price={price}
				id={product.id}
			/>
		</li>
	);
}
