<script>
  import { onMount } from 'svelte';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import * as SC from 'svelte-cubed';
  import * as THREE from 'three';

  const modelURL = import.meta.env.PROD
    ? '/Spaceship_fire_red.glb'
    : '/public/Spaceship_fire_red.glb';
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

  let spinx = 0.2;
  let spiny = -0.3;
  let spinz = 0;

  const X_ROTATION_RANGE = 0.1; // Limit x rotation to ±0.2 radians (~11.5 degrees)
  const Z_ROTATION_RANGE = 0.1; // Limit z rotation to ±0.1 radians (~5.7 degrees)
  SC.onFrame(() => {
    // Calculate rotation with limited ranges
    spinx = Math.cos(Date.now() * -0.002) * X_ROTATION_RANGE;
    //spiny += 0.005; // Continuous slow rotation on Y axis
    spinz = Math.cos(Date.now() * -0.0005) * Z_ROTATION_RANGE; // Slower, more constrained Z rotation
  });
</script>

{#if model}
  <SC.Primitive
    position="{[0.5, 0, 5.5]}"
    rotation="{[spinx, spiny, spinz]}"
    object="{model.scene}"
    scale="{[width, height, depth]}"
  />
{/if}
