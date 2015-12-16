var osm =     new ol.layer.Tile({
      source: new ol.source.OSM()
    });
map.addLayer(osm);

var epuletek = new ol.source.TileWMS({
	url: 'http://localhost:8080/geoserver/rooms/wms',
	params: {"LAYERS": 'epuletek'},
	serverType: 'geoserver'
});

_epuletek = new ol.layer.Tile({
	title:"epuletek",
	visible: true,
	source:epuletek
});
map.addLayer(_epuletek);
_epuletek.setOpacity(0.5);


var rooms_ground = new ol.source.TileWMS({
	url: 'http://localhost:8080/geoserver/rooms/wms',
	params: {"LAYERS": 'ground_rooms'},
	serverType: 'geoserver'
});

_rooms_ground_3857 = new ol.layer.Tile({
	title:"R_ground",
	visible: true,
	source:rooms_ground
});
map.addLayer(_rooms_ground_3857);

var rooms_first = new ol.source.TileWMS({
	url: 'http://localhost:8080/geoserver/rooms/wms',
	params: {"LAYERS": 'first_rooms'},
	serverType: 'geoserver'
});

_rooms_first_3857 = new ol.layer.Tile({
	title:"R_ground",
	visible: false,
	source:rooms_first
});
map.addLayer(_rooms_first_3857);

var rooms_second = new ol.source.TileWMS({
	url: 'http://localhost:8080/geoserver/rooms/wms',
	params: {"LAYERS": 'HO_room_second_3857'},
	serverType: 'geoserver'
});

_rooms_second_3857 = new ol.layer.Tile({
	title:"R_ground",
	visible: false,
	source:rooms_second
});
map.addLayer(_rooms_second_3857);

