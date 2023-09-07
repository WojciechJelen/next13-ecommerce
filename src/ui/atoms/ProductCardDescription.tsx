type PropsType = {
	name: string;
	color: string;
	price: string;
	href: string;
};

export function ProductCardDescription({ name, color, href, price }: PropsType) {
	return (
		<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700">
					<a href={href}>
						<span aria-hidden="true" className="absolute inset-0" />
						{name}
					</a>
				</h3>
				<p className="mt-1 text-sm text-gray-500">{color}</p>
			</div>
			<p className="text-sm font-medium text-gray-900">{price}</p>
		</div>
	);
}
