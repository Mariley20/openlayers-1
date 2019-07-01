<template>
  <div
    id="map"
    class="map"
  ></div>
</template>
<script>
// import 'ol/ol.css'
// import { Map, View } from 'ol'
// import TileLayer from 'ol/layer/Tile'
// import OSM from 'ol/source/OSM'

export default {
  mounted () {
    console.log('openlayers')
    var map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([37.41, 8.82]),
        zoom: 4
      })
    });
  },
}
</script>
 <style lang="css">
#map {
  width: 400px;
  height: 250px;
}
</style>