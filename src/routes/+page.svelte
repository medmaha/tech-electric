<script lang='ts'>
	import { fade } from "svelte/transition";
	import AboutUs from "./components/aboutUs.svelte";
	import Courses from "./components/courses.svelte";
    import Headers from "./components/headers.svelte";
	import ProductsContainer from "./components/productsContainer.svelte";

	import type { PageData } from './$types';
	import { BasketCart } from "../store/basket";

	export let data : PageData

	$:({products, basket} = data)

	$: if (basket){
		// console.log(basket)
		BasketCart.set(basket)
	}

</script>


<div class="">
	<Headers/>
	<AboutUs/>
	<!-- <Courses courses={JSON.parse(courses)}/> -->
	<ProductsContainer products={products}/>
</div>

