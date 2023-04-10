import type { WithId } from 'mongodb';
import { product } from '../database/products';
import { courses } from '../database/courses';
import type { PageServerLoad, Actions } from './$types';
import { json } from '@sveltejs/kit';

export const load: PageServerLoad = async function ({ locals }): Promise<{
	products: string;
	courses: string;
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
	const coursesData = await courses
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
			products: JSON.stringify(productsData),
			courses: JSON.stringify(coursesData)
		};
	}
	return {
		products: JSON.stringify(productsData),
		courses: JSON.stringify(coursesData)
	};
};

export const actions = {
	addItem: async ({ cookies, request }) => {
		const data = await request.formData();
		const qty = data.get('qty')! as string;
		const pid = data.get('pid')! as string;
		const price = data.get('price')! as string;

		if (!qty || !pid) return { error: true };

		let $basket = cookies.get('$basket');
		let $value: { [x: string]: { [y: string]: string } };

		if ($basket) {
			$value = JSON.parse($basket);
			$value[pid] = { qty, price };
		} else {
			$value = { [pid]: { qty, price } };
		}

		cookies.set('$basket', JSON.stringify($value), {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict'
		});

		return { success: true };
	},
	removeItem: async ({ cookies, request }) => {
		const data = await request.formData();
		const pid = data.get('pid')! as string;

		if (!pid) return { error: true };

		let $basket = cookies.get('$basket');
		let $value: { [x: string]: { [y: string]: string } };

		if ($basket) {
			$value = JSON.parse($basket);
			if ($value[pid]) {
				console.log('removed item');
				delete $value[pid];
			}

			cookies.set('$basket', JSON.stringify($value), {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'strict'
			});
		}
		return { success: true };
	}
} satisfies Actions;
