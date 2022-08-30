<script>
  // @ts-ignore
  import { onMount } from "svelte";

  onMount(() => {
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
    function changer(el) {
      // el.innerHTML = "";
      // tagid.classList.add("coder");
      el.innerHTML = arrayCoder[0];

      setInterval(() => {
        i++;
        if (i > 2) {
          i = 0;
        }
        tagid.classList.add("coder");
        switch (i) {
          case 0:
            tagid.classList.remove("coder");
            tagid.classList.toggle("coder");
            el.innerHTML = arrayCoder[i];

            break;
          case 1:
            tagid.classList.remove("coder");
            tagid.classList.toggle("coder");
            el.innerHTML = arrayCoder[i];

            break;
          case 2:
            tagid.classList.remove("coder");
            tagid.classList.toggle("coder");
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
  <div class="temp">
    <h1 id="elementEl">Francisco Salazar Mendoza</h1>
    <h2>
      <code id="codertag" />
    </h2>
    <h2>developer</h2>
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
