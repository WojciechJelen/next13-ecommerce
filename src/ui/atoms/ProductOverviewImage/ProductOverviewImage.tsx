import NextImage from "next/image";

type PropsType = {
	imageAlt: string;
	imageSrc: string;
};

export function ProductOverviewImage({ imageAlt, imageSrc }: PropsType) {
	return (
		<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
			<NextImage
				src={imageSrc}
				alt={imageAlt}
				width={502}
				height={502}
				className="h-full w-full object-cover object-center"
			/>
		</div>
	);
}
