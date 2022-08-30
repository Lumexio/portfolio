<script>
  // @ts-nocheck

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
  var root = document.querySelector(":root");
  var rootStyles = getComputedStyle(root);
  var time = rootStyles.getPropertyValue("--timesvelte");
  function randtimeanimation() {
    root.style.setProperty(
      "--timesvelte",
      Math.floor(Math.random() * 10) + 3 + "s"
    );
    root.style.setProperty(
      "--timecss",
      Math.floor(Math.random() * 10) + 3 + "s"
    );
    root.style.setProperty(
      "--timejs",
      Math.floor(Math.random() * 10) + 3 + "s"
    );
    root.style.setProperty(
      "--timegit",
      Math.floor(Math.random() * 10) + 3 + "s"
    );
    root.style.setProperty(
      "--timephp",
      Math.floor(Math.random() * 10) + 3 + "s"
    );
    root.style.setProperty(
      "--timehtml",
      Math.floor(Math.random() * 10) + 3 + "s"
    );
    root.style.setProperty(
      "--timelinux",
      Math.floor(Math.random() * 10) + 3 + "s"
    );
    root.style.setProperty(
      "--timenode",
      Math.floor(Math.random() * 10) + 3 + "s"
    );
    root.style.setProperty(
      "--timevue",
      Math.floor(Math.random() * 10) + 3 + "s"
    );
    root.style.setProperty(
      "--timevuetifyjs",
      Math.floor(Math.random() * 10) + 3 + "s"
    );
    root.style.setProperty(
      "--timetypescript",
      Math.floor(Math.random() * 10) + 3 + "s"
    );
    root.style.setProperty(
      "--timeinsomnia",
      Math.floor(Math.random() * 10) + 3 + "s"
    );
  }
  randtimeanimation();
  setInterval(() => {
    randtimeanimation();
  }, 10000);

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
  .logo.svelte::after,
  .logo.css::after,
  .logo.git::after,
  .logo.html::after,
  .logo.insomnia::after,
  .logo.js::after,
  .logo.linux::after,
  .logo.node::after,
  .logo.php::after,
  .logo.typescript::after,
  .logo.vue::after,
  .logo.vuetifyjs::after {
    content: "";
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .logo.svelte:hover,
  .logo.css:hover,
  .logo.git:hover,
  .logo.html:hover,
  .logo.insomnia:hover,
  .logo.js:hover,
  .logo.linux:hover,
  .logo.node:hover,
  .logo.php:hover,
  .logo.typescript:hover,
  .logo.vue:hover,
  .logo.vuetifyjs:hover {
    -webkit-transform: scale(1.25, 1.25);
    transform: scale(1.25, 1.25);
  }

  /* Fade in the pseudo-element with the bigger shadow */
  .logo.svelte,
  .logo.css,
  .logo.git,
  .logo.html,
  .logo.insomnia,
  .logo.js,
  .logo.linux,
  .logo.node,
  .logo.php,
  .logo.typescript,
  .logo.vue,
  .logo.vuetifyjs:hover::after {
    opacity: 1;
  }
  .logo.svelte {
    animation: svlete-shadow 2s ease-in-out var(--timesvelte) infinite;
  }
  @-webkit-keyframes svlete-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #ff3e00aa);
    }
    100% {
      filter: none;
    }
  }

  @keyframes svlete-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #ff3e00aa);
    }
    100% {
      filter: none;
    }
  }
  .logo.css {
    animation: css-shadow 2s ease-in-out var(--timecss);
  }
  @-webkit-keyframes css-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #006affaa);
    }
    100% {
      filter: none;
    }
  }

  @keyframes css-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #006affaa);
    }
    100% {
      filter: none;
    }
  }
  .logo.git {
    animation: git-shadow 2s ease-in-out var(--timegit) infinite;
  }
  @-webkit-keyframes git-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 3em #d48e0baa);
    }
    100% {
      filter: none;
    }
  }

  @keyframes git-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 3em #d48e0baa);
    }
    100% {
      filter: none;
    }
  }
  .logo.html {
    animation: html-shadow 2s ease-in-out var(--timehtml) infinite;
  }
  @-webkit-keyframes html-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #f6ff00aa);
    }
    100% {
      filter: none;
    }
  }

  @keyframes html-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #f6ff00aa);
    }
    100% {
      filter: none;
    }
  }
  .logo.insomnia {
    animation: insomnia-shadow 2s ease-in-out var(--timeinsomnia) infinite;
  }
  @-webkit-keyframes insomnia-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #00aeffaa);
    }
    100% {
      filter: none;
    }
  }

  @keyframes insomnia-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #00aeffaa);
    }
    100% {
      filter: none;
    }
  }
  .logo.js {
    animation: js-shadow 2s ease-in-out var(--timejs) infinite;
  }
  @-webkit-keyframes js-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #33ff00aa);
    }
    100% {
      filter: none;
    }
  }

  @keyframes js-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #33ff00aa);
    }
    100% {
      filter: none;
    }
  }
  .logo.linux {
    animation: linux-shadow 2s ease-in-out var(--timelinux) infinite;
  }
  @-webkit-keyframes linux-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #00ffeaaa);
    }
    100% {
      filter: none;
    }
  }

  @keyframes linux-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #00ffeaaa);
    }
    100% {
      filter: none;
    }
  }
  .logo.node {
    animation: node-shadow 2s ease-in-out var(--timenode) infinite;
  }
  @-webkit-keyframes node-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #ff3e00aa);
    }
    100% {
      filter: none;
    }
  }

  @keyframes node-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #ff3e00aa);
    }
    100% {
      filter: none;
    }
  }
  .logo.php {
    animation: php-shadow 2s ease-in-out var(--timephp) infinite;
  }
  @-webkit-keyframes php-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #c441c4aa);
    }
    100% {
      filter: none;
    }
  }

  @keyframes php-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #c441c4aa);
    }
    100% {
      filter: none;
    }
  }
  .logo.typescript {
    animation: typescript-shadow 2s ease-in-out var(--timetypescript) infinite;
  }
  @-webkit-keyframes typescript-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #d400ffaa);
    }
    100% {
      filter: none;
    }
  }

  @keyframes typescript-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #d400ffaa);
    }
    100% {
      filter: none;
    }
  }
  .logo.vue {
    animation: vue-shadow 2s ease-in-out var(--timevue) infinite;
  }
  @-webkit-keyframes vue-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #00ff44aa);
    }
    100% {
      filter: none;
    }
  }

  @keyframes vue-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #00ff44aa);
    }
    100% {
      filter: none;
    }
  }
  .logo.vuetifyjs {
    animation: vuetifyjs-shadow 2s ease-in-out var(--timevuetifyjs) infinite;
  }
  @-webkit-keyframes vuetifyjs-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #009dffaa);
    }
    100% {
      filter: none;
    }
  }

  @keyframes vuetifyjs-shadow {
    0% {
      filter: none;
    }
    50% {
      filter: drop-shadow(0 0 2em #009dffaa);
    }
    100% {
      filter: none;
    }
  }
</style>
