import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const { pid } = params;

	return { pid };
}) satisfies PageServerLoad;
