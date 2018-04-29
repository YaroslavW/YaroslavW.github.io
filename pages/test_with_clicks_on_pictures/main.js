		var n;      //number of calls
		var total;
		var result = "You laugh at the thought of the top 2%! You are now amongst the top 0.002%. " +
		" From now on you will only be taking more sophisticated tests. Your intelligence has no boundaries!<br \/>";
		var a;
		var el = document.getElementById('fill');
		var widthBl;
// Main function
		$(document).ready(function(){

			n = 1;
			total = 0;
			showBlocks(n);

			$('.my img').on("click", function(event){

				var event = event || window.event;
				var target = event.target || event.srcElement;
				a = target.getAttribute('value');

				if( a === "1" || a === "6" || a === "9" || a === "14" || a === "18" || a === "20" || a === "24" ||
					a === "27" || a === "31" || a === "33"){
					total +=2;
	  // $(this).parent().addClass('act');	
	}else{	
		total = total;
		// $(this).parent().addClass('wrong');
	}

	if(n === 10){
		document.getElementById('result').style.display = 'block';
		checkResult(total);
		document.getElementById('result').innerHTML=result;
		document.getElementById('result-button').style.display = 'block';
	}



	hideBlock(n);

	progressBar(n);
	
	n+=1;
	

	showBlocks(n);


})
		}());

// The END main function
		function showBlocks(n){
			var x = 'my'+ n;
			document.getElementById(x).style.display = 'block';

		};

		function hideBlock(n){
			if(n === 1){

				document.getElementById('my1').style.display = 'none';
			} else {
				var x = 'my' + n;
				document.getElementById(x).style.display = 'none';

			}
		};


		function checkResult(total){
			switch (total) {
				case 2:
				result+= total/2 + " - correct answers. Its bad";
				break;
				case 4:
				case 6:
				result += total/2 + " - correct answers. Its not too bad";
				break;
				case 8:
				case 10:
				result += total/2 + " - correct answers. Its normal. You can do it better";
				break;
				case 12:
				case 14:
				result += total/2 + " - correct answers. Good Job";
				break;
				case 16:
				case 18:
				result += total/2 + " - correct answers. It's very good!";
				break;
				case 20:
				result += total/2 + " - correct answers. Great Jov! Way to go!";
				break;		
				default:
				result +=total/2 +  " - correct answers. Something go wrong..."
				break;
			}

		};
		function increment(n){
			n +=1;
			return n;
		};


		function progressBar(n){
			n =n * 1;
			switch(n){
				case 1:
				widthBl="10%";
				break;
				case 2:
				widthBl="20%";
				break;
				case 3:
				widthBl="30%";
				break;
				case 4:
				widthBl="40%";
				break;
				case 5:
				widthBl="50%";
				break;
				case 6:
				widthBl="60%";
				break;
				case 7:
				widthBl="70%";
				break;
				case 8:
				widthBl="80%";
				break;
				case 9:
				widthBl="90%";
				break;
				case 10:
				widthBl="100%";
				break;
				default:
				console.log("Something go wrong!");
			}

			el.style.width = widthBl;
		}