<script lang="ts">
    import type {Product} from '../../database'

    export let data:Product
    
</script>


<div class="product shadow-lg rounded-lg p-1 md:p-3 min-w-[120px] basis-[200px]">
    <div class="product-img w-full h-[110px] sm:h-[150px]">
        <img src={`/assets/${data.imgUrl}`} alt={data.altText} class="max-w-[100px] sm:max-w-[140px] max-h-[100px] sm:max-h-[140px] h-auto w-full">
    </div>
    <div class="product-name">
        <p title={data.name} class="py-1 mb-2 font-semibold text-sm sm:text-base text-center max-w-[180px] truncate px-1 sm:p-0">{data.name}</p>
    </div>
    <div class="product-desc mb-2 w-full flex-1">
        <p title={data.hint} class="text-sm w-full text-center px-2 sm:px-0 max-w-full">
            {data.hint}
        </p>
    </div>
    <a href="/#" class="text-center text-sm tracking-wide text-green-500 hover:text-green-600 transition">More details!</a>
</div>


<style>
    .product{
        display: flex;
        justify-content: center;
        flex-direction: column;
        background: white;
    }
    .product-img{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .product-desc p{
        max-height: 110px;

        font-family: "Poppins","Arial",sans-serif;
        overflow: hidden;
        display: block;
        /* max-height: 4.4rem; */
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        white-space: normal;
    }


  
</style>