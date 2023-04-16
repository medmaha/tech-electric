import type { PageServerLoad } from '../$types';
import { BasketCart } from '$store/basket';

export const load: PageServerLoad = async function ({ locals }): Promise<any> {
	const $basket = locals.$basket;

	if ($basket) {
		return {
			basket: $basket
			// products:
		};
	}
	return {
		// products: []
	};
};
