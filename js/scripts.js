var icecreamFlavors = ["Green Tea", "Chai Tea", "Vanilla with nuts on top", "Mango sorbet"];

icecreamFlavors.forEach(function(flavor) {
  // console.log(flavor);
  var flavor = $(flavor).val();
  $("#list").append("<li>" + flavor + "</li>");
});