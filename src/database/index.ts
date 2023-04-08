import PRODUCTS, { type ProductsArray, type Product } from './products';

const DB: Database = {
	products: PRODUCTS
};

type Database = {
	products: ProductsArray;
};

export { DB, ProductsArray, Product };
