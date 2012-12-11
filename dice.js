/*
	
 */
$(document).ready(function(){


	function roll(event) {
		n = Math.floor((Math.random()*6)+1);
	    $("#cube").attr('class', 'show-d' + n);
	    console.log('dice is: ' + n);
	}
  
   $("#rollbtn").click(roll);
   $("#cube figure p").click(roll);
 });

