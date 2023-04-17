<script lang='ts'>
    import {BasketCart} from "$store/basket"
	import { fade, scale } from "svelte/transition";

    export let navDrawer : boolean
    
    function getCartQty(qty:number):string{
        return qty.toString()
    }

    let timeout : any
    let activeHref:string=''

    const navigate = (ev:any)=>{
        const href :string = ev.currentTarget.href
        
        
        const pathName = window.location.pathname
        activeHref = href
        
        if (pathName === '/' && href.match(/#/)){
            ev.preventDefault()
            activeHref = href.split('#')[1]

            const targetElement = document.getElementById(activeHref)
            targetElement?.scrollIntoView({behavior:'smooth'})
            sleepNavigate(ev)

        }else if (href.match(/#/)){
            
            activeHref = href.split('#')[1]
            changeActiveLink(ev)
            
        }else{
            window.location.href = href
        }
        
    }



    function sleepNavigate(ev:any, ms=500){
        if (timeout) clearTimeout(timeout)
    
       const targetLink = changeActiveLink(ev, false)
        
        timeout = setTimeout(()=>{
            window.history.pushState({}, '', activeHref);
                targetLink.classList.add('active')
                if (navDrawer){
                    navDrawer = !navDrawer
                }
        },ms)

    }

    function changeActiveLink(ev:any, activate:boolean=true){
        const links = ev.currentTarget.closest('ul')
        const activeLink = links?.querySelector('.active')

        if (activeLink) 
            activeLink.classList.remove('active')
            
        const targetLink =  ev.currentTarget.closest('li')
            
        if (targetLink && activate) 
            targetLink.classList.add('active')
        
        else
            return targetLink
    }
    

</script>

 <ul class="h-[95%] flex items-center justify-between gap-1">

    <li class="h-full flex items-center active">
        <a on:click={changeActiveLink} href="/">Home</a>
    </li>

    <li class="h-full flex items-center">
        <a on:click={changeActiveLink}  href="/courses">Courses</a>
    </li>

    <li class="h-full flex items-center">
        <a on:click={changeActiveLink} href="/products">Products</a>
    </li>

    <li class="h-full flex items-center">
        <a on:click={navigate}  href="/#aboutUs">About</a>
    </li>

    <li class="px-1 h-full flex items-center relative">
        <a href='/basket'  class='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="18" height="18" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </a>
        {#if $BasketCart.total > 0}
            <div class="absolute top-[2px] right-0 xl:left-[70%]" in:scale out:fade>
                <span class="inline-flex min-w-[15px] h-[15px] text-xs rounded-full text-white bg-red-400 p-[5px] justify-center items-center">
                    {getCartQty($BasketCart.total)}
                </span>
            </div>
        {/if}
    </li>
</ul>

<style>
    li{
        position: relative;
        justify-content: center;
        transition: color 300ms;
    }
    li a{
        width: 100%;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 1em;
    }
    li:hover{
        color: hsl(142, 76%, 46%);
    }
    li.active{
        color: hsl(142, 76%, 55%);
    }
    li::after{
        position: absolute;
        content: '';
        width: 100%;
        bottom: 10px;
        height: 10px;
        background: rgb(34 197 94 / 1);
        border-bottom-left-radius: 1em;
        border-bottom-right-radius: 1em;
        opacity: 0;
        pointer-events: none;
        transition: opacity 300ms;
    }
    li.active::after{
        opacity: 1;
    }

</style>