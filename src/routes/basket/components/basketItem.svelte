<script lang='ts'>
	import  {type BasketItem, addItem, removeItem } from "$store/basket";
	import { scale } from "svelte/transition";


    export let item:BasketItem
    export let idx:number

    $:data =  {
        ...item
    }

    function changeQty(action:'inc'|'dec'){
        if (action === 'inc'){
            data.qty ++
            func()
        }
        else if (data.qty > 1){
            data.qty --
            func()
        }

        function func(){
            addItem({
                id:data.id,
                name:data.name,
                imgUrl:data.imgUrl,
                hint:data.hint,
                price:data.price,
                qty:data.qty
            })
        }
    }

    function remove(){
        removeItem(item.id)
    }

</script>

<div in:scale out:scale class="card mb-1 bg-white p-2 py-4 shadow-xl rounded-md">
    <div class="container flex gap-1 justify-between items-center">
        <span class="idx hidden sm:inline-block">{(idx*1).toString()}.</span>
        <p title={data.name} class="name sm:flex-1 sm:max-w-[20ch] md:max-w-[30ch] truncate">{data.name}</p>
        <p class="price"><b>${(data.price * data.qty).toFixed(2).toString()}</b></p>
        <div class="qty min-w-max border-[1px] border-gray-400 rounded-md overflow-hidden flex items-center">
            <button on:click={()=>changeQty('dec')} class="increment px-1 sm:px-2  transition hover:bg-gray-100">-</button>
            <span class="min-w-[30px] text-center inline-block bg-gray-200">{data.qty}</span>
            <button on:click={()=>changeQty('inc')} class="decrement px-1 sm:px-2 transition hover:bg-gray-100">+</button>
        </div>
        <button on:click={remove} class='sm:min-w-[30px] min-w-[20px] text-black hover:text-white h-[20px] sm:h-[30px] inline-flex items-center justify-center rounded-full bg-red-400 bg-opacity-20 hover:bg-opacity-60 transition'>
            &times;
        </button>
    </div>
</div>