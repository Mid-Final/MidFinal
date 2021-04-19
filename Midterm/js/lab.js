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
    return "Rock/Alternative";
  } else if (mod == 1) {
    return "Country";
  } else if (mod == 2) {
    return "Rap/Hip-Hop";
  } else if (mod == 3){
    return "Jazz";
  } else {
    return "Wrong input. Try Again ;)"
  }
}

// Create an event listener attached to #button
// that gets the value of #input and assigns it to a variable name
// runs sortingHat(name) and stores the result in a variable house
// appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
  var myButton = document.getElementById("button");
  myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var genre = sortingHat(name);
   var newText = "We think you would enjoy this genre: " + genre + ". Check the " + genre + " playlist out below!" + " ";
  document.getElementById("output").innerHTML = newText;
})
