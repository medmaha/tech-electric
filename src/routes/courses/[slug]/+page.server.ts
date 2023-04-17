import { redirect } from '@sveltejs/kit';
import Courses, { type CoursesInterface } from '../../../database/courses';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const { slug } = params;

	const q = slug.replace('-', ' ');

	console.log(q);

	const course = (
		await Courses.findOne({ name: { $regex: new RegExp(q, 'i') } })
	)?.toJSON() as CoursesInterface;

	if (course) {
		course._id = course.id;
		return { course };
	}
	return redirect(302, '/');
}) satisfies PageServerLoad;
