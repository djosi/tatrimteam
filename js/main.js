
$("#bold").click(function(){
  $("#P").css("font-weight","bold");
  });
$("#color").click(function(){
  var color = prompt("what color would you like to use ?");
  $("#P").css("color",color); 
}); 
$("#delete").click(function ask(){
  var result = confirm("Do you want to delete the text?");
    $('#P').html("");
 });
 $("#ask").click(function(){
var text = prompt("What do you want to change the text to?");
$("#P").html(text);
 });
 $("#b5").click(function(){
   $("#imagee").attr("src", "");
 });
 function later(){
  document.querySelector("#Drag").innerHTML= "Buy it now"  
}
function now(){
    document.querySelector("#Drag").innerHTML= "Drag"  
  }
  setInterval(later, 1000);
  setInterval(now, 2000);

