<script lang='ts'>
	import { fade } from "svelte/transition";
	import AboutUs from "./components/aboutUs.svelte";
	import Courses from "./components/courses.svelte";
    import Headers from "./components/headers.svelte";
	import ProductsContainer from "./components/productsContainer.svelte";

	import type { PageData } from './$types';
	import { BasketCart } from "../store/basket";

	export let data : PageData

	$:({products, courses, basket} = data)

	$: if (basket){
		// console.log(basket)
		BasketCart.set(basket)
	}

</script>


<div class="">
	<Headers/>
	<AboutUs/>
	<Courses courses={courses}/>
	<ProductsContainer products={products}/>
	<div class="text-center flex flex-col items-center justify-center">
		<button class="p-8 py-2 border-[2px] border-green-500 rounded-md font-semibold text-green-500 hover:text-white hover:bg-green-500 transition">View More?</button>
		<p class="text-gray-700 text-sm pt-4">View more products of teti!</p>
	</div>
</div>

