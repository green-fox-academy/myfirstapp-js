
//conditions

var myNumber1 = 5;
var myNumber2 = 7;

if (myNumber1 > myNumber2) {
  console.log("Yaay, I'm smaller!");
} else {
  console.log("Oh, no I'm not smaller")
}

if (myNumber1 === myNumber2) {
  console.log("they are equal");
} else if (myNumber1 < myNumber2) {
  console.log("mynumber is smaller");
} else if (myNumber1 - 5 < myNumber2) {
  console.log("mynimber - 5 is smaller");
} else {
  console.log("mynumber is not smaller");
}

//loops
for (var i = 0; i < 100; i++) {
  if (isEven(i)) {
    console.log(i + 1 + ". I won't cheat on the exam!");
  }
}

var myFriends = ["Bill", "Joe", "Francis"];

for (var i = 0; i < myFriends.length; ++i) {
  //console.log("Hello, " + myFriends[i]);
  greet(myFriends[i]);
}

myFriends.forEach(function (element) {
  //console.log("Hello, " + element);
  greet(element);
});

//functions
function greet(name) {
  console.log("Hello, " + name);
}

function isEven(number) {
  var even = number % 2;
  return even;
}

//jQuery

//$("#plant-a-tree").hide();
//$("#make-friends").fadeOut(500).delay(1000).fadeIn(500);
$("#newsletter-open").hide();

$("#close-button").click(function () {
  $("#newsletter").slideToggle(500);
  $("#newsletter-open").show();
});

$("#newsletter-open").click(function () {
  $("#newsletter").slideToggle(500);
  $("#newsletter-open").hide();
});

var cards = ["#plant-a-tree", "#make-friends", "#money-bag"];

for (var i = 0; i < cards.length; ++i) {

  $(cards[i]).mouseenter(function () {
    $(this).css({ "width": "200px", "font-size": "150%" })
  });

  $(cards[i]).mouseleave(function () {
    $(this).css({ "width": "150px", "font-size": "100%" })
  });
}

// $(".card").mouseenter(function () {
//   $(this).css({ "width": "200px", "font-size": "150%" })
// });

// $(".card").mouseleave(function () {
//   $(this).css({ "width": "150px", "font-size": "100%" })
// });

