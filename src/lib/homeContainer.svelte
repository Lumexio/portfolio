<script>
</script>

<div id="Home" class="home-container-style flex">
  <div class="column">
    <div class="row">
      <h1 class="type-effect">Francisco Salazar Mendoza</h1>
    </div>
    <div class="row">
      <h3>
        <div class="message ">
          <div class="word1">frontend</div>
          <div class="word2">backend</div>
          <div class="word3">web</div>
        </div>
        <span class="position-span">developer </span>
      </h3>
    </div>
  </div>
</div>

<style>
  .flex {
    display: flex;
  }
  .row {
    flex-direction: row;
  }
  .column {
    flex-direction: column;
  }

  .home-container-style {
    height: 100vh;

    justify-content: center;
    align-items: center;
  }

  .type-effect {
    overflow: hidden; /* Se asegura de que el contenido no sea renderizado hasta el final de la animación */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 6.5s steps(40, end),
      blink-caret 800ms steps(44) infinite normal;
  }
  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }

  h3 {
    color: #333;
    font-family: tahoma;
    font-size: 3rem;
    font-weight: 100;
    line-height: 1.5;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    width: 800px;
  }

  .message {
    background-color: yellow;
    color: #333;
    display: block;
    font-weight: 900;
    overflow: hidden;
    position: absolute;
    padding-left: 0.5rem;
    top: 0.2rem;
    right: 370px;
    animation: openclose 8s ease-in-out infinite;
  }
  .position-span {
    margin-left: 21rem;
  }
  span {
    color: white;
  }
  .word1,
  .word2,
  .word3 {
    font-family: tahoma;
  }

  @keyframes openclose {
    0% {
      top: 0.2rem;
      width: 0;
    }
    5% {
      width: 0;
    }
    15% {
      width: 285px;
    }
    30% {
      top: 0.2rem;
      width: 285px;
    }
    33% {
      top: 0.2rem;
      width: 0;
    }
    35% {
      top: 0.2rem;
      width: 0;
    }
    38% {
      top: -4.5rem;
    }
    48% {
      top: -4.5rem;
      width: 285px;
    }
    62% {
      top: -4.5rem;
      width: 285px;
    }
    66% {
      top: -4.5rem;
      width: 0;
      text-indent: 0;
    }
    71% {
      top: -9rem;
      width: 0;
      text-indent: 5px;
    }
    86% {
      top: -9rem;
      width: 185px;
    }
    95% {
      top: -9rem;
      width: 185px;
    }
    98% {
      top: -9rem;
      width: 0;
      text-indent: 5px;
    }
    100% {
      top: 0;
      width: 0;
      text-indent: 0;
    }
  }
</style>
