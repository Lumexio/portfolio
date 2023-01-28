<script>
  
import SvgIcon from '@jamescoyle/svelte-icon';
import { mdiGithub } from '@mdi/js';
</script>

<style>
  h1 {
    margin: 1em;
  }
  .home-container-style {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  .card {
    background-color: #212121;
    box-shadow: -0.5rem 0.5rem 0 #fab700;
    border: 3px solid #fab700;
    border-radius: 1rem;
    
  }
  .temp {
    display: grid;
    place-items: start;
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
  #button-primary:active {
    background-color: #e7fa00;
  }
  
</style>

<div id="Contact" class="home-container-style  hidden">
  <div class="temp card">
    <h1>Contact me</h1>
    <form style="text-align: right;"   >
      
      <button  type="submit" id="button-primary"  action="mailto:lumexio.dev@gmail.com" method="post" enctype="text/plain">Email me</button>
    </form>
    <button id="button-primary" style="padding: .2rem .7rem ;"><SvgIcon type="mdi" path={mdiGithub}></SvgIcon></button>
  </div>
</div>
