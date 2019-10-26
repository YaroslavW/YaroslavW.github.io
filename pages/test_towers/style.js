
$('#1').addClass('show');
var count=0;
var i = 0;
var imgs=new Array('img/Eiffel-Tower-5.jpg', 'img/Eiffel-Tower-4.jpg', 'img/Eiffel-Tower-3.jpg','img/Eiffel-Tower-2.jpg', 'img/Eiffel-Tower-1.jpg','img/Eiffel-Tower.jpg','img/Eiffel-Tower-end.jpg');
var checks;
var check;

var ans1 = "Вы не любите башни и правильно делаете! От них исходит угроза текстанических сдвигов эстетического восприятия всего человечества. Держитесь от них подальше.";
var ans2 = " Когда для Вас открыт весь Мир, то Вы не будете вязнуть в деталях Вы идете к своим целям легко и беспечно.Пара мелких штрихов к глобальному портрету великих творений Вас не интересуют. Вы смотрите на все творения в целом и не склонны замечать мелких деталей.";
var ans3 = "Вы эрудит, и Вас мало интересуют технические нюансы и мелкие подробности. Вы смотрите на Мир широко и глобально. Вам откроются огромные перспективы, если вы чуть-чуть уделите внимание деталям.";
var ans4 = "Потрясающий результат! Вы обладаете тонким техническим умом и здравым расчетом. Вашей памяти могут позавидовать лучшие умы Человечества. Если Вы ставите цель и прикладываете усилия, то у Вас нет соперников.Вы способны достичь невероятных успехов и покорять любые вершины.";
var ans5 ="Вы Александр Гюстав Эйфель  или его дочь? Вы ответили на все вопросы абсолютно правильно. Вы входите в число той редкой группы людей, которая может видеть глобально не упуская детали. Вы гений современности!";
function changeImg(){
	  checks = document.getElementsByName('radio');
	   for(var k=0; k<checks.length; k++)
    if (checks[k].checked) {
       check = $('input[name=radio]:checked').val();
      checks[k].checked = false;
    } 
 var image=document.getElementById("image");
	if(check =='3' || check =='6' || check =='12' || check =='13' || check =='20' || check =='23' || check =='26' ){
     i++;
      
     count = count+1;
     
     image.src=imgs[i];
     if(image.src==undefined) image.src='img/Eiffel-Tower-end.jpg';
      check = 0;  
       
	} 	
	
}


function answer(count){
	if(count <=2 ){
	document.getElementById("answer").innerHTML = "Правильных ответов " + count + " из 7" +"<br />" + ans1; 
	} else if (count == 3){
	document.getElementById("answer").innerHTML = "Правильных ответов " + count + " из 7" + "<br />" +ans2;
	}else if (count ==4){
	document.getElementById("answer").innerHTML = "Правильных ответов " + count + " из 7" + "<br />" +ans3;
	}else if (count == 5){
	document.getElementById("answer").innerHTML = "Правильных ответов " + count + " из 7" + "<br />" +ans4;
	}else if (count == 6){
	document.getElementById("answer").innerHTML = "Правильных ответов " + count + " из 7" + "<br />" +ans4; 
	}else if (count == 7){
	document.getElementById("answer").innerHTML = "Правильных ответов " + count + " из 7" + "<br />" +ans5; 
	}
}


function meChange(){
  
 changeImg();


	if($('#1').hasClass('show')){
		$('#1').addClass('show').removeClass('show');
		$('#1').addClass('hidden');
		$('#2').addClass('show');

	} else if($('#2').hasClass('show')){
		$('#2').addClass('show').removeClass('show');
		$('#2').addClass('hidden');
		$('#3').addClass('show');
	} else if($('#3').hasClass('show')){
		$('#3').addClass('show').removeClass('show');
		$('#3').addClass('hidden');
		$('#4').addClass('show');
	} else if($('#4').hasClass('show')){
		$('#4').addClass('show').removeClass('show');
		$('#4').addClass('hidden');
		$('#5').addClass('show');
	} else if($('#5').hasClass('show')){
		$('#5').addClass('show').removeClass('show');
		$('#5').addClass('hidden');
		$('#6').addClass('show');
	} else if($('#6').hasClass('show')){
		$('#6').addClass('show').removeClass('show');
		$('#6').addClass('hidden');
		$('#7').addClass('show');
	}else if($('#7').hasClass('show')){
		$('#7').addClass('show').removeClass('show');
		$('#7').addClass('hidden');
		$('#8').addClass('show');
		$('button').addClass('hidden');
		answer(count);
	}
 
}
