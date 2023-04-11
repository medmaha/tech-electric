

<script lang='ts'>
    import {BasketCart} from "$store/basket"
	import { fade, scale } from "svelte/transition";
	import NavDrawer from "./navDrawer.svelte";

	import NavLinks from "./navLinks.svelte";    
    let timeout : any

    $: navDrawer  = false

    function toggleNavDrawer(){
        navDrawer = !navDrawer
    }
    
     const navigate = (ev:any)=>{
        ev.preventDefault()
        const href :string = ev.currentTarget.href
        const pathName = window.location.pathname

        if (href.match(/#/)){
            const id = href.split('#')[1]
            const targetElement = document.getElementById(id)
            targetElement?.scrollIntoView({behavior:'smooth'})

            if (id === 'header'){
                if (pathName === '/'){
                    sleep('/', ev, 250)
                }else{
                    window.location.href = '/'
                }
                return
            }
            sleep(href, ev)
        }else{
            window.location.href = href
        }
        
        function sleep(href:string, ev:any, ms=500){
            if (timeout) clearTimeout(timeout)

        
            const links = ev.currentTarget.closest('ul')!
            const activeLink = links.querySelector('.active')!
            
            activeLink.classList.remove('active')
            
           
            
            const targetLink = ev.currentTarget.closest('li')
            
            timeout = setTimeout(()=>{
                window.history.pushState({}, '', href);
                targetLink.classList.add('active')
                    if (navDrawer){
                        navDrawer = !navDrawer
                    }
            },ms)
    
        }
    }
    

</script>

<nav class="h-[70px] bg-black bg-opacity-50 backdrop-blur-[2px] text-white z-50 shadow-md ">
    <div class="container px-2 ">
        <div class="flex gap-2 items-center">
            <a href='/' class="inline-flex gap-1 items-center">
                <img src="/logo.png" width="45px" height="45px" class="rounded-full" alt="TETI (Tec Electrical) logo">
                <h1 class="text-xl md:text-2xl font-bold tracking-wide">
                    TETI
                </h1>
            </a>
        </div>

        <div class="w-full h-full flex items-center flex-1 max-w-[350px]">
            <form action="" class="w-full relative">
                <label for="searchBar" class="absolute bottom-0 top-0">
                    <span class="inline-flex h-[90%] items-center px-[3px] rounded-bl-md bg-green-600 bg-opacity-75 shadow-sm">
                        <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                    </span>
                </label>
                <input id="searchBar" placeholder="Search teti..."
                 type="text"
                 class="w-full p-1 pl-9 rounded-b-md bg-transparent sm:font-semibold border-b-[2px] focus:border-b-[3px] transition-[border] text-white focus:outline-none focus:border-b-green-400">
            </form>
        </div>

        <div class="h-full hidden md:block">
           <NavLinks navigate={navigate}/>
        </div>

        <div class="h-full md:hidden relative">
           <button data-drawer-toggler on:click={toggleNavDrawer} class={`z-10 ${navDrawer ? 'active':''} 
           h-full inline-flex flex-col justify-center p-2 gap-[4px] cursor-pointer`}>
               <span class="inline-block w-8 h-1 bg-white"></span>
               <span class="inline-block w-8 h-1 bg-white"></span>
               <span class="inline-block w-8 h-1 bg-white"></span>
   
            </button>
            {#if $BasketCart.total > 0}
            <span class="absolute top-3 right-0 pointer-events-none z-0" in:scale out:fade>
                <span class="inline-flex min-w-[12px] h-[12px] rounded-full bg-red-400">
                </span>
            </span>
            {/if}
        </div>

            

        {#if navDrawer}
            <NavDrawer navigate={navigate} toggleDrawer={toggleNavDrawer}/>
        {/if}
    </div>

</nav>

<style>
    nav{
        position: sticky;
        top: 0;
        width:100%
    }
    .container{
        max-width: 1200px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }

    [data-drawer-toggler] span{
        transition: 250ms ease-out;
    }

    [data-drawer-toggler].active span{
        background-color:  hsl(142, 76%, 46%);
    }

</style>