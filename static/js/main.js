function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

const splashes = [
  "13% javascript!",
  "automatic splash scaling!",
  "dark mode!",
  "don't run pacman -Syy!",
  "i use arch btw",
  "now with 100% less static site generators!",
  "open source!",
  "opencv is fun to compile!",
  "this text is hard to read at the default size but if you zoom in you can read it fine!",
  "trans rights!",
  "try minecraft!",
];
const splashText = splashes[Math.floor(Math.random() * splashes.length)];

let splash = document.createElement("p")
splash.innerHTML = splashText;
splash.className = "splash";

let container = document.getElementById("splash-container");

// fit text
const width = container.offsetWidth;
const textConstant = .65; // fun magic number for Minecraftia
let size = width / (textConstant * splash.innerText.length);
size = clamp(size, 1, 25);

container.append(splash);
splash.style.fontSize = size + 'px';
