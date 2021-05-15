


// Create a function sortingHat()
// takes a string as an argument: function sortingHat(str)
// counts the letters in the str and assigns it to a variable len
// uses modulus to get the remainder with 4: mod = len % 4;
// mod will now be a value between 0 and 3
function sortingHat(str){
  var len = str.length;
  console.log("length: ", len);

  var mod = len % 4;
  console.log("Module: ", mod);

// create a conditional that will return rock/Alternative,
// country, rap/hip-hop, and jazz depending on
// whether the value of mod is 0, 1, 2, or 3
  if (mod == 0) {
    return "rock";
  } else if (mod == 1) {
    return "country";
  } else if (mod == 2) {
    return "rap";
  } else if (mod == 3){
    return "jazz";
  } else {
    return "Wrong input. Try Again ;)"
  }
}

// Create an event listener attached to #button
// that gets the value of #input and assigns it to a variable name
// runs sortingHat(name) and stores the result in a variable house
// appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
var myButton = $("#button");
myButton.click(function() {
  var name = $("#input").val();
  var personality = $('input[name="personality"]:checked').val();
  console.log("name",name);
  var genre = sortingHat(name + personality);
  //var newText = "We think you would enjoy this genre: " + genre + ". Check the " + genre + " playlist out below!" + " ";
  //$("#output").innerHTML = newText;
  unhide(genre);
  $("#output").hide();
})

//event listener to link pages without taking survey
$(".menu-genre").click(function() {
  //console.log($(this));
  var genre = $(this).data("genre");
  //console.log(genre + " genre");
  unhide(genre);
})


function unhide(section) {
  //adds all before
  $(".hidey").hide();
  //shows specific section
  $("." + section).show();
}
