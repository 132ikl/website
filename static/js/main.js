function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

const splashes = [
  "117 BOMB pops!",
  "28% javascript!",
  "2 + 2 = 10... in base 4!",
  "[] + [] = \"\"",
  "[object Object]!",
  "alert(\"hacked!\");",
  "also try ISO-8601!",
  "also try mastodon!",
  "also try minecraft!",
  "also try portal!",
  "also try terraria!",
  "anta baka?!",
  "any baconers in chat?",
  "aurora borealis!",
  "automatic splash scaling!",
  "black lives matter!",
  "blåhaj!",
  "bruh7",
  "daniel naroditsky is a prophet!",
  "dark mode!",
  "don't run pacman -Syy!",
  "don't use python 2!",
  "exploding lemons!",
  "get your snacks!",
  "gpl licensed!",
  "hello, goodbye!",
  "I don't know tha-- aaaaaa!",
  "i use arch btw",
  "i want your strongest potions!",
  "i've come to make an announcement!",
  "mumbo for mayor!",
  "now with 100% less static site generators!",
  "Omedetou!",
  "open source!",
  "opencv is (not) fun to compile!",
  "opensight is a free, open source vision system available to all frc teams",
  "running on PotatOS!",
  "sans undertale!",
  "Segmentation fault (core dumped)",
  "she's so... heavy!",
  "since 2018!",
  "Sorry Link, I can't give credit!",
  "thank you guude!",
  "the part where he kills you!",
  "THE PLAN IS SIMPLE!",
  "trans rights!",
  "wait this design is actually really bad",
  "wear your seatbelt!",
  "wholesome 100 keanu chungus!",
  "wood fired pizza!",
  "{} + [] = 0",
  `now with ${Math.floor(Math.random() * 101)}% less randomness!`,
  `seen by ${Math.floor(Math.random() * 99) + 2} people!`,
];
const splashText = splashes[Math.floor(Math.random() * splashes.length)];

let splash = document.getElementById("splash")
splash.textContent = splashText;

// fit text
let container = document.getElementById("splash-container");
const width = container.offsetWidth;
const textConstant = .65; // fun magic number for Minecraftia
console.log(splash.textContent.length);
let size = width / (textConstant * splash.textContent.length);
size = clamp(size, 1, 25);

splash.style.fontSize = size + 'px';
