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
    box-shadow: -0.5rem 0.5rem 0 #fab700;
    border: 3px solid #fab700;
  }
  .temp {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(1, minmax(5rem, 1fr));
  }
  input {
    outline: #e4e4e4;
    font-size: 1.1rem;
    margin: 0.5rem;
  }
  input:hover {
    outline: #fab700;
    outline-width: 4px;
    outline-style: double;
    border-radius: 2px;
  }
  textarea {
    min-width: 280px;
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
</style>

<div id="Contact" class="home-container-style ">
  <div class="temp card">
    <h1 id="elementEl">How to reach me</h1>
    <input type="email" placeholder="Email" />
    <input type="text" placeholder="Subject" />
    <textarea placeholder="Messege" />
  </div>
</div>
