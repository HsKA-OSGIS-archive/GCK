var upperLeft;
var lowerRight;
var extent_num;
var extent;

function ex(){
extent_num = map.getView().calculateExtent(map.getSize());
upperLeft = JSON.stringify(extent_num[0]).concat(" ").concat(JSON.stringify(extent_num[3]));
lowerRight = JSON.stringify(extent_num[2]).concat(" ").concat(JSON.stringify(extent_num[1]));
extent = upperLeft.concat(" ").concat(lowerRight);
/*console.log(extent);*/
}

function geopdf() {
	var elso;
	var masodik;
	var harmadik;
	var negyedik;
	var otodik;
	var hatodik;
	var hetedik;
	var nyolcadik;


	if(document.getElementById("chk1").checked){elso=1;}else{elso=0;}
	if(document.getElementById("chk2").checked){masodik=1;}else{masodik=0;}
	if(document.getElementById("chk3").checked){harmadik=1;}else{harmadik=0;}
	if(document.getElementById("chk4").checked){negyedik=1;}else{negyedik=0;}
	if(document.getElementById("chk5").checked){otodik=1;}else{otodik=0;}
	if(document.getElementById("chk6").checked){hatodik=1;}else{hatodik=0;}
	if(document.getElementById("chk7").checked){hetedik=1;}else{hetedik=0;}
	if(document.getElementById("chk8").checked){nyolcadik=1;}else{nyolcadik=0;}

$.ajax({
  type: 'GET',
  url: "http://localhost:80/pdf/gkk_pdf_v1_0.php?elso="+elso+"&masodik="+masodik+"&harmadik="+harmadik+"&negyedik="+negyedik+"&extent="+extent+"&otodik="+otodik+"&hatodik="+hatodik+"&hetedik="+hetedik+"&nyolcadik="+nyolcadik,
  
  success: function(data) {
	
    
  },
	error: function(data){},
  data: {},
  async: false
});


}

