import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export function ProductOverviewForm() {
	return (
		<section aria-labelledby="options-heading">
			<h2 id="options-heading" className="sr-only">
				Product options
			</h2>

			<form>
				<div className="sm:flex sm:justify-between">{/* <SizeSelector /> */}</div>
				<div className="mt-4">
					<a href="#" className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
						<span>What size should I buy?</span>
						<QuestionMarkCircleIcon
							className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
							aria-hidden="true"
						/>
					</a>
				</div>
				<div className="mt-10">
					<button
						type="submit"
						className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
					>
						Add to bag
					</button>
				</div>
				<div className="mt-6 text-center">
					<a href="#" className="group inline-flex text-base font-medium">
						<ShieldCheckIcon
							className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
							aria-hidden="true"
						/>
						<span className="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
					</a>
				</div>
			</form>
		</section>
	);
}
