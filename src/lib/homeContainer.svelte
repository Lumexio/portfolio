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
    //document.getElementById("coder").classList.add("coder");
    //document.getElementById("coder").classList.remove("coder");
    // el.innerHTML = "";
    //el.innerHTML = element;
    let arrayCoder = ["frontend", "backend", "web"];
    //let textArray = null;
    let interval = 8000;
    let flag = true;
    let i = 0;
    function changer(el) {
      el.innerHTML = "";

      // while (flag == true) {
      setInterval(() => {
        el.innerHTML = arrayCoder[i];
        console.log(el.innerHTML);
        i++;
      }, i * interval);
    }
    // }

    changer(document.getElementById("coder"));
    typeWriter(document.getElementById("elementEl"));
  });
</script>

<div id="Home" class="home-container-style ">
  <div>
    <h1 id="elementEl">Francisco Salazar Mendoza</h1>
    <h1>
      <code
        style="background-color:yellow;color:black;margin-left:1em"
        id="coder"
      /><spacer type="block" width="20" />developer
    </h1>
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
</style>
