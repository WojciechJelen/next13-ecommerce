import { CheckIcon } from "@heroicons/react/20/solid";
import { RatingStars } from "../RatingStars";
import { type Rating } from "@/types";

export type PropsType = {
	productPrice: string;
	productRating: Rating;
	productDescription: string;
};
export function ProductOverviewInfoSection({
	productPrice,
	productDescription,
	productRating,
}: PropsType) {
	return (
		<section aria-labelledby="information-heading" className="mt-4">
			<h2 id="information-heading" className="sr-only">
				Product information
			</h2>

			<div className="flex items-center">
				<p className="text-lg text-gray-900 sm:text-xl">{productPrice}</p>

				<div className="ml-4 border-l border-gray-300 pl-4">
					<h2 className="sr-only">Reviews</h2>
					<RatingStars productRating={productRating} />
				</div>
			</div>

			<div className="mt-4 space-y-6">
				<p className="text-base text-gray-500">{productDescription}</p>
			</div>

			<div className="mt-6 flex items-center">
				<CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
				<p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
			</div>
		</section>
	);
}
