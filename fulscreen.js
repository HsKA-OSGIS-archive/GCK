var map = new ol.Map({
  controls: ol.control.defaults().extend([
    new ol.control.FullScreen()
  ]),
  interactions: ol.interaction.defaults().extend([
    new ol.interaction.DragRotateAndZoom()
  ]),	
  layers: [],
  // Use the canvas renderer because it's currently the fastest
  target: 'map',
  view: new ol.View({
    center: [-33519607, 3616436],
    rotation: -Math.PI / 8,
    zoom: 8
  })
});
 var osm =    new ol.layer.Tile({
      source: new ol.source.Stamen({
	  layer: 'watercolor'})
    });
map.addLayer(osm);
  var osm2 =new ol.layer.Tile({
      source: new ol.source.Stamen({
        layer: 'terrain-labels'
      })
    });
map.addLayer(osm2);