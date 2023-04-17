
<script lang='ts'>
	import Product from '../components/product.svelte';

    import type { PageData } from './$types';
    
	export let data : PageData
    $:({products} = data)

</script>

 <div class="max-w-[1200px] mx-auto pt-[20px]">
     <div class="flex flex-col justify-center items-center p-4">
         <p class='leading-none'>
             <span title="Under development">
                 <svg fill='currentColor' fill-opacity={0.5} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/></svg>
             </span>
         </p>
         <p  class="text-sm text-gray-700 font-semibold tracking-wide text-center">
             This page is currently under development!
         </p>
     </div>
     <!-- Products -->
    <div class="max-w-[1200px] mx-auto pt-[50px]">
        <div id="products" class="w-full rounded-t-lg">
            <h3 class='text-xl sm:text-2xl text-center font-bold py-2 mb-4'>Teti&apos;s Products</h3>

            <div class="py-8 px-1 sm:px-0">
                <div class="flex justify-center flex-wrap gap-2 md:gap-4 lg:gap-6">
                    {#each products as product (product._id)}
                        <Product data={product}/>
                    {/each}      
                </div>
            </div>
        </div>
    </div>
 </div>