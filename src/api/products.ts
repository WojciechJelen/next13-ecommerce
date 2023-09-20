import { executeGraphql } from "./executeGraphql";
import { ProductsGetListDocument, type ProductsGetListQuery } from "@/gql/graphql";
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

export const getProductsGQL = async (): Promise<ProductsGetListQuery["products"]> => {
	const queryResult = await executeGraphql(ProductsGetListDocument, {});
	return queryResult.products;
};

export const getProductsList = async ({
	offset,
	take = 20,
}: { offset?: number; take?: number } = {}): Promise<ProductType[]> => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${take}${
			offset ? `&offset=${offset * take}` : ""
		}`,
	);

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
