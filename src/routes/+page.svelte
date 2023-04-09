<script>
	import { fade } from "svelte/transition";
	import AboutUs from "./components/aboutUs.svelte";
	import Courses from "./components/courses.svelte";
    import Headers from "./components/headers.svelte";
	import ProductsContainer from "./components/productsContainer.svelte";
</script>


<div in:fade class="">
	<Headers/>
	<AboutUs/>
	<Courses/>
	<ProductsContainer/>
</div>

