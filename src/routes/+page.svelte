<script lang='ts'>
	import { fade } from "svelte/transition";
	import AboutUs from "./components/aboutUs.svelte";
	import Courses from "./components/courses.svelte";
    import Headers from "./components/headers.svelte";
	import ProductsContainer from "./components/productsContainer.svelte";

	import type { PageData } from './$types';

	export let data : PageData

	$:({products, courses} = data)

</script>


<div in:fade class="">
	<Headers/>
	<AboutUs/>
	<Courses courses={courses}/>
	<ProductsContainer products={products}/>
</div>

