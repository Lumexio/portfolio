<script>
  import { onMount } from 'svelte';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import * as SC from 'svelte-cubed';
  import * as THREE from 'three';
  const modelURL = import.meta.env.PROD ? '/ship.glb' : '/public/ship.glb';
  let model = null;
  let width = 1;
  let height = 1;
  let depth = 1;
  function loadGLTF() {
    const loader = new GLTFLoader();
    return loader
      .loadAsync(modelURL)
      .catch((error) => {
        console.error('Error loading GLTF model:', error);
        alert(
          'Failed to load the model. Please check the console for details.'
        );
        throw error;
      })
      .finally(() => {
        console.log('GLTF model loading completed');
      });
  }
  onMount(() => {
    loadGLTF().then((_model) => (model = _model));
  });

  let spinx = 0.3;
  let spiny = -0.1;
  let spinz = 1;

  const X_ROTATION_RANGE = 0.1; // Limit x rotation to ±0.2 radians (~11.5 degrees)
  const Z_ROTATION_RANGE = 0.2; // Limit z rotation to ±0.1 radians (~5.7 degrees)

  SC.onFrame(() => {
    // Calculate rotation with limited ranges
    //spinx = Math.cos(Date.now() * 0.001) * X_ROTATION_RANGE;
    //spiny += 0.005; // Continuous slow rotation on Y axis
    spinz = Math.cos(Date.now() * 0.0005) * Z_ROTATION_RANGE; // Slower, more constrained Z rotation
  });
</script>

{#if model}
  <SC.Primitive
    position="{[-1, -0.5, -4]}"
    rotation="{[spinx, spiny, spinz]}"
    object="{model.scene}"
    scale="{[width, height, depth]}"
  />
{:else}
  <!-- Loading placeholder -->
  <SC.Mesh
    geometry="{new THREE.BoxGeometry(0.5, 0.5, 0.5)}"
    material="{new THREE.MeshStandardMaterial({
      color: 0x888888,
      transparent: true,
      opacity: 0.7,
      wireframe: true,
    })}"
    position="{[-1, 0, -4]}"
    rotation="{[spinx, spiny, spinz]}"
  />
{/if}
