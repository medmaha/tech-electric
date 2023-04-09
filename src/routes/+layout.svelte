<script>
  import "../app.css";
	import Footer from "../components/global/footer.svelte";
	import Navbar from "../components/global/navbar.svelte";
	import SecondaryDav from "../components/global/secondaryDav.svelte";
</script>


<div class="bg-slate-100 m-0">
  <SecondaryDav/>
  <Navbar/>


  <main class="w-full">
    <slot />
  </main>

  <footer class="text-sm leading-6 mt-16">
    <div class="max-w-[1200px] px-2 sm:px-4 mx-auto">
      <Footer/>
    </div>
  </footer>
</div>





<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;600;700&display=swap');

</style>
