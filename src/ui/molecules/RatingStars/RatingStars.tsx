import { twMerge } from "tailwind-merge";
import { StarIcon } from "@heroicons/react/20/solid";
import { type Rating } from "@/types";

type PropsType = {
	productRating: Rating;
};

export function RatingStars({ productRating }: PropsType) {
	return (
		<div className="flex items-center">
			<div>
				<div className="flex items-center">
					{[0, 1, 2, 3, 4].map((rating) => (
						<StarIcon
							key={rating}
							className={twMerge(
								productRating.rate > rating ? "text-yellow-400" : "text-gray-300",
								"h-5 w-5 flex-shrink-0",
							)}
							aria-hidden="true"
						/>
					))}
				</div>
				<p className="sr-only">{productRating.rate} out of 5 stars</p>
			</div>
			<p className="ml-2 text-sm text-gray-500">{productRating.count} reviews</p>
		</div>
	);
}
