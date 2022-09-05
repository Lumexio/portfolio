<script>
  import Navbar from "./lib/navbar.svelte";
  import HomeContainer from "./lib/homeContainer.svelte";
  import KnowledgeContainer from "./lib/knowledgeContainer.svelte";
  import ThreeDContainer from "./lib/ThreeDContainer.svelte";
  import ContactContainer from "./lib/contactContainer.svelte";
</script>

<main>
  <Navbar />
  <HomeContainer />
  <KnowledgeContainer />
  <ContactContainer />
  <ThreeDContainer />

  <!-- <div class="card">
    
  </div> -->

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .read-the-docs {
    color: #888;
  }
</style>
