<script>
  import { onMount } from 'svelte';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import * as SC from 'svelte-cubed';

  const modelURL = '/public/ship_alternative.glb';
  let model = null;
  let width = 1;
  let height = 1;
  let depth = 1;
  function loadGLTF() {
    const loader = new GLTFLoader();
    return loader.loadAsync(modelURL);
  }
  onMount(() => {
    loadGLTF().then((_model) => (model = _model));
  });
</script>

{#if model}
  <SC.Primitive
    position="{[-6, 1, 0]}"
    rotation="{[0, 1.5, 0]}"
    object="{model.scene}"
    scale="{[width, height, depth]}"
  />
{/if}
