import type { WithId } from 'mongodb';
import { product } from '../database/products';
import { courses } from '../database/courses';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function (): Promise<{
	products: any[];
	courses: any[];
}> {
	const productsData = await product
		.find(
			{},
			{
				limit: 20,
				projection: {
					_id: 0
				}
			}
		)
		.toArray();
	const coursesData = await courses
		.find(
			{},
			{
				limit: 20,
				projection: {
					_id: 0
				}
			}
		)
		.toArray();
	return {
		products: productsData,
		courses: coursesData
	};
};
