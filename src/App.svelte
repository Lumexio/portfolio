<script>
  import Navbar from "./lib/navbar.svelte";
  import HomeContainer from "./lib/homeContainer.svelte";
  import KnowledgeContainer from "./lib/knowledgeContainer.svelte";
  import ProyectsContainer from "./lib/ProyectsContainer.svelte";
</script>

<main>
  <Navbar />
  <HomeContainer />
  <KnowledgeContainer />
  <ProyectsContainer />

  <!-- <div class="card">
    
  </div> -->

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .read-the-docs {
    color: #888;
  }
</style>
