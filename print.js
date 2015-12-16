
var cent;
prntL=[];


function prntList() {

cent=view.getCenter();
zoom=view.getZoom();

if(zoom==13){configs.pages[0].scale=72000;}
else if(zoom==14){configs.pages[0].scale=36000;}
else if(zoom==15){configs.pages[0].scale=18000;}
else if(zoom==16){configs.pages[0].scale=9000;}
else if(zoom==17){configs.pages[0].scale=4500;}
else if(zoom==18){configs.pages[0].scale=2250;}
else if(zoom==19){configs.pages[0].scale=1125;}
else if(zoom==20){configs.pages[0].scale=562;}
else if(zoom==21){configs.pages[0].scale=281;}
else if(zoom==22){configs.pages[0].scale=160;}





prntL=[];

var printalap = 'http://a.tile.osm.org';
var baseLayCol = [printalap];


	configs.layers[0].baseURL='http://a.tile.osm.org';
	configs.layers[0].type='OSM';
	configs.layers[0].extension='png';



var layColl = [_epuletek,_rooms_ground_3857,_rooms_first_3857,_rooms_second_3857];

var j;

for (j = 0; j <= layColl.length-1; j++){ 

  var prLayerID = layColl[j];
  var vizi2 = prLayerID.getVisible();

  if(vizi2==true){

	var bbb = layColl[j].getSource().getParams().LAYERS;

		prntL.push(bbb);
	}

configs.layers[1].layers=prntL;
configs.pages[0].center=cent;

}




printUrl= 'http://localhost:8080/geoserver/pdf/print.pdf?spec='+JSON.stringify(configs);

$("#printbtn").attr("href", printUrl);




};





var configs = {
 
    "layout":"A4 landscape",
    "srs":"EPSG:900913",
    "units":"m",
    "dpi":300,
    "outputFilename": "GKK Open Source",
    "layers":[
     {baseURL: 'http://a.tile.osm.org', 
            singleTile: false, 
	    opacity: 1,
            type: 'OSM', 
            maxExtent: [-20037508.3392,-20037508.3392,20037508.3392,20037508.3392], 
            tileSize: [256, 256], 
            extension: 'png',
            resolutions: [156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875, 4891.969809375, 2445.9849046875, 1222.99245234375, 611.496226171875, 305.7481130859375, 152.87405654296876, 76.43702827148438, 38.21851413574219, 19.109257067871095, 9.554628533935547, 4.777314266967774, 2.388657133483887, 1.1943285667419434, 0.5971642833709717, 0.2985821416854859, 0.1492910708427430, 0.07464553542137148] 
        },	

{"baseURL":"http://localhost:8080/geoserver/rooms/wms",
        "opacity":1,
        "singleTile":true,
        "customParams":{},
        "type":"WMS",
        layers:[],
        "format":"image/png",
        "styles":[],
        "overview":true},        
		    ],
    "pages":[
        {
        "center":[],
        "mapTitle":"GKK ",
        "comment":"Opensource ",
        
        "rotation":0,
        "icon":""}],
    "legends": [
        {
            "classes": [
                {
                    "icons": [
                        ""
                    ],
                    "name": "",
                    "iconBeforeName": true
                }
            ],
            "name": "utak"
        }
    ]
    };
     

prntList();
   
$('#printbtn').click();


//IST
//-----------------------------------------------
