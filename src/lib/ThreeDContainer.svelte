<script>
  import * as THREE from "three";
  import * as SC from "svelte-cubed";
  import { onMount } from "svelte";
  import SplineLoader from "@splinetool/loader";

  let polaroidCamera = null;
  onMount(() => {
    // load a .splinecode file
    // you can get the URL by clicking Export -> Code in the design file and copying the URL

    const loader = new SplineLoader();
    loader.load(
      "https://prod.spline.design/mKfp9mZmyyr3deUs/scene.splinecode",
      (scene) => {
        polaroidCamera = scene;
      }
    );
  });

  let height = 1;

  let spin = 0;

  SC.onFrame(() => {
    spin += 0.01;
  });
  // …
</script>

<SC.Canvas
  antialias
  background={new THREE.Color("#0B0F1C")}
  shadows={THREE.PCFShadowMap}
>
  <SC.Group position={[0, -height / 1, 0]}>
    <SC.Primitive
      object={new THREE.GridHelper(10, 10, "#C0D99C", "#C0D99C")}
      position={[0, 0, 0]}
      rotation={[0, spin, 0]}
      scale={[100.0, 100.0, 100.0]}
    />
  </SC.Group>
  <SC.Primitive
    object={polaroidCamera}
    position={[6.23, -9.21, -148.77]}
    scale={[0.5, 0.5, 0.5]}
    rotation={[0, 1, 0]}
  />
  <SC.PerspectiveCamera position={[-1000, 200, 1000]} />

  <SC.OrbitControls enableZoom={false} maxPolarAngle={Math.PI * 0.51} />
</SC.Canvas>

<style>
</style>
