import { redirect } from '@sveltejs/kit';
import Courses, { type CoursesInterface } from '../../database/courses';
import type { PageServerLoad } from './$types';

export const load = (async (ev) => {
	const courses = (await Courses.find({}))?.flatMap((course) => {
		const __data = course.toJSON();
		__data._id = course.id;
		const data = __data as CoursesInterface;
		return data;
	});

	return { courses };
}) satisfies PageServerLoad;
