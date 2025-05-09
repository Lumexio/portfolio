<script>
  import SvgIcon from '@jamescoyle/svelte-icon';
  import { mdiGithub, mdiLinkedin } from '@mdi/js';
  const srcarray = [
    {
      path: mdiGithub,
      src: 'https://github.com/Lumexio',
    },
    {
      path: mdiLinkedin,
      src: 'https://www.linkedin.com/in/francisco-salazar-mendoza/',
    },
  ];
</script>

<div class="home-container-style">
  <div id="Contact" class="temp card hidden">
    <h1>Contact me</h1>
    <div class="row-icon">
      <form
        style="text-align: right;"
        action="mailto:lumexio.dev@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <button type="submit" id="button-primary">Email me</button>
      </form>
      {#each srcarray as item}
        <button
          id="button-primary"
          style="padding: .3rem .7rem ;"
          on:click="{() => window.open(item.src, '_blank')}"
          ><SvgIcon type="mdi" path="{item.path}"></SvgIcon></button
        >
      {/each}
    </div>
  </div>
</div>

<style scoped>
  #Contact {
    margin: 2rem;
  }

  .home-container-style {
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;

    align-items: center;
    justify-items: right;
  }
  .card {
    background-color: #212121;

    border: 3px solid #fab700;
    border-radius: 1rem;
  }
  .temp {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(1, minmax(5rem, 1fr));
  }
  input {
    outline: #e4e4e4;
    font-size: 1.1rem;
    margin: 0.5rem;
    width: 100%;
  }
  input:hover {
    outline: #fab700;
    outline-width: 4px;
    outline-style: double;
    border-radius: 2px;
  }
  textarea {
    width: 100%;
    min-height: 100px;
    outline: #e4e4e4;
    font-size: 1.1rem;
    margin: 0.5rem;
  }
  textarea:hover {
    outline: #fab700;
    outline-width: 4px;
    outline-style: double;
    border-radius: 2px;
  }

  #button-primary {
    border-radius: 0.8em;
    background-color: #fab700;
    color: black;
    margin: 0.5rem;
  }
  #button-primary:hover {
    border-color: #e7fa00;
  }
  #button-primary:active {
    background-color: #e7fa00;
  }
  .row-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
</style>
