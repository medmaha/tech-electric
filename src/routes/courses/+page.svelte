<script lang="ts">
	import { fade } from 'svelte/transition';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>



<div in:fade class="p-8">
    <h1>
        Courses
    </h1>
</div>