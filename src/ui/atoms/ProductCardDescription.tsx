import Link from "next/link";

type PropsType = {
	name: string;
	color: string;
	price: string;
	id: string;
};

export function ProductCardDescription({ name, color, id, price }: PropsType) {
	return (
		<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700">
					<Link
						href={`/product
					/${id}`}
					>
						<span aria-hidden="true" className="absolute inset-0" />
						{name}
					</Link>
				</h3>
				<p className="mt-1 text-sm text-gray-500">{color}</p>
			</div>
			<p className="text-sm font-medium text-gray-900">{price}</p>
		</div>
	);
}
