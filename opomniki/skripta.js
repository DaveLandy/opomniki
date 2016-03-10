window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
			if(cas==0){
				var naziv=opomnik.querySelector(".naziv_opomnika").innerHTML;
				alert("Opomnik!\n\nZadolžitev "+naziv+" je potekla!");
				document.querySelector("#opomniki").removeChild(opomnik);
			}
			else{
				casovnik.innerHTML=cas-1;
			}
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	var izvediPrijavo=function(event){
		var ime=document.querySelector("#uporabnisko_ime").value;
		var temp=document.querySelector("#uporabnik");
		temp.innerHTML=ime;
		var pokr=document.querySelector(".pokrivalo");
		pokr.style.display="none";
	}
	document.querySelector("#prijavniGumb").addEventListener('click',izvediPrijavo);
	
	var dodajOpomnik=function(event){
		if(document.querySelector("#naziv_opomnika").value!="" && document.querySelector("#cas_opomnika").value!=""){
			var naziv=document.querySelector("#naziv_opomnika").value;
			var cas=document.querySelector("#cas_opomnika").value;
		
			document.querySelector("#opomniki").innerHTML+="<div class='opomnik rob senca'><div class='naziv_opomnika'>"+naziv+"</div><div class='cas_opomnika'> Opomnik čez <span>"+cas+"</span> sekund.</div></div>";
			
			document.querySelector("#naziv_opomnika").value="";
			document.querySelector("#cas_opomnika").value="";
		}
	}
	document.querySelector("#dodajGumb").addEventListener('click',dodajOpomnik);
	
});
