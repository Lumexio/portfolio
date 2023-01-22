<script>
  // @ts-nocheck

  import sveltelogo from '../assets/svelte.svg'

  import gitlogo from '../assets/git.svg'
  import laravellogo from '../assets/laravel.svg'

  import linuxlogo from '../assets/linux.svg'
  import nodelogo from '../assets/node.svg'
  import vuelogo from '../assets/vue.svg'
  import vuetifyjslogo from '../assets/vuetifyjs.svg'

  import insomnialogo from '../assets/insomnia.svg'
  var root = document.querySelector(':root')
  var rootStyles = getComputedStyle(root)
  var time = rootStyles.getPropertyValue('--timesvelte')
  function randtimeanimation() {
    root.style.setProperty(
      '--timesvelte',
      Math.floor(Math.random() * 10) + 3 + 's',
    )

    root.style.setProperty(
      '--timegit',
      Math.floor(Math.random() * 10) + 3 + 's',
    )
    root.style.setProperty(
      '--timephp',
      Math.floor(Math.random() * 10) + 3 + 's',
    )

    root.style.setProperty(
      '--timelinux',
      Math.floor(Math.random() * 10) + 3 + 's',
    )
    root.style.setProperty(
      '--timenode',
      Math.floor(Math.random() * 10) + 3 + 's',
    )
    root.style.setProperty(
      '--timevue',
      Math.floor(Math.random() * 10) + 3 + 's',
    )
    root.style.setProperty(
      '--timevuetifyjs',
      Math.floor(Math.random() * 10) + 3 + 's',
    )

    root.style.setProperty(
      '--timeinsomnia',
      Math.floor(Math.random() * 10) + 3 + 's',
    )
  }
  randtimeanimation()
  setInterval(() => {
    randtimeanimation()
  }, 10000)

  let srcarray = [
    {
      src: sveltelogo,
      href: 'https://svelte.dev',
      alt: 'Svelte Logo',
      css: 'svelte',
      target: '_blank',
    },
    {
      src: vuelogo,
      href: 'https://v2.vuejs.org',
      alt: 'Vue Logo',
      css: 'vue',
      target: '_blank',
    },
    {
      src: vuetifyjslogo,
      href: 'https://vuetifyjs.com/en/',
      alt: 'Vuetifyjs Logo',
      css: 'vuetifyjs',
      target: '_blank',
    },

    {
      src: laravellogo,
      href: 'https://laravel.com/',
      alt: 'Laralvel Logo',
      css: 'laravel',
      target: '_blank',
    },
    {
      src: nodelogo,
      href: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
      alt: 'Node Logo',
      css: 'node',
      target: '_blank',
    },
    // {
    //   src: insomnialogo,
    //   href: 'https://insomnia.rest/',
    //   alt: 'Insomnia Logo',
    //   css: 'insomnia',
    //   target: '_blank',
    // },
    {
      src: gitlogo,
      href: 'https://git-scm.com/doc',
      alt: 'Git Logo',
      css: 'svelte',
      target: '_blank',
    },
    // {
    //   src: linuxlogo,
    //   href: 'https://linux.die.net/',
    //   alt: 'Linux Logo',
    //   css: 'linux',
    //   target: '_blank',
    // },
  ]
</script>

<style>
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
  .icons-space {
    margin: 1em;
  }

  .logo {
    height: 6em;

    will-change: filter;
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

  .logo.git:hover {
    filter: drop-shadow(0 0 3em #d48e0baa);
  }
  .logo.laravel:hover {
    filter: drop-shadow(0 0 2em #c441c4aa);
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
  .logo.insomnia:hover {
    filter: drop-shadow(0 0 2em #00aeffaa);
  }

  .logo.svelte::after,
  .logo.git::after,
  .logo.insomnia::after,
  .logo.linux::after,
  .logo.node::after,
  .logo.laravel::after,
  .logo.vue::after,
  .logo.vuetifyjs::after {
    content: '';
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
  .logo.git:hover,
  .logo.insomnia:hover,
  .logo.linux:hover,
  .logo.node:hover,
  .logo.laravel:hover,
  .logo.vue:hover,
  .logo.vuetifyjs:hover {
    -webkit-transform: scale(1.25, 1.25);
    transform: scale(1.25, 1.25);
  }

  /* Fade in the pseudo-element with the bigger shadow */
  .logo.svelte,
  .logo.git,
  .logo.insomnia,
  .logo.linux,
  .logo.node,
  .logo.laravel,
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
  .logo.laravel {
    animation: laravel-shadow 2s ease-in-out var(--timephp) infinite;
  }
  @-webkit-keyframes laravel-shadow {
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

  @keyframes laravel-shadow {
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

<div id="Knowledge" class=" glass">
  <h1>Hard skills</h1>
  <section class="grid-container icons-space">
    {#each srcarray as item}
      <div class="flex-logo">
        <a href={item.href} target={item.target}>
          <img
            src={item.src}
            class="logo {item.css}"
            alt={item.alt}
            href={item.href} />
        </a>
      </div>
    {/each}
  </section>
</div>
