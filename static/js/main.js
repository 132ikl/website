const splashes = [
  "now with 100% less static site generators!",
  "automatic splash scaling!",
  "i use arch btw",
  "open source!",
  "trans rights!",
  "this text is hard to read at the default size but if you zoom in you can read it fine!",
  "61% javascript!",
];
const splashText = splashes[Math.floor(Math.random() * splashes.length)];

var splash = document.createElement("p")
splash.innerHTML = splashText;
splash.className = "splash";

document.getElementById("splash-container").append(splash);

textFit(splash, {
  detectMultiLine : false,
  multiLine : false,
  minFontSize : 1,
  maxFontSize : 25,
  widthOnly : true
});
