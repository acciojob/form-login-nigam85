// script.js
function getFormvalue() {
  var one = document.getElementById("form1");
	for(var i=0; i<one.length; i++){
		if(one.elements[i].value != "Submit"){
			console.log(one.elements[i].value)
		}
	}


};
