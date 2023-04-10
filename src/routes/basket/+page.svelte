<script lang="ts">
    import {BasketCart} from '$store/basket'
	import BasketItem from './components/basketItem.svelte';
    
    import type { PageData } from './$types';
	import { fade, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	export let data : PageData

	$:({products, basket} = data)

	$: if (basket){
		BasketCart.set(basket)
	}

     function enhanceRequest({ form, data, action, cancel, submitter }:any){
        // `form` is the `<form>` element
        // `data` is its `FormData` object
        // `action` is the URL to which the form is posted
        // `cancel()` will prevent the submission
        // `submitter` is the `HTMLElement` that caused the form to be submitted

        console.log(data)

        return async ({ result, update }:any) => {
            // `result` is an `ActionResult` object
            // `update` is a function which triggers the logic that would be
            // triggered if this callback wasn't set

            update()
        };
    }
</script>

<div in:fade class='max-w-[1000px] mx-auto'>
    <div class="card my-4 px-2 -w-full">
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

   <div class="card my-4 p-2 py-4 shadow-xl rounded-lg w-full mx-auto">
      <div class="sm:p-4 p-1 flex flex-col w-full gap-4 h-full max-h-[400px] overflow-hidden overflow-y-auto">
          {#each $BasketCart.items as item , i (item._id) }
          <div in:scale out:fade>
              <BasketItem item={item} idx={i} enhanceRequest={enhanceRequest}/>
          </div>
          {/each}
      </div>
   </div>
</div>

