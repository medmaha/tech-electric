import { writable } from 'svelte/store';

type BasketItem = {
	id: string;
	name: string;
	imgUrl: string;
	hint: string;
	price: number;
	qty: number;
};

type Basket = {
	total: number;
	price: number;
	items: BasketItem[];
};

export const BasketCart = writable({ total: 0, price: 0, items: [] } as Basket);

export function addItem(item: BasketItem) {
	BasketCart.update((store) => {
		let foundMatched = false;

		let $totalPrice: number = 0;
		let $totalQuantity: number = 0;

		let $basketItems = store.items.reduce((data, current, idx) => {
			let __data: BasketItem;
			if (current.id === item.id) {
				foundMatched = true;
				__data = item;
				data[idx] = {
					...current,
					...item
				};
			} else {
				__data = current;

				data.push(current);
			}

			$totalPrice += __data.price * __data.qty;
			$totalQuantity += __data.qty;

			return data;
		}, [] as BasketItem[]);

		if (!foundMatched) {
			$basketItems = [item, ...store.items];
		}

		return {
			price: $totalPrice,
			total: $totalQuantity,
			items: $basketItems
		};
	});
}
