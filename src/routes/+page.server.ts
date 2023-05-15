import Products, { type ProductInterface } from '../database/products';
import Courses, { type CoursesInterface } from '../database/courses';

import type { PageServerLoad, Actions } from './$types';
import type { Basket } from '../store/basket';

interface Locals {
	$basket?: Basket;
	// Add other properties as needed
}

export const load: PageServerLoad = async function ({ locals }: { locals: Locals }) {
	const products = (await Products.find({})).flatMap((product) => {
		const __data = product.toJSON();
		__data['_id'] = product.id;
		const data = __data as ProductInterface;
		return data;
	});
	const courses = (await Courses.find({}, { levels: 0 })).flatMap((course) => {
		const __data = course.toJSON();
		__data['_id'] = course.id;
		const data = __data as CoursesInterface;
		return data;
	});

	const $basket = locals.$basket;

	if ($basket) {
		return {
			courses,
			products,
			basket: $basket
		};
	}

	return {
		courses,
		products
	};
};

export const actions = {
	addItem: async ({ cookies, request }) => {
		const data = await request.formData();
		const qty = data.get('qty')! as string;
		const pid = data.get('pid')! as string;
		const price = data.get('price')! as string;

		if (!qty || !pid) return { error: true };

		const $basket = cookies.get('$basket');
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

		const $basket = cookies.get('$basket');
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
