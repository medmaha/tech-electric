<script lang="ts">
	import { onMount } from "svelte";
	import { fade, scale } from "svelte/transition";

    import {BasketCart} from "$store/basket"

    export let toggleDrawer: ()=>void

    let element:HTMLDivElement

    function handleOuterClick(ev:any){
      const drawerElm=  ev.target === element || !!ev.target.closest('.nav-drawer') 
      || !!ev.target.closest('[data-drawer-toggler]') || ev.target.hasAttribute('data-drawer-toggler')

      if (!drawerElm){
        toggleDrawer()
      }
    }

    onMount(()=>{
        document.addEventListener('click', handleOuterClick)
        return ()=>{
            document.removeEventListener('click', handleOuterClick)
        }
    })
     
    function getCartQty(qty:number):string{
        return qty.toString()
    }

    let timeout:any

    function handleLinkClick(){

        if (timeout){
            clearTimeout(timeout)
        }

       timeout = setTimeout(()=>{
            toggleDrawer()
        },250)
    }

</script>


<div bind:this={element} in:fade out:scale class="md:hidden absolute left-0 top-full h-[calc(100vh-70px)] w-[90%] max-w-[450px] shadow-lg">
    <div class="nav-drawer block w-full h-full border-gray-400 border-r-[2px]">
        <div class="flex w-full justify-center h-full p-2 sm:p-4">
            <ul class=" flex-1 flex flex-col gap-2 w-full">
                <li class="active rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                     <a on:click={handleLinkClick}  href="/">Home</a>
                </li>
                <li class="rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                    <a on:click={handleLinkClick} href="/courses">Courses</a>

                </li>
                <li class="rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                     <a on:click={handleLinkClick} href="/products">Products</a>

                </li>
                <li class="rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                     <a on:click={handleLinkClick} href="/#aboutUs">About</a>

                </li>
                <li class="w-full bg-gray-400 h-[1px] px-8 leading-none" style="padding:0 2em;"></li>
                <li class="rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                     <a on:click={handleLinkClick} href="/blog">Blog</a>

                </li>
                <li class="rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                     <a on:click={handleLinkClick} href="/services">Services</a>
                </li>
                <li class="rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                     <a on:click={handleLinkClick} href="/#contact">Contact</a>
                </li>
             
                <li class="rounded-md relative inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                     <a on:click={handleLinkClick} href='/basket' style="gap:0px;"  class="relative inline-flex items-center">
                        <span class="pr-4">
                            Shopping Cart
                        </span>
                        <span class='pl-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="18" height="18" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                        </span>                    
                        {#if $BasketCart.total > 0}
                            <span style='transform:translateY(-100%)' class="inline-flex min-w-[15px] h-[15px] text-xs rounded-full text-white bg-red-400 p-[5px] justify-center items-center">
                                {getCartQty($BasketCart.total)}
                            </span>
                        {/if}
                    </a>
                </li>
            </ul>

        </div>
    </div>
</div>


<style>
  
    li a{
        width: 100%;
        height: 100%;
        display: inline-flex;
        justify-content: start;
        gap:.5em;
        align-items: center;
        padding: 0 1em;
    }
   
   
   
    li:hover{
        --tw-bg-opacity: 1;
        color: white;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.3);
    }

    ul li{
        cursor: pointer;
        font-size: large;
        padding: .25em .5em;
    }

    .nav-drawer {
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        color:#333;
    }

</style>