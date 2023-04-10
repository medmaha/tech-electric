import { writable } from 'svelte/store';

export interface BasketItem {
	id: string;
	name: string;
	imgUrl: string;
	hint: string;
	price: number;
	qty: number;
}

interface Basket {
	total: number;
	price: number;
	items: BasketItem[];
}

export const BasketCart = writable<Basket>({ total: 0, price: 0, items: [] });

export function addItem(item: BasketItem) {
	BasketCart.update((store) => {
		let foundMatched = false;
		let totalQuantity = 0;
		let totalPrice = 0;

		const basketItems = store.items.map((current) => {
			if (current.id === item.id) {
				foundMatched = true;
				totalQuantity += item.qty;
				totalPrice += item.qty * item.price;
				return { ...current, ...item };
			}
			totalQuantity += current.qty;
			totalPrice += current.qty * current.price;
			return current;
		});

		if (!foundMatched) {
			basketItems.unshift(item);
			totalQuantity += item.qty;
			totalPrice += item.qty * item.price;
		}

		return {
			total: totalQuantity,
			price: totalPrice,
			items: basketItems
		};
	});
}

export function removeItem(itemId: string) {
	BasketCart.update((store) => {
		const $basketItems = store.items.filter((item) => item.id !== itemId);

		const { sum, count } = $basketItems.reduce(
			(total, item) => {
				return { sum: (total.sum += item.price * item.qty), count: (total.count += item.qty) };
			},
			{ sum: 0, count: 0 }
		);

		return {
			price: sum,
			total: count,
			items: $basketItems
		};
	});
}
