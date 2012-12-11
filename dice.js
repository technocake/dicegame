/*
	
 */
$(document).ready(function(){
  
   $("#rollbtn").click(function(event){
   	n = Math.floor((Math.random()*6)+1);
     $("#cube").attr('class', 'show-d' + n);
     console.log('dice is: ' + n);
   });
 });

