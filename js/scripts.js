$(document).ready(function() {
  var icecreamFlavors = ["Green Tea", "Chai Tea", "Vanilla with nuts on top", "Mango sorbet"];
  
  icecreamFlavors.forEach(function(flavor) {
    console.log(flavor);
    $(".list").append("<li>" + flavor + "</li>");
 
  });
});