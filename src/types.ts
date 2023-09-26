import { type ProductGetByIdQuery, type ProductsGetListQuery } from "./gql/graphql";

export type GraphQLResponse<T> =
	| {
			data: T;
			errors?: undefined;
	  }
	| {
			data?: undefined;
			errors: { message: string }[];
	  };

export type ProductsType = ProductsGetListQuery["products"];
export type SingleProductType = ProductGetByIdQuery["product"];

export interface Rating {
	rate: number;
	count: number;
}
