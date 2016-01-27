
// add a controller
myApp.controller("myCtrl", function($scope) {
	var adat;
	function getdata(){
		$.ajax({
		  type: 'GET',
		  url: "http://localhost/pgdb2json.php",
		  success: function(data) {
			adat=data; 
		  },
		  error: function(data){alert("nem jo");},
		  data: {},
		  async: false
		});
	}
	getdata();
	var adat_r;
	function getdata_r(){
		$.ajax({
		  type: 'GET',
		  url: "http://localhost/pgdb2json_r.php",
		  success: function(data1) {
			adat_r=data1; 
		  },
		  error: function(data1){alert("nem jo");},
		  data: {},
		  async: false
		});
	}
	getdata_r();
	var c =[];
	function convert2string(){
		var obj = JSON.parse(adat);
		c=obj;
	 }   
	 convert2string();
	 var r =[];
	 var R1= [];
	 var R2= [];
	function convert2string_r(){
		var obj_r = JSON.parse(adat_r);
		r=obj_r;
	 }   
	 convert2string_r();
	var HO0=c.slice(19,26);
	var HO1=c.slice(12,19);
	var HO2=c.slice(0,12);
	var R1=r.slice(0,6);
	var R2=r.slice(6,14);
	
	
  
   $scope.Buildings = [
		{name:"HO", floors: [
			{id: "Ground Floor", rooms: HO0},
			{id: "1. Floor", rooms: HO1},
			{id: "2. Floor", rooms: HO2}
			]
		},
		{name:"R", floors: [
			{id: "Ground Floor", rooms: R1},
			{id: "1. Floor", rooms: R2}]
	}];
	
	 $scope.selectB = function(building) {
	   $scope.selectedB = building;
	   document.getElementById("Rooms").style.display = "none";
	   document.getElementById("demo1").innerHTML = "Buidling:"+$scope.selectedB.name;
	   document.getElementById("Floors").style.display = "block";
	   
	   console.log("b",  $scope.selectedB);
	   };
	
	$scope.selectF = function(floor) {
		$scope.selectedF = floor;
		document.getElementById("Rooms").style.display = "block";
		document.getElementById("demo2").innerHTML = "Floor: " + $scope.selectedF.id;
		console.log("s",  $scope.selectedF);
		
		
	   
	  };
    
	
		

});
   
