
<script lang='ts'>
    export let courses: any = []

</script>

<div class="max-w-[1200px] mx-auto pt-[50px]">
    <div id="courses" class="w-full pt-[70px] p-4 rounded-t-lg">
        <h3 class='text-xl sm:text-2xl text-center font-bold py-2 mb-4'>Our Courses</h3>
        <div class="flex justify-evenly items-center flex-wrap">
            {#each courses as course}
            <div class="max-w-[600px] mt-10">
                <div class="flex items-center justify-center  h-[100px]">
                    <img src={`/assets${course.imgUrl}`} width="100px" height="100px" alt="">
                </div>
                <h5 class="text-center font-semibold">{course.name}</h5>
                <p class="texts-sm text-center max-w-[35ch]">
                    {course.description}
                </p>
            </div>
            {/each}
        </div>
    </div>
</div>