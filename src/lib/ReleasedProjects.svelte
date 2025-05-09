<script></script>

<div class="home-container-style">
  <div id="Home" class=" hidden">
    <h1>Released projects</h1>
    <button
      id="button-primary"
      style="padding: 1rem 2rem; margin: 1rem"
      on:click="{() => window.open('https://stockmachine.online', '_blank')}"
    >
      StockMachine
    </button>
  </div>
</div>

<style scoped>
  .home-container-style {
    height: 100vh;
    width: 100%;
    align-items: center;
    display: grid;
    justify-items: end;
  }
  #Home {
    margin: 2rem;
  }
</style>
