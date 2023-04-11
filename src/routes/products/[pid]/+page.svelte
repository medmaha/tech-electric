<script lang="ts">
	import { fade } from 'svelte/transition';
    import type { PageData } from './$types';
    
    export let data: PageData;

</script>

<div class="">
    Products {data.pid}
</div>k