<script>
  import { onMount } from "svelte";

  onMount(() => {
    /**
     * @param {HTMLElement} el
     */
    function typeWriter(el) {
      const textArray = el.innerHTML.split("");
      el.innerHTML = "";
      textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
      );
    }

    let arrayCoder = ["frontend", "backend", "web"];

    let interval = 1000;
    let tagid = document.getElementById("codertag");

    let i = 0;

    /**
     * @param {HTMLElement} el
     */
    function changer(el) {
      el.innerHTML = arrayCoder[0];

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
    typeWriter(document.getElementById("elementEl"));
  });
</script>

<div id="Home" class="home-container-style ">
  <div class="temp glass">
    <h1 id="elementEl">Francisco Salazar Mendoza</h1>
    <h2>
      <code id="codertag" />
    </h2>
    <h2>developer</h2>
  </div>
</div>

<style>
  h1,
  h2 {
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

  #elementEl::after {
    content: "|";
    margin-left: 5px;
    animation: blink 0.7s infinite;
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
    background-color: yellow;
    color: black;
    border-radius: 5px;
    padding: 3px;
  }
  code {
    font-family: tahoma;
  }
</style>
