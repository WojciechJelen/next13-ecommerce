import { type ProductType } from "@/types";
import { ProductCardDescription } from "@/ui/atoms/ProductCardDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";

type PropsType = {
	product: ProductType;
};

export function ProductCard({ product }: PropsType) {
	const price = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
		product.price,
	);

	return (
		<div key={product.id} className="group relative">
			<ProductCoverImage imageAlt={product.imageAlt} imageSrc={product.imageSrc} />
			<ProductCardDescription
				name={product.name}
				color={product.color}
				price={price}
				href={product.href}
			/>
		</div>
	);
}
