import NextImage from "next/image";

type PropsType = {
	imageAlt: string;
	imageSrc: string;
};

export function ProductCoverImage({ imageSrc, imageAlt }: PropsType) {
	return (
		<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
			<NextImage
				src={imageSrc}
				alt={imageAlt}
				width={320}
				height={320}
				className="h-full w-full object-cover object-center lg:h-full lg:w-full"
			/>
		</div>
	);
}
