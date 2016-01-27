<?php
	header("Access-Control-Allow-Origin: *");
	$dbconn = pg_connect("host=localhost dbname=01_20 port=5432 user=postgres password=admin ")
	or die('Could not connect: ' . pg_last_error());
		if ($stat == PGSQL_CONNECTION_OK) {
			// echo 'jobb egy lud nyak ket tyuk nyaknal';
		} else {
			echo 'Connection status bad';
		}
	$query = "SELECT r_id FROM r_building";
	$result = pg_query($query) or die('Query failed: ' . pg_last_error());
	$out=pg_fetch_all_columns($result);	
	$myarr=json_encode($out);
	echo $myarr;
?>