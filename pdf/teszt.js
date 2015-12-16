function geopdf() {
	var elso;
	var masodik;
	var harmadik;
	var negyedik;

	if(document.getElementById("chk1").checked){elso=1;}else{elso=0;}
	if(document.getElementById("chk2").checked){masodik=1;}else{masodik=0;}
	if(document.getElementById("chk3").checked){harmadik=1;}else{harmadik=0;}
	if(document.getElementById("chk4").checked){negyedik=1;}else{negyedik=0;}

$.ajax({
  type: 'GET',
  url: "http://localhost:80/pdf/egyben_1.php?elso="+elso+"&masodik="+masodik+"&harmadik="+harmadik+"&negyedik="+negyedik,
  
  success: function(data) {
	
    
  },
	error: function(data){alert("nem jo");},
  data: {},
  async: false
});


}
/*
function download() {
    
$.fileDownload('tools/mostjolesz6.pdf')
    .done(function () { alert('File download a success!'); })
    .fail(function () { alert('File download failed!'); });
}*/
