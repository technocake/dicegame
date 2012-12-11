/*
	
 */
$(document).ready(function(){
  
   $("#rollbtn").click(function(event){
   	n = Math.floor((Math.random()*6)+1);
     $("p").attr('class', 'd' + n);
     console.log(n);
   });
 });

