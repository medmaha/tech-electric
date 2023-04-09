<script lang="ts">
	import { onMount } from "svelte";
	import { fade, scale } from "svelte/transition";


    export let navigate: (ev:any)=>void
    
    let pathName:string
    onMount(()=>{
        pathName = window.location.pathname
    })

</script>


<div in:fade out:scale class="md:hidden absolute left-0 top-full h-[calc(100vh-70px)] w-[90%] max-w-[450px] shadow-lg">
    <div class="nav-drawer block w-full h-full border-gray-400 border-r-[2px]">
        <div class="flex w-full justify-center h-full p-2 sm:p-4">
            <ul class=" flex-1 flex flex-col gap-2 w-full">
                <li class="active rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                     <a on:click={navigate} href="/#header">Home</a>
                </li>
                <li class="rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                    <a on:click={navigate} href="/#courses">Courses</a>

                </li>
                <li class="rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                     <a on:click={navigate} href="/#products">Products</a>

                </li>
                <li class="rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                     <a on:click={navigate} href="/#aboutUs">About</a>

                </li>
                <li class="w-full bg-gray-400 h-[1px] px-8 leading-none"></li>
                <li class="rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                     <a on:click={navigate} href="/blog">Blog</a>

                </li>
                <li class="rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                     <a on:click={navigate} href="/services">Services</a>
                    
                </li>
                <li class="rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                     <a on:click={navigate} href="/contact">Contact</a>
                    
                </li>
             
                <li class="rounded-md inline-block gap-2 w-full bg-green-500 bg-opacity-0 hover:bg-opacity-80 hover:text-white transition">
                     <a on:click={navigate} href="#Contact">
                        <span>
                            Shopping Cart
                        </span>
                        <span class='px-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="18" height="18" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                        </span>                    
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

    .nav-drawer ul li.inline-block{
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