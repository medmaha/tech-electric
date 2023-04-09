<script lang="ts">
	import { fade } from 'svelte/transition';
    import type { PageData } from './$types';
    
    export let data: PageData;

    console.log(data)
    console.log(data.slug)
</script>

<div in:fade class="">
    Products {data.slug}
</div>