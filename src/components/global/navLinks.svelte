<script lang='ts'>
     let timeout : any

    let links: HTMLUListElement

    const navigate = (ev:any)=>{
        ev.preventDefault()
        const href :string = ev.currentTarget.href

        if (href.match(/#/)){
            const id = href.split('#')[1]
            const targetElement = document.getElementById(id)
            targetElement?.scrollIntoView({behavior:'smooth'})

            if (id === 'header'){
                sleep('/', ev, 250)
                return
            }
            sleep(href, ev)
        }else{
            window.location.href = href
        }
        
    }
    
    function sleep(href:string, ev:any, ms=500){
        if (timeout) clearTimeout(timeout)

        const activeLink = links.querySelector('li.active')!
        const targetLink = ev.currentTarget.closest('li')

        activeLink.classList.remove('active')
        
        timeout = setTimeout(()=>{
            window.history.replaceState({}, '', href);
            targetLink.classList.add('active')
        },ms)

    }
</script>

 <ul bind:this={links} class="h-[95%] flex items-center gap-1">

    <li class="h-full flex items-center active">
        <a on:click={navigate} href="/#header">Home</a>
    </li>

    <li class="h-full flex items-center">
        <a on:click={navigate} href="/blog">Blog</a>
    </li>

    <li class="h-full flex items-center">
        <a on:click={navigate} href="/#courses">Courses</a>
    </li>

    <li class="h-full flex items-center">
        <a on:click={navigate} href="/#products">Products</a>
    </li>

    <li class="h-full flex items-center">
        <a on:click={navigate} href="/#aboutUs">About</a>
    </li>

    <li class="px-1 h-full flex items-center">
        <a on:click={navigate} href="/#contactUs">Contact</a>
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
        bottom: 0;
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