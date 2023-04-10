import { startMongo } from '$db/mongo';
import { ObjectId } from 'mongodb';

import type { Handle } from '@sveltejs/kit';
import { product } from './database/products';

startMongo().then((client) => {
	console.log('mongodb started');
});

export const handle = (async ({ event, resolve }) => {
	const basket = event.cookies.get('$basket');
	const url = new URL(event.request.url);
	// if (url.pathname === '/')
	if (basket) {
		const $basket = JSON.parse(basket);
		const _ids = Object.keys($basket).map((id) => {
			return ObjectId.createFromHexString(id);
		});
		const products = await product
			.find({ _id: { $in: _ids } }, { projection: { outline: 0 } })
			.toArray();

		let totalPrice: number = 0;
		let totalQuantity: number = 0;

		const data = products.map((item) => {
			const basketData = $basket[item._id.toString()];

			const _data = {
				...item,
				...basketData,
				_id: item._id.toString()
			};

			_data.qty = Number(_data.qty);
			_data.price = Number(_data.price);

			totalQuantity += _data.qty;
			totalPrice += _data.price * _data.qty;

			return _data;
		});

		const $store = {
			items: data,
			total: totalQuantity,
			price: totalPrice
		};
		event.locals['$basket'] = $store;
	}

	const response = await resolve(event);
	response.headers.set('x-custom-header', 'potato');
	return response;
}) satisfies Handle;
