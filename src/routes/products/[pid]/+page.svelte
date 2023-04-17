<script lang="ts">
	/** @type {import('./$types').PageData} */

	import {addItem } from '$store/basket';

	export let data;
	
	$: ({product} = data);

	let quantity = 1;

	function increment() {
		quantity += 1;
	}
	function decrement() {
		if (quantity === 1) return;
		quantity -= 1;
	}

	function addProduct() {
        if (product){
            product.qty = quantity;
            addItem({
                _id: product._id,
	name: product.name,
	imgUrl: product.imgUrl,
	hint: product.hint,
	price: Number(product.price),
        qty: product.qty,
            });
        }
	}


    function getPrice(){
        var a = Math.floor(Math.random() * 100)
        var b = Math.floor(Math.random() * 102)

        var c = `${a}.${b}`

        return String(Number(c).toFixed(2))

    }

</script>

<div class="mt-8 w-full" />

<div class="min-h-[100vh]">
	<div class="product-detail px-4 mx-auto lg:max-w-[95%] w-full">
		<div class="flex gap-4  justity-center w-full flex-col md:flex-row">
			<div class="w-full flex-1 max-w-[520px]">
				<div
					class="flex-1 block w-full bg-white shadow-md rounded-lg p-2 sm:p-4 lg:p-8 sm:min-w-[300px] min-h-[300px]"
				>
					<div class="w-full flex justify-center items-center min-h-[265px]">
						<img src={`/assets${product?.imgUrl}`} alt={product?.altText || 'product'} />
					</div>
				</div>
				<!-- <div class="w-full px-4">
					<div class=""><h5 class="font-semibold text-center pb-2">Samples</h5></div>
					<div
						class="product-samples inline-flex h-max justify-around w-full flex-wrap gap-2 items-center"
					>
						<div data-sample class="flex-none active shadow">
							<img src="/images (1).jfif" alt="sample 1" />
						</div>
						<div data-sample class="flex-none shadow">
							<img src="/images (2).jfif" alt="sample 2" />
						</div>
						<div data-sample class="flex-none shadow">
							<img src="/images (3).jfif" alt="sample 3" />
						</div>
						<div data-sample class="flex-none shadow">
							<img src="/images (4).jfif" alt="sample 4" />
						</div>
					</div>
				</div> -->
			</div>
			<div class="pt-0 self-center flex-1 w-full max-w-[520px]">
				<h2 class="text-xl md:text-2xl text-center md:text-left font-semibold tracking-wide">
					{product?.outline.title || product?.name}
				</h2>

				<div class="reviews flex items-center justify-center md:justify-start gap-[1px]">
					<!-- {#each Array(product.reviews[0]) as review}
						<span class="red-star">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
								><path
									d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
								/></svg
							>
						</span>
					{/each} -->
					<!-- {#each Array(product.reviews[1]) as review}
						<span class="">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								><path
									d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
								/></svg
							>
						</span>
					{/each} -->
					<!-- <span class="pl-2 text-sm ">(107)</span> -->
				</div>

				<div class="mt-4 ">
                    <div class="text-left">
                        {#if product?.outline.heading}
                            <p class="max-w-[55ch] desc">
                                {product?.outline.heading || ''}
                            </p>
                            <!-- <br> -->
                            <h4 class="font-semibold pt-4 ">About this product:</h4>
                            <p class="max-w-[55ch] desc">
                        
                                {product?.outline.paragraph}
                            </p>
                        {:else}
                            <p class="max-w-[55ch] desc">
                                {product?.hint}
                            </p>
                        {/if}
					</div>
				</div>

				<div class="mt-4 w-full">
					<p class="text-lg inline-flex gap-4">
						<span class="font-semibold">Price:</span>
						<span class="font-bold">${getPrice()}</span>
					</p>
				</div>
				<div class="mt-4 quantity inline-flex flex-wrap gap-4 justify-between w-full">
					<p class="text-lg inline-flex items-center">
						<span class="font-semibold text-sm tracking-wide pr-4"> Quantity: </span>
						<button
							on:click={decrement}
							title="Decrement"
							class="font-semibold min-w-[40px] text-center text-lg border-[1px] border-gray-400 transition hover:bg-slate-300 active:bg-sky-400"
							>-</button
						>
						<span
							title={`quantity: ${quantity}`}
							class="font-bold inline-block text-center bg-slate-200 min-w-[45px] text-lg border-[1px] border-gray-400 border-x-0"
							>{quantity}</span
						>
						<button
							on:click={increment}
							title="Increment"
							class="font-semibold min-w-[40px] text-center text-lg border-[1px] border-gray-400 transition hover:bg-slate-300 active:bg-sky-400"
							>+</button
						>
					</p>
					<div class="flex-1 flex min-w-max">
						<div class="inline-flex items-center gap-4">
							<button
								on:click={addProduct}
								class="border-sky-400 hover:text-slate-100 transition hover:border-sky-500 border-[2px] hover:bg-sky-500 px-4 py-2 rounded-md font-semibold text-sky-500"
							>
								Add to cart</button
							>
							<button
								class="bg-sky-400 transition border-sky-400 hover:border-sky-500 hover:bg-sky-500 px-4 py-2 rounded-md font-semibold text-slate-100"
								>Buy now!</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="block overflow-x-auto">
		<!-- <ProductList
			items={{
				tag: 'Recommended for you',
				products
			}}
		/>
		<ProductList
			items={{
				products
			}}
		/> -->
	</div>
	<div class="block overflow-x-auto">
		<!-- <ProductList
			items={{
				tag: 'People also buy',
				products
			}}
		/>
		<ProductList
			items={{
				products
			}}
		/> -->
	</div>
</div>

<style>
	img {
		height: auto;
		width: auto;
		max-width: 430px;
		/* border: 1px solid rgba(128, 128, 128, 0.219); */
		border-radius: 0.5em;
	}

	.reviews .red-star svg {
		fill: #f95a5a;
	}

	.reviews svg {
		margin-top: 0.5em;
		width: 1em;
		height: 1em;
	}

	.desc {
		display: -webkit-box;
		/* -webkit-line-clamp: 10; */
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.product-samples img {
		width: auto;
		height: auto;
		/* object-fit: cover; */
		max-width: 60px;
		max-height: 60px;
	}
	.product-samples [data-sample] {
		background-color: white;
		display: flex;
		/* padding: 0.3em; */
		justify-content: center;
		width: 80px;
		height: 80px;
		align-items: center;
		border-radius: 0.5em;
		cursor: pointer;
		position: relative;
		/* width:90 */
	}

	.product-samples [data-sample]:after {
		position: absolute;
		content: '';
		bottom: 0;
		left: 0;
		width: 100%;
		height: 70%;
		z-index: -10;
		transition: background-color 150ms ease-in-out;
		border-bottom-left-radius: 0.5em;
		border-bottom-right-radius: 0.5em;
	}
	.product-samples [data-sample]:hover::after {
		background: linear-gradient(to top, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.02));
		/* background: linear-gradient(to top, red, green); */
		cursor: pointer;
		z-index: 1;
	}

	.product-samples [data-sample].active {
		outline: 1px solid #64baec;
	}
</style>
