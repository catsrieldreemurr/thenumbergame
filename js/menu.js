// references
const randomQuote = document.getElementById("randomQuote");

// Global Variables
const quotes = [
    "Also try Terraria",
    "Also try Minecraft",
    "I doubt this'll work",
    "Stare down the unmoving truth by facing your shifting roots",
    "Searchlights from Pressure",
    "You've wooped a fun sized french guys ass once",
    "Guess the number!",
    "Lemon-Face",
    "Let's play make-believe!",
    "I hope you're a good story reader!",
    "So like a million dollars of socks",
    "I have a version of your mom in my inventory",
    "This project is stupid",
    "Bleh",
    "I'm blue dabadeedabaa",
    "Ooo, wee you I look just like buddy holly",
    "Oh Oh and you're mary tyler moore",
    "xnopyt",
    "aaaaaaajjjjjjjjj",
    "hrrkrkrkrwpfrbrbrbrlablblblblblblwhitoo'ap",
    "I'm in the abandoned city of Pripyat",
    "This field in the middle of nowhere in Russia does not look that useful",
    "It’s your game, Mic. You have so much to gain",
    "Ooh, you can't see me but I'm being inconspicuous!",
    "This is a useless feature that I just wanted to add tbh",
    "RAID: SHADOWLEGENDS"
]

window.onload = function(){
    let randomValue = Math.floor(Math.random() * quotes.length);
    randomQuote.innerHTML = `"${quotes[randomValue]}"`;
}