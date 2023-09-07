type PropsType = {
	imageAlt: string;
	imageSrc: string;
};

// import Image from "next/image";

export function ProductCoverImage({ imageSrc, imageAlt }: PropsType) {
	return (
		<div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
			<img
				src={imageSrc}
				alt={imageAlt}
				className="h-full w-full object-cover object-center lg:h-full lg:w-full"
			/>
		</div>
	);
}
