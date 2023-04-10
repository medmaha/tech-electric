import type { PageServerLoad } from '../$types';
import { BasketCart } from '$store/basket';
import { product } from '../../database/products';

export const load: PageServerLoad = async function ({ locals }): Promise<{
	products: string;
	basket?: any;
}> {
	const productsData = await product
		.find(
			{},
			{
				limit: 20
			}
		)
		.toArray();

	const $basket = locals.$basket;

	if ($basket) {
		return {
			basket: $basket,
			products: JSON.stringify(productsData)
		};
	}
	return {
		products: JSON.stringify(productsData)
	};
};
