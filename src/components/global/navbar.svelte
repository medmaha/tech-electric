

<script lang='ts'>
	import NavLinks from "./navLinks.svelte";

    
</script>

<nav class="sticky top-0 w-full h-[70px] bg-black bg-opacity-50 text-white z-50 shadow-md">
    <div class="max-w-[1200px] px-2 sm:px-4 mx-auto h-full flex w-full items-center justify-between gap-4">
        <div class="flex gap-2 items-center">
            <a href="/" class="inline-flex gap-1 items-center">
                <img src="/logo.png" width="45px" height="45px" class="rounded-full" alt="TETI (Tec Electrical) logo">
                <h1 class="text-xl md:text-2xl font-bold tracking-wide">
                    TETI
                </h1>
            </a>
        </div>

        <div class="w-full h-full flex items-center flex-1 max-w-[400px]">
            <form action="" class="w-full relative">
                <label for="searchBar" class="absolute bottom-0 top-0">
                    <span class="inline-flex h-[90%] items-center px-[3px] bg-green-600 bg-opacity-75 shadow-sm">
                        <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                    </span>
                </label>
                <input id="searchBar" placeholder="Search everything on teti"
                 type="text"
                 class="w-full p-1 pl-9 bg-transparent sm:font-semibold border-b-[2px] focus:border-b-[3px] transition-[border] text-white focus:outline-none focus:border-b-green-400">
            </form>
        </div>

        <div class="h-full hidden md:block">
           <NavLinks/>
        </div>

        <div class="flex flex-col p-2 gap-[4px] cursor-pointer md:hidden">
            <span class="inline-block w-8 h-1 bg-white"></span>
            <span class="inline-block w-8 h-1 bg-white"></span>
            <span class="inline-block w-8 h-1 bg-white"></span>
        </div>
    </div>

</nav>

<style>

</style>