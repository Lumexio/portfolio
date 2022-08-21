<script>
  import * as THREE from "three";
  import * as SC from "svelte-cubed";

  let width = 0.2;
  let height = 1;
  let depth = 0.2;

  let spin = 0;

  SC.onFrame(() => {
    spin += 0.01;
  });
</script>

<SC.Canvas
  antialias
  background={new THREE.Color("#b19cd9")}
  fog={new THREE.FogExp2("#A8CB77", 0.1)}
  shadows
>
  <SC.Group position={[0, -height / 1, 0]}>
    <SC.Mesh
      geometry={new THREE.PlaneGeometry(10, 10)}
      material={new THREE.MeshStandardMaterial({ color: "#9477CB" })}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    />
    <SC.Primitive
      object={new THREE.GridHelper(10, 10, "#C0D99C", "#C0D99C")}
      position={[0, 0.001, 0]}
    />
  </SC.Group>

  <SC.Mesh
    geometry={new THREE.CylinderGeometry()}
    material={new THREE.MeshPhysicalMaterial({
      color: "#966fd6",
    })}
    scale={[width, height, depth]}
    rotation={[0, spin, 0]}
    castShadow
  />

  <SC.PerspectiveCamera position={[-4, 1, 2]} />
  <SC.OrbitControls enableZoom={false} maxPolarAngle={Math.PI * 0.51} />
  <SC.AmbientLight intensity={0.6} />
  <SC.DirectionalLight
    intensity={0.6}
    position={[-2, 3, 2]}
    shadow={{ mapSize: [2048, 2048] }}
  />
</SC.Canvas>

<style>
</style>
