window.onload = function (){
	var li = document.getElementsByTagName("li");
	var p = document.querySelectorAll(' p')[0];
	var clear =   document.getElementsByClassName('clear')[0];
	
	for(var j=0;j<li.length;j+=1){
		  if(li[j].innerHTML === '='){
			li[j].addEventListener("click", calc(j));
		  }else{
			li[j].addEventListener("click", addtocurrentvalue(j));
		  }
	}
	

	
	
	function addtocurrentvalue (j){
		return function(){
			if (li[j].innerHTML === "÷") {
               p.innerHTML  +=  "/" ;
      }else if(li[j].innerHTML === "x"){
			      p.innerHTML += "*";
		   } else{
			   p.innerHTML  += li[j].innerHTML;
		   }
	  };
   }
 


   clear.onclick = function () {
    p.innerHTML = '';
  }; 

 function calc(j) {
    return function () {
        p.innerHTML = eval(p.innerHTML);
    };
  }
}