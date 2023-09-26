import { executeGraphql } from "./executeGraphql";
import { ProductGetByIdDocument, ProductsGetListDocument } from "@/gql/graphql";
import { type ProductsType, type SingleProductType } from "@/types";

export const getProductsList = async (): Promise<ProductsType> => {
	const queryResult = await executeGraphql(ProductsGetListDocument, {});
	return queryResult.products;
};

export const getProductById = async (id: string): Promise<SingleProductType> => {
	const queryResult = await executeGraphql(ProductGetByIdDocument, { id });
	const product = queryResult?.product;

	return product;
};
