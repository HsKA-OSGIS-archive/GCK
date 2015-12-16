<?php
header('Access-Control-Allow-Origin: *');
$elso = $_GET['elso'];
$masodik = $_GET['masodik'];
$harmadik = $_GET['harmadik'];

$layer1;
if($elso==1){$layer1="/home/bartfay/Dokumentumok/Egyetem/opensource/fos.shp";}else{$layer1="null";}


$xml = new DOMDocument();
$OGRVRTDataSource = $xml->createElement('OGRVRTDataSource');
$OGRVRTLayer = $xml->createElement("OGRVRTLayer");
$SrcDataSource = $xml->createElement("SrcDataSource",$layer1);
$domAttribute = $xml->createAttribute('name');
$SrcLayer = $xml->createElement("SrcLayer","fos");
$GeometryType = $xml->createElement("GeometryType","wkbLineString");
$LayerSRS = $xml->createElement("LayerSRS","epsg:2964");

$domAttribute->value = 'fos';


$OGRVRTLayer->appendChild( $domAttribute );
$OGRVRTLayer->appendChild( $SrcDataSource );
$OGRVRTLayer->appendChild( $SrcLayer );
$OGRVRTLayer->appendChild( $GeometryType );
$OGRVRTLayer->appendChild( $LayerSRS );
$OGRVRTDataSource->appendChild( $OGRVRTLayer );
$xml->appendChild( $OGRVRTDataSource );

$xml->save("/var/www/html/test_xml.vrt");

$srs =" EPSG:2964"; //type your layers reference system
$raster_url= " /home/bartfay/Dokumentumok/Egyetem/opensource/SR_50M_alaska_nad.tif";//type the url of the raster layer 
$vector_url= "/var/www/html/test_xml.vrt";//type the url of your vector layers
$output_url= " /var/www/html/"; // url of your pdf
$pdf_name= "mostjolesz6.pdf"; //name of your pdf
$display_attribute= '"kula"';//which attributes do you want to display (vectors)

$command ='gdal_translate -of PDF -a_srs'.$srs.$raster_url.$output_url.$pdf_name.' -co OGR_DATASOURCE='.$vector_url.' -co OGR_DISPLAY_FIELD='.$display_attribute;

exec($command);
//echo($command);


if (!$return) {
    echo "PDF Created Successfully";
} else {
    echo "PDF not created";
}
?>
