type PropsType = {
	imageAlt: string;
	imageSrc: string;
};

export function ProductOverviewImage({ imageAlt, imageSrc }: PropsType) {
	return (
		<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
			<img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover object-center" />
		</div>
	);
}
