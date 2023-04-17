import { redirect } from '@sveltejs/kit';
import Products, { type ProductInterface } from '../../../database/products';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const { slug } = params;

	const product = (await Products.findById(slug))?.toJSON() as ProductInterface;

	if (product) {
		product._id = product.id;
		return { product };
	}
	return redirect(302, '/');
}) satisfies PageServerLoad;
