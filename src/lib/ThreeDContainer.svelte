<script>
  import * as SC from 'svelte-cubed';

  import Ship from './3DModels/Ship.svelte';
  import StarField from './3DModels/StarField.svelte';
  import ShipAlternative from './3DModels/Ship_alternative.svelte';
  import SpaceShipFireWhite from './3DModels/SpaceShip_fire_white.svelte';
  import StarShipFireRed from './3DModels/SpaceShip_Fire_Red.svelte';

  let cameraPosition = {
    x: 0,
    y: 0,
    z: 0,
  };

  function moveCameraOnScroll() {
    const t = document.body.getBoundingClientRect().top;
    cameraPosition.z = t * -0.01;
    cameraPosition.x = t * 0.0002;
    cameraPosition.y = t * 0.0002;
  }

  document.body.onscroll = moveCameraOnScroll;
</script>

<SC.Canvas physicallyCorrectLights="{true}" shadows="{true}">
  <Ship />
  <ShipAlternative />
  <SpaceShipFireWhite />
  <StarShipFireRed />
  <StarField />

  <SC.PerspectiveCamera
    position="{[cameraPosition.x, cameraPosition.y, cameraPosition.z]}"
  />

  <SC.OrbitControls enableZoom="{false}" enablePan="{true}" />
  <SC.PointLight
    intensity="{100}"
    position="{[10, 10, 10]}"
    distance="{1000}"
    color="{0xffffff}"
    shadow="{true}"
  />
  <SC.AmbientLight intensity="{1}" />
  <SC.DirectionalLight
    shadow="{true}"
    intensity="{1}"
    position="{[-2, 3, 2]}"
  />
</SC.Canvas>
