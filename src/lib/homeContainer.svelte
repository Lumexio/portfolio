<script>
  import { onMount } from "svelte";

  onMount(() => {
    function typeWriter(el) {
      const textArray = el.innerHTML.split("");
      el.innerHTML = "";
      textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
      );
    }
    let arrayCoder = [" frontend ", " backend ", " web "];
    let textArray = null;

    function changer(el) {
      el.innerHTML = "";
      arrayCoder.forEach((element, index) => {
        setTimeout(function () {
          document.getElementById("coder").classList.remove("coder");
          el.innerHTML = element;
          document.getElementById("coder").classList.add("coder");
        }, index * 8000);
      });
      setInterval(() => changer(el), 24000);
    }
    changer(document.getElementById("coder"));
    typeWriter(document.getElementById("elementEl"));
  });
</script>

<div id="Home" class="home-container-style ">
  <div>
    <h1 id="elementEl">Francisco Salazar Mendoza</h1>
    <h2>
      <code
        style="background-color:yellow;color:black"
        id="coder"
        class="coder"
      /> developer
    </h2>
  </div>

  <!-- <div class="featured">
    <h3>
      <div class="message ">
        <div class="word1">frontend</div>
        <div class="word2">backend</div>
        <div class="word3">web</div>
      </div>
      <span class="position-span">developer </span>
    </h3>
  </div> -->
</div>

<style>
  .home-container-style {
    display: grid;
    place-items: center;
    height: 100vh;
    /* grid-template-columns: repeat(1, minmax(5rem, 1fr)); */
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

  code {
    font-family: tahoma;
  }
  .coder {
    -webkit-animation: bounce-in 8s ease-in infinite normal;
    -moz-animation: bounce-in 8s ease-in infinite normal;
    -ms-animation: bounce-in 8s ease-in infinite normal;
    animation: bounce-in 8s ease-in infinite normal;
  }
  @-webkit-keyframes bounce-in {
    0% {
      opacity: 0;
      -webkit-transform: scale(0.3);
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    70% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes bounce-in {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
