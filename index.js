// alert("Working!");

// -------------------------------------------------------------
// *** jQuery introduction ***
// is a JavaScript library

// jquery.com
// https://jquery.com/download/
// https://developers.google.com/speed/libraries#jquery

// -------------------------------------------------------------
// document.querySelector("");
// can be simplicied with only:
// jQuery() || $()

// -------------------------------------------------------------
// to change the style (style.cssProperty = "value")
// .css("property", "value") is jQuery's

// when jquery library finish loading and then we can access h1 to change its color
// $(document).ready(function(){
// $("h1").css("color", "red");
// })

// document.querySelector("h1");
// $("h1");

$("h1").css("color", "blue");
console.log($("h1").css("color"));

// there is no different selecting one or many
document.querySelectorAll("button");
$("button");

// -------------------------------------------------------------
// adding class in jQuery (classlist.add("className"))
// addClass
// remove class in jQuery (classlist.remove("className"))
// removeClass

$("h1").addClass("big-title");
// $("h1").removeClass("className");

// add multiple class separate by <space>
// $("h1").addClass("className1 className2");

// to look for if there is a certain class
// $("h1").hasClass("big-title");
// this will return a boolean (true/false)

// -------------------------------------------------------------
// to change text (innerHTML / textContent)
// .html / .text

// $("h1").html("Bye!");
// $("button").html("<em>Hey!</em>");
$("h1").text("Bye!");
$("button").text("Don't Click Me!");

// -------------------------------------------------------------
// Manipulating Attributes value with jQuery
// .attr("")
// .attr("input1", "input2") // to set the value of the attribute

console.log("coba cek sebelah : " + $("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");
console.log($("a").attr("href"));

// -------------------------------------------------------------
// Adding Event Listener with jQuery
// .click(function(){}); || .on("event", callback function)

$("h1").click(function () {
  $(this).css("color", "purple");
});

// for (let i = 0; i <= 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// Using jQuery

$("button").click(function () {
  $("h1").css("color", "purple");
});

// $("input").keydown(function(e){
//     console.log(e.key);
// })

// Challenge: Whenever we press key, it will change the "h1" text content into what we type

// $(document).keydown(function(e){
//     $("h1").text(e.key);
// })

$(document).on("keydown", function(e){
    $("h1").text(e.key);
})

// -------------------------------------------------------------
// Adding and Removing Elements with jQuery
// .before||after("<html tag>content<html closing tag>");
// .prepend||append("<html tag>content<html closing tag>");
// $("class").remove();


$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
// $("button").remove();

// -------------------------------------------------------------
// Website Animation Using jQuery
// .toggle();
// fadeOut();
// fadeIn();
// fadeToggle();
// slideUp();
// slideDown();
// slideToggle();
// .animate({property: value});

// $("button").on("click", function(){
//   $("h1").slideToggle();
// })

// $("button").on("click", function(){
//   $("h1").animate({opacity: 0.5});
// })

$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
})


