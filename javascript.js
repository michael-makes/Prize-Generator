var myArray = [
  "Apples",
  "Bananas",
  "Pears"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

  jQuery("button").click(function(){
      jQuery("p").text(randomItem);
  });
