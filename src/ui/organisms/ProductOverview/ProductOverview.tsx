import { useMemo } from "react";
import { type SingleProductType } from "@/types";
import { ProductOverviewInfoSection } from "@/ui/molecules/ProductOverviewInfoSection";
import { formatPrice } from "@/utils/formatPrice";
import { ProductOverviewForm } from "@/ui/molecules/ProductOverviewForm";
import { ProductOverviewImage } from "@/ui/atoms/ProductOverviewImage/ProductOverviewImage";

type PropsType = {
	product: NonNullable<SingleProductType>;
};

export function ProductOverview({ product }: PropsType) {
	const { price, description, reviews, images } = product;
	const productPrice = useMemo(() => formatPrice(price), [price]);

	const calculateProductRating = () => {
		const ratingsSum = reviews.reduce((acc, review) => acc + review.rating, 0);
		return Math.round(ratingsSum / reviews.length);
	};

	const productRating = calculateProductRating();

	const image = images[0];

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
				<div className="lg:max-w-lg lg:self-end">
					{/* <Breadcrumbs /> */}
					<div className="mt-4">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							{product.name}
						</h1>
					</div>

					<ProductOverviewInfoSection
						productPrice={productPrice}
						productDescription={description}
						productRating={{
							rate: productRating,
							count: reviews.length,
						}}
					/>
				</div>

				<div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
					<ProductOverviewImage imageAlt={""} imageSrc={image?.url ?? ""} />
				</div>

				<div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
					<ProductOverviewForm />
				</div>
			</div>
		</div>
	);
}
