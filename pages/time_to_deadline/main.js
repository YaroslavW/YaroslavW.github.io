
function countDown(second,endMinute,endHour,endDay,endMonth,endYear) {
  var endYear = document.getElementById('sA').value;
    var endMonth = document.getElementById('sB').value;
    var endDay= document.getElementById('sC').value;
    var endHour= document.getElementById('sD').value;
  var endMinute= document.getElementById('sE').value;
  var second= document.getElementById('sF').value;
 endYear  = Number(endYear);
 endMonth = Number(endMonth);
endDay = Number(endDay);
 endHour = Number(endHour);
  endMinute = Number(endMinute);
 second = Number(second);
  
var now = new Date();
second = (arguments.length == 1) ? second + now.getSeconds() : second;
endYear =  typeof(endYear) != 'undefined' ?  endYear : now.getFullYear();            
endMonth = endMonth ? endMonth - 1 : now.getMonth();  //номер месяца начинается с 0   
endDay = typeof(endDay) != 'undefined' ? endDay :  now.getDate();    
endHour = typeof(endHour) != 'undefined' ?  endHour : now.getHours();
endMinute = typeof(endMinute) != 'undefined' ? endMinute : now.getMinutes();   
//добавляем секунду к конечной дате (таймер показывает время уже спустя 1с.) 
var endDate = new Date(endYear,endMonth,endDay,endHour,endMinute,second+1); 
var interval = setInterval(function() { //запускаем таймер с интервалом 1 секунду
    var time = endDate.getTime() - now.getTime();
    if (time < 0) {                      //если конечная дата меньше текущей
        clearInterval(interval);
        alert("Неверная дата!");            
    } else {            
        var days = Math.floor(time / 864e5);
        var hours = Math.floor(time / 36e5) % 24; 
        var minutes = Math.floor(time / 6e4) % 60;
        var seconds = Math.floor(time / 1e3) % 60;  
        var digit='<div style="width:4.375em;float:left;text-align:center">'+
        '<div style="font-family:Stencil;font-size:4.0625em;">';
        var text='</div><div>'
        var end='</div></div><div style="float:left;font-size:4.8125em">:</div>'
        document.getElementById('mytimer').innerHTML = '<div>осталось: </div>'+
        digit+days+text+'Дней'+end+digit+hours+text+'Часов'+end+
        digit+minutes+text+'Минут'+end+digit+seconds+text+'Секунд';
        if (!seconds && !minutes && !days && !hours) {              
            clearInterval(interval);
            alert("Время вышло!");              
        }           
    }
    now.setSeconds(now.getSeconds() + 1); //увеличиваем текущее время на 1 секунду
}, 1000);
}
 
 //countDown(30,21,21,12) //устанавливаем таймер на 30 секунд     