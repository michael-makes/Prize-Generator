var myArray = [
  "Apples",
  "Bananas",
  "Pears"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

jQuery(document).ready(function($) {
  $("button").click(function(){
      $("p").text(randomItem);
  });
});
