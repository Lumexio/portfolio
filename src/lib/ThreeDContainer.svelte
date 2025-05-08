<script>
  import * as SC from 'svelte-cubed';

  import Ship from './3DModels/Ship.svelte';
  import StarField from './3DModels/StarField.svelte';
  import ShipAlternative from './3DModels/Ship_alternative.svelte';
  import SpaceShipFireWhite from './3DModels/SpaceShip_fire_white.svelte';
  import StarShipFireRed from './3DModels/SpaceShip_Fire_Red.svelte';
</script>

<SC.Canvas physicallyCorrectLights="{true}" shadows="{true}">
  <Ship />
  <ShipAlternative />
  <SpaceShipFireWhite />
  <StarShipFireRed />
  <StarField />

  <SC.PerspectiveCamera position="{[5, 1.2, -1]}" />
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
