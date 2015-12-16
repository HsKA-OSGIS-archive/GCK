<?php
header('Access-Control-Allow-Origin: *');
$elso = $_GET['elso'];
$masodik = $_GET['masodik'];
$harmadik = $_GET['harmadik'];
$negyedik = $_GET['negyedik'];

$layer1;
$layer2;
$layer3;
$layer4;
if($elso==1){$layer1="/opt/tomcat/webapps/geoserver/data/data/HO/HO_room_ground_3857.shp";}else{$layer1="null";}
if($masodik==1){$layer2="/opt/tomcat/webapps/geoserver/data/data/HO/HO_room_first_3857.shp";}else{$layer2="null";}
if($harmadik==1){$layer3="/opt/tomcat/webapps/geoserver/data/data/HO/HO_room_second_3857.shp";}else{$layer3="null";}
if($negyedik==1){$layer4="/opt/tomcat/webapps/geoserver/data/data/epuletek.shp";}else{$layer4="null";}

$xml = new DOMDocument();
$OGRVRTDataSource = $xml->createElement('OGRVRTDataSource');
$OGRVRTLayer = $xml->createElement("OGRVRTLayer");
$SrcDataSource = $xml->createElement("SrcDataSource",$layer1);
$domAttribute = $xml->createAttribute('name');
$SrcLayer = $xml->createElement("SrcLayer","HO_room_ground_3857");
$GeometryType = $xml->createElement("GeometryType","wkbPolygon");
$LayerSRS = $xml->createElement("LayerSRS","epsg:3857");
$domAttribute->value = 'HO_room_ground_3857';

$OGRVRTLayer2 = $xml->createElement("OGRVRTLayer");
$SrcDataSource2 = $xml->createElement("SrcDataSource",$layer2);
$domAttribute2 = $xml->createAttribute('name');
$SrcLayer2 = $xml->createElement("SrcLayer","HO_room_first_3857");
$GeometryType2 = $xml->createElement("GeometryType","wkbPolygon");
$LayerSRS2 = $xml->createElement("LayerSRS","epsg:3857");
$domAttribute2->value = 'HO_room_first_3857';

$OGRVRTLayer3 = $xml->createElement("OGRVRTLayer");
$SrcDataSource3 = $xml->createElement("SrcDataSource",$layer3);
$domAttribute3 = $xml->createAttribute('name');
$SrcLayer3 = $xml->createElement("SrcLayer","HO_room_second_3857");
$GeometryType3 = $xml->createElement("GeometryType","wkbPolygon");
$LayerSRS3 = $xml->createElement("LayerSRS","epsg:3857");
$domAttribute3->value = 'HO_room_second_3857';

$OGRVRTLayer4 = $xml->createElement("OGRVRTLayer");
$SrcDataSource4 = $xml->createElement("SrcDataSource",$layer4);
$domAttribute4 = $xml->createAttribute('name');
$SrcLayer4 = $xml->createElement("SrcLayer","epuletek");
$GeometryType4 = $xml->createElement("GeometryType","wkbPolygon");
$LayerSRS4 = $xml->createElement("LayerSRS","epsg:3857");
$domAttribute4->value = 'epuletek';

$OGRVRTLayer->appendChild( $domAttribute );
$OGRVRTLayer->appendChild( $SrcDataSource );
$OGRVRTLayer->appendChild( $SrcLayer );
$OGRVRTLayer->appendChild( $GeometryType );
$OGRVRTLayer->appendChild( $LayerSRS );
$OGRVRTDataSource->appendChild( $OGRVRTLayer );

$OGRVRTLayer2->appendChild( $domAttribute2 );
$OGRVRTLayer2->appendChild( $SrcDataSource2 );
$OGRVRTLayer2->appendChild( $SrcLayer2 );
$OGRVRTLayer2->appendChild( $GeometryType2 );
$OGRVRTLayer2->appendChild( $LayerSRS2 );
$OGRVRTDataSource->appendChild( $OGRVRTLayer2 );

$OGRVRTLayer3->appendChild( $domAttribute3 );
$OGRVRTLayer3->appendChild( $SrcDataSource3 );
$OGRVRTLayer3->appendChild( $SrcLayer3 );
$OGRVRTLayer3->appendChild( $GeometryType3 );
$OGRVRTLayer3->appendChild( $LayerSRS3 );
$OGRVRTDataSource->appendChild( $OGRVRTLayer3 );

$OGRVRTLayer4->appendChild( $domAttribute4 );
$OGRVRTLayer4->appendChild( $SrcDataSource4 );
$OGRVRTLayer4->appendChild( $SrcLayer4 );
$OGRVRTLayer4->appendChild( $GeometryType4 );
$OGRVRTLayer4->appendChild( $LayerSRS4 );
$OGRVRTDataSource->appendChild( $OGRVRTLayer4 );

$xml->appendChild( $OGRVRTDataSource );

$xml->save("/var/www/html/pdf/test_xml1.vrt");


//--------------------------------------------------------------------------------------------------------------------------------------


$srs =" EPSG:3857"; //type your layers reference system
$raster_url= " /home/bartfay/Dokumentumok/Egyetem/opensource/extent/ho_ex.tif";//type the url of the raster layer 
$vector_url= "/var/www/html/pdf/test_xml1.vrt";//type the url of your vector layers
$output_url= " /var/www/html/pdf/"; // url of your pdf
$pdf_name= "GKK_Geopdf.pdf"; //name of your pdf
$display_attribute= '"Fl_Num"';//which attributes do you want to display (vectors)

$command ='gdal_translate -of PDF -a_srs'.$srs.$raster_url.$output_url.$pdf_name.' -co OGR_DATASOURCE='.$vector_url.' -co OGR_DISPLAY_FIELD='.$display_attribute;

exec($command);
//echo($command);


if (!$return) {
    echo "PDF Created Successfully";
} else {
    echo "PDF not created";
}
?>
