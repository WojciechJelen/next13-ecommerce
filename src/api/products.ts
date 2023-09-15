import { type ProductType, type ProductResponseItem } from "@/types";

const productResponseItemToProductType = (product: ProductResponseItem): ProductType => ({
	id: product.id,
	name: product.title,
	href: `/products/${product.id}`,
	imageSrc: product.image,
	imageAlt: product.title,
	price: product.price,
	color: "white",
	description: product.description,
	rating: product.rating,
});

export const getProductsList = async (): Promise<ProductType[]> => {
	const response = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const productsResponse = (await response.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProductType);

	return products;
};

export const getProductById = async (id: ProductType["id"]): Promise<ProductType> => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await response.json()) as ProductResponseItem;
	const product = productResponseItemToProductType(productResponse);
	return product;
};
