<script>
  import Navbar from './lib/navbar.svelte';
  import HomeContainer from './lib/homeContainer.svelte';
  import KnowledgeContainer from './lib/knowledgeContainer.svelte';
  import ThreeDContainer from './lib/ThreeDContainer.svelte';
  import ContactContainer from './lib/contactContainer.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('mounted');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const targets = document.querySelectorAll('.hidden');
    targets.forEach((target) => {
      observer.observe(target);
    });
  });
</script>

<main>
  <Navbar />
  <HomeContainer />
  <KnowledgeContainer />
  <ContactContainer />
  <ThreeDContainer />
</main>

<style>
  .read-the-docs {
    color: #888;
  }
</style>
