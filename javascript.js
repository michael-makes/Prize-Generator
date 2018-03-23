var myArray = [
  "Yacht",
  "House",
  "Sports car",
  "Antique",
  "20 foot ladder",
  "Cabin",
  "Lodge",
  "Flatware",
  "Island",
  "Used surgical gloves",
  "Van",
  "Gold watch",
  "Old refrigerator",
  "Used mattress",
  "Villa",
  "Socks",
  "Dollhouse",
  "Doll clothing",
  "Dolls",
  "Friends",
  "Motorcycle",
  "Mustang",
  "Pinball machine",
  "Arcade cabinet",
  "Pony",
  "Ferret",
  "Ford",
  "Rabbit's foot",
  "Firewood",
  "Fireplace",
  "Bike",
  "Penthouse"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

jQuery(document).ready(function($) {
  $("button").click(function(){
      $("p").text(randomItem);
  });
});
