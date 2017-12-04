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

/*$(document).ready(function() {
var share = document.getElementById('diplayText').innerHTML;
var tweet = 
  $(".share").onclick(function(event){randomQuote(); 
  'https://twitter.com/intent/tweet?text=' + myQuotes.words[randomQuote];
     window.open(tweet); 
    });
  */
}

function twitter(){

var share = document.getElementById('diplayText').innerHTML;
var tweet = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(share) + "&original_referer=";
     window.open(tweet); 
}

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));