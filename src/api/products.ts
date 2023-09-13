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
}

const productResponseItemToProductType = (product: ProductResponseItem): ProductType => ({
	id: product.id,
	name: product.title,
	href: `/products/${product.id}`,
	imageSrc: product.image,
	imageAlt: product.title,
	price: product.price,
	color: "white",
});

export const getProductsList = async (): Promise<ProductType[]> => {
	const response = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await response.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProductType);

	return products;
};

export const getProductById = async (id: ProductType["id"]): Promise<ProductType> => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await response.json()) as ProductResponseItem;
	const product = productResponseItemToProductType(productResponse);
	console.log("#####", product);
	return product;
};
