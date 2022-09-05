<script>
</script>

<div id="Contact" class="home-container-style ">
  <div class="temp glass">
    <h1 id="elementEl">How to reach me</h1>
  </div>
</div>

<style>
  h1 {
    margin: 1em;
  }
  .home-container-style {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  .glass {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
  }
  .temp {
    display: grid;
    place-items: center;

    grid-template-columns: repeat(1, minmax(5rem, 1fr));
  }
</style>
