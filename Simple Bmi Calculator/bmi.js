

function bmicalculate(){
	let weight=document.getElementById('weight').value;
	let Height=document.getElementById('Height').value;
	let display=document.getElementById('display');
	let data=document.getElementById('data');

	

	var bmi=weight / Math.pow(Height,2);
	
 
if (bmi > 25 && bmi < 30) {
var col=document.getElementById("display").innerText="your bmi is " + Math.round(bmi)+ " High";
document.getElementById("display").style.color="black";
	document.getElementById("data").style.backgroundColor="#F6C90E";
	//document.getElementById('Sugesstions').innerHTML =""

}
else if (bmi >18.5 && bmi <=25) {
	document.getElementById("display").innerText="your bmi is " + Math.round(bmi)+ " Normal";
	document.getElementById("display").style.color="black";
	document.getElementById("data").style.backgroundColor="#A7D129";
}
else if (bmi < 18.5) {
	document.getElementById("display").innerText="your bmi is "+ Math.round(bmi)+ " Underweight";
	document.getElementById("display").style.color="black";
document.getElementById("data").style.backgroundColor="#950101";
//document.getElementById("Sugesstion").innerHTML=""
}
else{
	document.getElementById("display").innerText="your bmi is " + Math.round(bmi) +" Obeese";
	document.getElementById("display").style.color="black";
	document.getElementById("data").style.backgroundColor="#C74B50";
}

}