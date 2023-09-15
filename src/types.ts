export type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

export interface Rating {
	rate: number;
	count: number;
}

export interface ProductType {
	id: string;
	name: string;
	href: string;
	imageSrc: string;
	imageAlt: string;
	price: number;
	color: string;
	description: string;
	rating: Rating;
}

export type Size = {
	name: string;
	description: string;
};
