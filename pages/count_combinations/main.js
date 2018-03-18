function count(){

var num = document.getElementById('num').value;
  var output= document.getElementById('result');
var maxNumWhile = document.getElementById('dig').value;

  num = num * 1;
   maxNumWhile =  maxNumWhile*1;
  console.log(typeof num);
if(num > maxNumWhile){
//   поменять значения переменных 
  num =  num + maxNumWhile;
maxNumWhile = num- maxNumWhile;
num = num - maxNumWhile;
} else {
  num = num;
 maxNumWhile = maxNumWhile;
}
  var result = 1;
  while( 0 < num){
    result *= maxNumWhile;
    maxNumWhile--;
    num--;
  }
   result = String(result).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  output.innerHTML= result;
};
