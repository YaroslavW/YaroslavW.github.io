var people = document.getElementById('people');
var form = document.getElementById('form');
var result= document.getElementById('resultField');

form.addEventListener("submit", function(event){
  var p = parseFloat(people.value); 
  
   function countCommunication(p) {
var c=0;
if (p <= 3){
  result.innerHTML = p + "  - If you have few friends. then you have little and communication links.";
} else {

 p =p - 1;
 while(p > 0) { 

 c += p;
 p--;
 }
result.innerHTML = c + "  -  The more you have friends, the more communication you have!";
} 
}
  countCommunication(p);
  event.preventDefault(); 
});