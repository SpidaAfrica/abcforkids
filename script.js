
const container = document.getElementById("letters");
const speak = (text) => {
  const msg = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(msg);
};

for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i);
  const btn = document.createElement("button");
  btn.className = "letter";
  btn.textContent = letter;
  btn.onclick = () => speak(letter);
  container.appendChild(btn);
}
