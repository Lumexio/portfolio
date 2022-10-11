<script>

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
<<<<<<< HEAD
    box-shadow: -0.5rem 0.5rem 0 #fab700;
=======
    box-shadow: 0.5rem 0.5rem 0 #fab700;
>>>>>>> 4d6f1b6 (fix: Card contact 1 of 3 update)
    border: 3px solid #fab700;
  }
  .temp {
    display: grid;
<<<<<<< HEAD
    place-items: start;
=======
    place-items: center;
>>>>>>> 4d6f1b6 (fix: Card contact 1 of 3 update)
    grid-template-columns: repeat(1, minmax(5rem, 1fr));
  }
  input {
    outline: #e4e4e4;
    font-size: 1.1rem;
<<<<<<< HEAD
    margin: 0.5rem;
    width: 100%;
=======
>>>>>>> 4d6f1b6 (fix: Card contact 1 of 3 update)
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

<div id="Contact" class="home-container-style ">
  <div class="temp card">
<<<<<<< HEAD
    <h1>Talk to me</h1>
    <form
      style="text-align: right;"
      action="mailto:lumexio.dev@gmail.com"
      method="post"
      enctype="text/plain">
      <input type="text" placeholder="Subject" />
      <textarea type="text" placeholder="Messege" />
      <button type="submit" id="button-primary">Send</button>
    </form>
=======
    <h1 id="elementEl">How to reach me</h1>
    <input type="text" placeholder="Subject" />
>>>>>>> 4d6f1b6 (fix: Card contact 1 of 3 update)
  </div>
</div>
