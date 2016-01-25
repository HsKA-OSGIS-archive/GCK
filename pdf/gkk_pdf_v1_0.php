<?php
header('Access-Control-Allow-Origin: *');
$elso = $_GET['elso'];
$masodik = $_GET['masodik'];
$harmadik = $_GET['harmadik'];
$negyedik = $_GET['negyedik'];
$extent = $_GET['extent'];

$first = '""';
$second='""';
$third='""';
$fourth='""';
if($elso==1){$first ='{"layername":"epuletek",
					 								 "SrcDataSource":"/opt/tomcat/webapps/geoserver/data/data/epuletek.shp",
					 								 "SrcLayer":"epuletek","GeometryType":"wkbPolygon","LayerSRS":"epsg:3857"}';}else{$first='""';}



if($masodik==1){$second='{"layername":"HO_room_ground_3857",
					 							"SrcDataSource":"/opt/tomcat/webapps/geoserver/data/data/HO/HO_room_ground_3857.shp",
					 							"SrcLayer":"HO_room_ground_3857","GeometryType":"wkbPolygon","LayerSRS":"epsg:3857"}';}else{$second='""';}


if($harmadik==1){$third='{"layername":"HO_room_first_3857",
													"SrcDataSource":"/opt/tomcat/webapps/geoserver/data/data/HO/HO_room_first_3857.shp",
					 								"SrcLayer":"HO_room_first_3857","GeometryType":"wkbPolygon","LayerSRS":"epsg:3857"}';}else{$third='""';}


if($negyedik==1){$fourth='{"layername":"HO_room_second_3857",
													"SrcDataSource":"/opt/tomcat/webapps/geoserver/data/data/HO/HO_room_second_3857.shp",
					 								"SrcLayer":"HO_room_second_3857","GeometryType":"wkbPolygon","LayerSRS":"epsg:3857"}';}else{$fourth='""';}

$all;
$max;
$all=$elso+$masodik+$harmadik+$negyedik;
if($all==0){$max=0;}
if($all==1){$max=1;}
if($all==2){$max=2;}
if($all==3){$max=3;}
if($all==4){$max=4;}

$json = '['.$second.','.$third.','.$fourth.','.$first.']';
$data = json_decode($json, true);
$z=count($data);
$xml = new SimpleXMLElement('<OGRVRTDataSource/>');

for ($i = 0; $i<=$max; ++$i) {
		for($j=0; $j<=$z+1;++$j){
			if($data[$i]!=""){
	  		$layername = $data[$i]['layername'];
				$SrcDataSource = $data[$i]['SrcDataSource'];
				$SrcLayer = $data[$i]['SrcLayer'];
				$GeometryType = $data[$i]['GeometryType'];
				$LayerSRS = $data[$i]['LayerSRS'];
				}

		else{
				++$i;
	  		$layername = $data[$i]['layername'];
				$SrcDataSource = $data[$i]['SrcDataSource'];
				$SrcLayer = $data[$i]['SrcLayer'];
				$GeometryType = $data[$i]['GeometryType'];
				$LayerSRS = $data[$i]['LayerSRS'];
				}
		}
    $OGRVRTLayer = $xml->addChild('OGRVRTLayer');
    $OGRVRTLayer->addAttribute('name',$layername);
    $OGRVRTLayer->addChild('SrcDataSource',$SrcDataSource);
    $OGRVRTLayer->addChild('SrcLayer',$SrcLayer);
    $OGRVRTLayer->addChild('GeometryType',$GeometryType);
    $OGRVRTLayer->addChild('LayerSRS',$LayerSRS);
}

Header('Content-type: text/xml');
print($xml->asXML());

$dom = new DOMDocument();
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;
$dom->loadXML($xml->asXML());

$dom->save('gkk.vrt');

//--------------------------------------------------------------------------------------------------------------------------------------

$projwin=$extent;
$srs =" EPSG:3857"; //type your layers reference system
$raster_url= " /var/www/html/pdf/osm.xml";//type the url of the raster layer 
$vector_url= "/var/www/html/pdf/gkk.vrt";//type the url of your vector layers
$output_url= " /var/www/html/pdf/"; // url of your pdf
$pdf_name= "GKK_Geopdf.pdf"; //name of your pdf
$display_attribute= '"Fl_Num"';//which attributes do you want to display (vectors)

$command ='gdal_translate -of PDF -a_srs'.$srs.$raster_url.$output_url.$pdf_name.' -projwin'.' '.$projwin.' -co OGR_DATASOURCE='.$vector_url.' -co OGR_DISPLAY_FIELD='.$display_attribute;

exec($command);
echo($extent);


if (!$return) {
    echo "PDF Created Successfully";
} else {
    echo "PDF not created";
}
?>
