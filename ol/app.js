view =  new ol.View({
    center: [41008790.5, 6276982.5],
	//rotation: -Math.PI / 8//,
    zoom: 16
  });
var map = new ol.Map({
  layers: [],
  controls: ol.control.defaults({
    attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
      collapsible: false
    })
  }).extend([mousePositionControl,new ol.control.FullScreen()]),
  interactions: ol.interaction.defaults().extend([
    new ol.interaction.DragRotateAndZoom()
  ]),
  target: 'map',
  view:	view
});

var szint=0

function setVal(newVal){
 szint = newVal;  
}

function csuszka (){
if(szint==1){_rooms_ground_3857.setVisible(true);_rooms_first_3857.setVisible(false);
			 _rooms_second_3857.setVisible(false);}
else if(szint==2){_rooms_ground_3857.setVisible(false);_rooms_first_3857.setVisible(true);
			 _rooms_second_3857.setVisible(false);}
else if(szint==3){_rooms_ground_3857.setVisible(false);_rooms_first_3857.setVisible(false);
			 _rooms_second_3857.setVisible(true);}
		 
	
}

function on_off (id){
	if(document.getElementById(id).style.display=="block"){document.getElementById(id).style.display="none";}
	else{document.getElementById(id).style.display="block";}

}

function keres(){

	var cim = $("#addr");
	$.getJSON('http://nominatim.openstreetmap.org/search?format=json&q=' + cim.val(), function(data){
		var cim_lat = data[0].lat;
		var cim_lon = data[0].lon;
		map.getView().setCenter(ol.proj.transform([Number(cim_lon),Number(cim_lat)],'EPSG:4326','EPSG:3857'));
		map.getView().setZoom(16);});

}

