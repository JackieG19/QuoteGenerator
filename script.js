/* global $ */
var myQuotes = {
    
    words: ["Quiet people have the loudest mind. - Stephen King",
            "Holding onto anger is like drinking poison and expecting the other person to die. - Buddha",
            "Show respect even to people who don't deserve it; not as a refelection of their character, but as a reflection of yours. - Dave Willis",
            "Any man who keeps working is not failure. - Ray Bradbury",
            "You will never be free until you free yourself from the prison of your own false thoughts. - Philip Arnold"
        ]
    };


function newQuote() {
var randomQuote = Math.floor(Math.random() * (myQuotes.words.length));
document.getElementById('diplayText').innerHTML = myQuotes.words[randomQuote];

/*var tweet =
$(".share").onclick(function(event){
   'https://twitter.com/intent/tweet?text=' + myQuotes.words[randomQuote] + "";
     window.open(tweet);
 });*/
  

  var tweet =
 $(".share").onclick(function(event){randomQuote(); 
    'https://twitter.com/intent/tweet?text=' + myQuotes.words[randomQuote] + "";
     window.open(tweet); 
     
 });
}