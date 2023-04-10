<script lang="ts">
    import {BasketCart} from '$store/basket'
	import BasketItem from './components/basketItem.svelte';
    
    function changeQty(action:string){}

</script>

 <div class="card my-4 px-2 max-w-[1000px] mx-auto">
    <div class="container shadow-xl rounded-md bg-white p-4 flex gap-2 md:gap-4 justify-between items-center w-full flex-wrap">
        <div class="inline-flex justify-center w-full sm:w-max">
            <button class="idx px-4 py-2 bg-green-500 font-semibold text-white shadow-sm rounded-md">Checkout</button>
        </div>
        <div class="new-letter inline-flex w-full sm:w-max justify-center px-2 sm:px-4">
            <input type="text" placeholder="news letter" class="min-w-[200px] rounded-md border-[2px] p-1 border-grey-400 focus:outline-green-500 transition focus:border-green-500">
        </div>
        <div class="price w-full inline-flex flex-col items-center sm:items-end px-2 flex-1 justify-end"><span>
            Total sum
        </span> <b>${$BasketCart.price.toFixed(2).toString()}</b></div>
    
    </div>
</div>

 <div class="card my-4 p-2 py-4 shadow-xl rounded-lg max-w-[1000px] mx-auto">
    <div class="sm:p-4 p-1 flex flex-col w-full gap-4 h-full max-h-[400px] overflow-hidden overflow-y-auto">
        {#each $BasketCart.items as item, i }
            <BasketItem item={item} idx={i}/>
        {/each}
    </div>
 </div>
