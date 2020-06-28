function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

const splashes = [
  "now with 100% less static site generators!",
  "automatic splash scaling!",
  "i use arch btw",
  "open source!",
  "trans rights!",
  "this text is hard to read at the default size but if you zoom in you can read it fine!",
  "14% javascript!",
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
