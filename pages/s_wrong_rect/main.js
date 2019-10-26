
function say_hi() {
    var a = document.getElementById('sA').value;
    var b = document.getElementById('sB').value;
    var c = document.getElementById('sC').value;
    var d = document.getElementById('sD').value;
 a = Number(a);
 b = Number(b);
 c = Number(c);
 d = Number(d);
var g = Math.sqrt(a*a+b*b);
var conHer = (g + c + d)/2;

var S1 = Math.sqrt(conHer * (conHer - c) * (conHer - d) * (conHer - g));
var S2 = (a * b)/2;

    var comresult = (S1 + S2);


if(Number.isNaN(comresult)){
comresult="Неправильный ввод";
} 


    document.getElementById('result').innerHTML = comresult;
}


function myclear(){
  jQuery(document).ready(function() {
      $('input').val('');
    });
  $("div.content").empty()
};