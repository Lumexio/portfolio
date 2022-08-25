<script>
  import sveltelogo from "../assets/svelte.svg";
  import csslogo from "../assets/css3.svg";
  import jslogo from "../assets/js.svg";
  import gitlogo from "../assets/git.svg";
  import phplogo from "../assets/php.svg";
  import htmllogo from "../assets/html.svg";
  import linuxlogo from "../assets/linux.svg";
  import nodelogo from "../assets/node.svg";
  import vuelogo from "../assets/vue.svg";
  import vuetifyjslogo from "../assets/vuetifyjs.svg";
  import typescriptlogo from "../assets/typescript.svg";
  import insomnialogo from "../assets/insomnia.svg";
  let srcarray = [
    {
      src: sveltelogo,
      href: "https://svelte.dev",
      alt: "Svelte Logo",
      css: "svelte",
      target: "_blank",
    },
    {
      src: vuelogo,
      href: "https://svelte.dev",
      alt: "Vue Logo",
      css: "vue",
      target: "_blank",
    },
    {
      src: vuetifyjslogo,
      href: "https://svelte.dev",
      alt: "Vuetifyjs Logo",
      css: "vuetifyjs",
      target: "_blank",
    },
    {
      src: csslogo,
      href: "https://svelte.dev",
      alt: "Css Logo",
      css: "css",
      target: "_blank",
    },
    {
      src: htmllogo,
      href: "https://svelte.dev",
      alt: "Html Logo",
      css: "html",
      target: "_blank",
    },
    {
      src: jslogo,
      href: "https://svelte.dev",
      alt: "Java script Logo",
      css: "js",
      target: "_blank",
    },
    {
      src: typescriptlogo,
      href: "https://svelte.dev",
      alt: "Typescript Logo",
      css: "typescript",
      target: "_blank",
    },

    {
      src: phplogo,
      href: "https://svelte.dev",
      alt: "Php Logo",
      css: "php",
      target: "_blank",
    },
    {
      src: nodelogo,
      href: "https://svelte.dev",
      alt: "Node Logo",
      css: "node",
      target: "_blank",
    },
    {
      src: insomnialogo,
      href: "https://svelte.dev",
      alt: "Insomnia Logo",
      css: "insomnia",
      target: "_blank",
    },
    {
      src: gitlogo,
      href: "https://svelte.dev",
      alt: "Git Logo",
      css: "svelte",
      target: "_blank",
    },
    {
      src: linuxlogo,
      href: "https://svelte.dev",
      alt: "Linux Logo",
      css: "linux",
      target: "_blank",
    },
  ];
</script>

<div id="Knowledge" class="knowledge-container-style">
  <h1>My toolbox</h1>
  <section class="grid-container">
    {#each srcarray as item}
      <div class="flex-logo">
        <!-- <a href={item.href} target={item.target}> -->
        <img src={item.src} class="logo {item.css}" alt={item.alt} />
        <!-- </a> -->
      </div>
    {/each}
  </section>
</div>

<style>
  .grid-container {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
  }
  .flex-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
  }
  .knowledge-container-style {
    height: 100vh;
  }
  .logo {
    height: 6em;

    will-change: filter;
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .logo.css:hover {
    filter: drop-shadow(0 0 2em #006affaa);
  }
  .logo.js:hover {
    filter: drop-shadow(0 0 2em #33ff00aa);
  }
  .logo.git:hover {
    filter: drop-shadow(0 0 3em #d48e0baa);
  }
  .logo.php:hover {
    filter: drop-shadow(0 0 2em #c441c4aa);
  }
  .logo.html:hover {
    filter: drop-shadow(0 0 2em #f6ff00aa);
  }
  .logo.linux:hover {
    filter: drop-shadow(0 0 2em #00ffeaaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #00ff44aa);
  }
  .logo.vuetifyjs:hover {
    filter: drop-shadow(0 0 2em #009dffaa);
  }
  .logo.node:hover {
    filter: drop-shadow(0 0 2em #00ff48aa);
  }
  .logo.insomnia:hover {
    filter: drop-shadow(0 0 2em #3752ffaa);
  }
  .logo.typescript:hover {
    filter: drop-shadow(0 0 2em #d400ffaa);
  }
  .logo.insomnia:hover {
    filter: drop-shadow(0 0 2em #00aeffaa);
  }
  /* ul li {
    list-style-type: none;
    display: inline-block;
    padding: 10px 20px;
  } */
</style>
