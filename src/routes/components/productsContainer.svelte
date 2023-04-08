<script>
	import Product from "./product.svelte";
    import {DB} from '../../database'
    
    $:products = DB.products

</script>
<div class="max-w-[1200px] mx-auto pt-[50px]">
    <div id="products" class="w-full pt-[70px] rounded-t-lg">
         <h3 class='text-xl sm:text-2xl text-center font-bold py-2 mb-4'>Sales Products</h3>

         <div class="py-8 px-1 sm:px-0">
            <div class="flex justify-center flex-wrap gap-2 md:gap-4 lg:gap-6">
                {#each Object.entries(products) as product }
                    <Product data={product[1]}/>
                {/each}
                {#each Object.entries(products) as product }
                    <Product data={product[1]}/>
                {/each}
            </div>
         </div>
    </div>
</div>