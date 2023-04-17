
<script lang='ts'>
    
    import type { PageData } from './$types';
    
	export let data : PageData
    $:({courses} = data)

</script>

<div class="max-w-[1200px] mx-auto pt-[20px]">
    <div class="flex flex-col justify-center items-center p-4">
        <p class='leading-none'>
            <span title="Under development">
                // <svg fill='currentColor' fill-opacity={0.5} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/></svg>
            </span>
        </p>
        <p  class="text-sm text-gray-700 font-semibold tracking-wide text-center">
            This page is currently under development!
        </p>
    </div>
    <div id="courses" class="w-full p-4 rounded-t-lg">
        <h3 class='text-xl sm:text-2xl text-center font-semibold py-2 mb-4'>Courses we offer</h3>
        <div class="flex justify-evenly items-center flex-wrap">
            {#each courses as course}
            <a href={`/courses/${course.name.replace(/[\s]/, '-').toLowerCase()}`} class="block max-w-[600px] mt-10">
                <div class="flex items-center justify-center  h-[100px]">
                    <img src={`/assets${course.imgUrl}`} width="100px" height="100px" alt="">
                </div>
                <h5 class="text-center font-semibold">{course.name}</h5>
                <p class="texts-sm text-center max-w-[35ch]">
                    {course.description}
                </p>
            </a>
            {/each}
        </div>
    </div>
</div>