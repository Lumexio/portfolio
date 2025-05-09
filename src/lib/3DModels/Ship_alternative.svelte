<script>
  import { onMount } from 'svelte';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import * as SC from 'svelte-cubed';

  const modelURL = import.meta.env.PROD
    ? '/ship_alternative.glb'
    : '/public/ship_alternative.glb';
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

  let spinx = 0.1;
  let spiny = 0.4;
  let spinz = 0;

  const X_ROTATION_RANGE = 0.1;
  const Z_ROTATION_RANGE = 0.1;

  SC.onFrame(() => {
    spiny += Math.cos(Date.now() * -0.001) * X_ROTATION_RANGE;
    spinz = Math.cos(Date.now() * -0.0005) * Z_ROTATION_RANGE;
  });
</script>

{#if model}
  <SC.Primitive
    position="{[-1, -1, 12]}"
    rotation="{[spinx, spiny, spinz]}"
    object="{model.scene}"
    scale="{[width, height, depth]}"
  />
{/if}
