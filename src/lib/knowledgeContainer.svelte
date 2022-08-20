<script>
  import svelteLogo from "../assets/svelte.svg";
</script>

<div id="Knowledge" class="knowledge-container-style">
  <h1>My toolbox</h1>
  <ul>
    <li>
      <a href="https://svelte.dev" target="_blank">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </li>
    <li>
      <a href="https://svelte.dev" target="_blank">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </li>
    <li>
      <a href="https://svelte.dev" target="_blank">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </li>
  </ul>
</div>

<style>
  .knowledge-container-style {
    height: 100vh;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  ul li {
    list-style-type: none;
    display: inline-block;
    padding: 10px 20px;
  }
</style>
