//Quotes list
var quotes = [
"Death is the enemy. The enemy always wins, but we still need to fight. - Berric Dondarion",
"When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey. - Arya Stark",
"Information is the key. You need to learn your enemies\'\ strengths and strategies. You need to learn which of your friends are not your friends. - Varys",
"Money buys a man's silence for a time. A bolt in the heart buys it forever. - Petyr Baelish",
"It's not easy being drunk all the time. If it were easy, everyone would do it. - Tyrion Lannister",
"Chaos isn't a pit. Chaos is a ladder. Many who try to climb it fail and never get to try again. - Petyr Baelish",
"A dragon is not a slave. - Daenarys Targaryen",
"There is a beast in every man and it stirs when you put a sword in his hand. - Jorah Mormont",
"It's the family name that lives on. It's all that lives on. Not your personal glory, not your honor... but family. - Tywin Lannister",
"When you play the game of thrones, you win or you die. - Cersei Lannister",
"The man who passes the sentence should swing the sword. - Ned Stark",
"Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you. - Tyrion Lannister",
"I was trying to win the throne to save the kingdom, when I should have been trying to save the kingdom to win the throne - Stannis Baratheon",
"I never asked for this crown. Gold is cold and heavy on the head, but so long as I am the king, I have a duty. If I must sacrifice one child to the flames to save a million from the dark, Sacrifice is never easy, Davos. Or it is no true sacrifice. - Stannis Baratheon",
"Until the sun rises in the west and sets in the east, until the rivers run dry and the mountains blow in the wind like leaves. When my womb quickens again, and I bear a living child. Then you will return, my sun-and-stars, and not before. - Daenarys Targaryen",
"You're the great number of woman I ever imagined. - Daario Naharis",
"The Iron Throne is mine by right. Those who denies it are my foes - Stannis Baratheon"

];

//Random Quotes generation
function newQuote() {
    
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    //console.log(quotes[randomNumber]);
    console.log(randomNumber)
    console.log(quotes[randomNumber]);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    

}
function tweetThis() {
    var tweetMessage = quoteDisplay.textContent;
        if (tweetMessage === "Click Generate New Quote button to have Game Of Thrones Inspired Quotes here!...") {
            alert('Generate quotes first before sharing!');
        } else {
            window.open('https://twitter.com/intent/tweet?text="' + tweetMessage + '"&via=kbpsystem', '_blank');
        }
}
