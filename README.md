# GCK
This is a project about WebGIS-Application to generate Geospatial PDFs using GDAL library and OSM data.
#About
The application has been made to get an interface where we can implement the Geospatial PDF generator.
The main topic was to create a server side softver witch create Geospatial PDF from OSM data.
# Authors
Avgi Sotiropoulou (avgi.sotiropoulou@gmail.com)

Bence Bártfay (bartfay92@gmail.com)

Marina Tabacari

Tibor Kovács (t160rkovacs@gmail.com)

Vahram Dilbaryan
#Software used
    GDA/OGR library
    PostgreSQL 9.5
    PostGIS 2.2.1
    GeoServer 2.8.1
    Geoserver 2.8.1 Printing-Plugin
    Apache Tomcat 9.0
    QGIS 2.12.1-Lyon
    PHP 5.6.17 
#External libraries
    jQuery UI 1.10.3
    Bootstrap v3.3.6
    OpenLayers 3.0
    AngularJS 1.5.0-rc.1
#Data Sources
    OSM data
    Own digitized vector data (attached as sample data)
#System requirements
   •	 All of the above mentioned softwares and libraries
   
   •	The application needs internet connection
   
   •	Permission for the user (on the server) to create new documents to the destination folder.
#Software installation
First of all it is needed to reassure that all the mandatory software background is working.
Then the whole application should be placed under the webservers htdocs folder. 
The next important step is to configure the frontend part. First make sure that all of the relative URL-s are pointing to the right place. Now the preferable vectors can be uploaded to the PostGIS database. With this application any type of data could be published with the Geoserver, it is important, however, to take care about the data formats because they will be published on the GUI also. After filling the database the connection in the „pgdbjson*” php-s and the mycontroller Javascript need to be configured. This javascript makes a controller with angular javascript library so at this moment the system should be configured to your JSON, from you the database.  
In the following step the vector files should be visualized at Openlayers. Firstly the vectors are needed to be published with the Geoserver, there their style can also be edited and then they can be added in the ol/layers.js folder. In the application a slider styled layer-switcher is used which is only implemented for the vectors of the floors.  However the slider can be implemented to show other type of data as well.
In order to customize the geoserver printing module the „config.yaml” should be copied to the geoserver/data/printing/ folder 

GeoSpatial PDF creation:
For the current application the GeoSpatial PDF creation is optimized. However, if needed it can be configured for different projects as well. To create a geoPDF with more than one vector a VRT file needs to be created.
In this application the program creates a VRT file by itself so it was only needed to define the vector files as JSON arrays. The code gets the request about the desirable layers from an AJAX form so after this query the code makes a scan about what is needed from the predefined layers (if-else formula) and creates the VRT.
In case someone wants to use the GeoSpatial PDF creation in other projects he/she has first to define the layers as a JSON array, add this object to the layer collection JSON. After he/she has to define the mandatory arguments for the GDAL_Translate: SRS, raster url, vector url, output url, output filename, display attribute. If the user has not got a GUI with an Openlayers map or he/she just does not want to use the Javascripts, he/she can set the map extent manually in this form:
„X1 Y1 X2 Y2” where X1-Y1 are the coordinates of the upper left corner and X2-Y2 are the coordinates of the lower right corner.
If the php has got the permissions to run and create new files and all the file Urls are correct, the application will create the GeoSpatial PDF. The Gdal translate command can handle much more other possibilities to add more features to the document. The users can implement these easily to their code if they follow the current syntax (define them as a variable and add them to the right place in the command).


  
