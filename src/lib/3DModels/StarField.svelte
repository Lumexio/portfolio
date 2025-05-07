<script>
  import * as THREE from 'three';
  import * as SC from 'svelte-cubed';
  const starPositions = Array(1000)
    .fill()
    .map(() => {
      return Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(500));
    });

  let spinx = 0;
  let spiny = 0;
  let spinz = 0;

  SC.onFrame(() => {
    spinx = Math.tan(Date.now() * -0.0001);
    spiny = Math.sin(Date.now() * 0.001);
    spinz = Math.cos(Date.now() * 0.001);
  });
</script>

<SC.Group position="{[spinx, spiny, spinz]}">
  {#each starPositions as [x, y, z]}
    <SC.Mesh
      castShadow="{true}"
      geometry="{new THREE.SphereGeometry(0.25, 24, 24)}"
      material="{new THREE.MeshStandardMaterial({ color: 0xffffff })}"
      position="{[x, y, z]}"
    />
  {/each}
</SC.Group>
