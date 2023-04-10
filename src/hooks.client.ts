import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const basket = event.cookies.get('$basket');

	console.log('hello');
	console.log('$basket', basket);

	const response = await resolve(event);
	response.headers.set('x-custom-header', 'potato');
	return response;
}) satisfies Handle;
