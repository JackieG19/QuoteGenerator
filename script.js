var myQuotes = {
    
words: [
    {quote:"Quiet people have the loudest mind. - Stephen King" 
    },  //1
    
    {quote: "Holding onto anger is like drinking poison and expecting the other person to die. - Buddha"
    },  //2
    
    {quote: "Show respect even to people who don't deserve it; not as a refelection of their character, but as a reflection of yours. - Dave Willis"
    },  //3
    
    {quote: "Any man who keeps working is not failure. - Ray Bradbury"
    },  //5
    
    {quote: "You will never be free until you free yourself from the prison of your own false thoughts. - Philip Arnold"
    }   //6
 ],
};


/*
function myFunction(){
var randomNum = Math.floor(Math.random() * 6);
var word = (myQuotes[randomNum].quote);
document.getElementById("text").innerHTML = word + "—" + myQuotes[randomNum].text;
}
*/

function myFunction(){
var myQuotes = "";
var i;
for (i = 0; i < 6; i++) {
    myQuotes += [i];
}
document.getElementById("text").innerHTML = myQuotes.quote[i];
}
/*
function myDisplay(value) {
    var selecter = document.getElementById("select").value;
   if(selecter == "Economy") {
        document.getElementById("display").innerHTML = myQutoe.quote[i];}
   else if(selecter == "Standard"){
       document.getElementById("display2").innerHTML = "Car Price $ " + myCar.Standard.price + "<br>" + "Cars Available" + myCar.Standard.carAvail;}
   console.log(myDisplay()); 
}
*/