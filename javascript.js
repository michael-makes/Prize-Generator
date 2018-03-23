jQuery(document).ready(function($) {

 var myArray = [
  "Apples",
  "Bananas",
  "Pears"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

  $("button").click(function(){
      $("p").text(randomItem);
  });
});
