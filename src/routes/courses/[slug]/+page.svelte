<script lang="ts">
	import { fade } from 'svelte/transition';
    import type { PageData } from './$types';
    
    export let data: PageData;
    
    const {slug} = data

</script>


<div in:fade class="p-8">
    <h1>
        Courses {slug}
    </h1>
</div>