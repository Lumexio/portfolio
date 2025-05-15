<script>
  import { onMount } from 'svelte';

  onMount(() => {
    /**
     * @param {HTMLElement} el
     */
    function typeWriter(el) {
      const textArray = el.innerHTML.split('');
      el.innerHTML = '';
      textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
      );
    }

    let arrayCoder = ['frontend', 'backend', 'web'];

    let interval = 3000;
    let tagid = document.getElementById('codertag');

    let i = 0;

    /**
     * @param {HTMLElement} el
     */
    function changer(el) {
      el.innerHTML = arrayCoder[0];
      // i  want to put a fade in and out effect
  
  el.classList.add('fade-in');
      setTimeout(() => {
        el.classList.remove('fade-in');
      }, 2000);
       
       
 
      setInterval(() => {
        i++;
        if (i > 2) {
          i = 0;
        }

        switch (i) {
          case 0:
            el.innerHTML = arrayCoder[i];

            break;
          case 1:
            el.innerHTML = arrayCoder[i];

            break;
          case 2:
            el.innerHTML = arrayCoder[i];

            break;
        }
      }, interval);
    }

    changer(tagid);
    // typeWriter(document.getElementById("elementEl"));
  });
</script>

<div class="home-container-style">
  <div id="Home" class=" hidden">
    <h1 id="elementEl">Francisco Salazar Mendoza</h1>
    <h2>
      <code id="codertag"></code>
      developer
    </h2>
  </div>
</div>

<style scoped>
  .home-container-style {
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }

  #elementEl::after {
    content: '|';
    margin-left: 5px;
    animation: blink 0.9s infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  #codertag {
    background-color: #fab700;
    color: black;
    border-radius: 5px;
    padding: 6px;
    
  }

  code {
    font-family: 'Cascadia code';
  }


  
</style>
