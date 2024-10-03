const postures = [
  { name: "Padangusthasana", img: "images/padangusthasana.jpg" },
  { name: "Padahastasana", img: "images/padahastasana.jpg" },
  { name: "Utthita Trikonasana", img: "images/utthita_trikonasana.jpg" },
  { name: "Parivrtta Trikonasana", img: "images/parivrtta_trikonasana.jpg" },
  { name: "Utthita Parsvakonasana", img: "images/utthita_parsvakonasana.jpg" },
  {
    name: "Parivrtta Parsvakonasana",
    img: "images/parivrtta_parsvakonasana.jpg",
  },
  {
    name: "Prasarita Padottanasana A",
    img: "images/prasarita_padottanasana_a.jpg",
  },
  {
    name: "Prasarita Padottanasana B",
    img: "images/prasarita_padottanasana_b.jpg",
  },
  {
    name: "Prasarita Padottanasana C",
    img: "images/prasarita_padottanasana_c.jpg",
  },
  {
    name: "Prasarita Padottanasana D",
    img: "images/prasarita_padottanasana_d.jpg",
  },
  { name: "Parsvottanasana", img: "images/parsvottanasana.jpg" },
  {
    name: "Utthita Hasta Padangusthasana",
    img: "images/utthita_hasta_padangusthasana.jpg",
  },
  {
    name: "Ardha Baddha Padmottanasana",
    img: "images/ardha_baddha_padmottanasana.jpg",
  },
  { name: "Utkatasana", img: "images/utkatasana.jpg" },
  { name: "Virabhadrasana A", img: "images/virabhadrasana_a.jpg" },
  { name: "Virabhadrasana B", img: "images/virabhadrasana_b.jpg" },
  { name: "Dandasana", img: "images/dandasana.jpg" },
  { name: "Paschimottanasana A", img: "images/paschimottanasana_a.jpg" },
  { name: "Paschimottanasana B", img: "images/paschimottanasana_b.jpg" },
  { name: "Paschimottanasana C", img: "images/paschimottanasana_c.jpg" },
  { name: "Purvottanasana", img: "images/purvottanasana.jpg" },
  {
    name: "Ardha Baddha Padma Paschimottanasana",
    img: "images/ardha_baddha_padma_paschimottanasana.jpg",
  },
  {
    name: "Tiriang Mukha Eka Pada Paschimottanasana",
    img: "images/tiriang_mukha_eka_pada_paschimottanasana.jpg",
  },
  { name: "Janu Sirsasana A", img: "images/janu_sirsasana_a.jpg" },
  { name: "Janu Sirsasana B", img: "images/janu_sirsasana_b.jpg" },
  { name: "Janu Sirsasana C", img: "images/janu_sirsasana_c.jpg" },
  { name: "Marichyasana A", img: "images/marichyasana_a.jpg" },
  { name: "Marichyasana B", img: "images/marichyasana_b.jpg" },
  { name: "Marichyasana C", img: "images/marichyasana_c.jpg" },
  { name: "Marichyasana D", img: "images/marichyasana_d.jpg" },
  { name: "Navasana", img: "images/navasana.jpg" },
  { name: "Bhujapidasana", img: "images/bhujapidasana.jpg" },
  { name: "Kurmasana", img: "images/kurmasana.jpg" },
  { name: "Supta Kurmasana", img: "images/supta_kurmasana.jpg" },
  { name: "Garbha Pindasana", img: "images/garbha_pindasana.jpg" },
  { name: "Kukkutasana", img: "images/kukkutasana.jpg" },
  { name: "Baddha Konasana A", img: "images/baddha_konasana_a.jpg" },
  { name: "Baddha Konasana B", img: "images/baddha_konasana_b.jpg" },
  { name: "Upavistha Konasana A", img: "images/upavistha_konasana_a.jpg" },
  { name: "Upavistha Konasana B", img: "images/upavistha_konasana_b.jpg" },
  { name: "Supta Konasana", img: "images/supta_konasana.jpg" },
  { name: "Supta Padangusthasana", img: "images/supta_padangusthasana.jpg" },
  { name: "Ubhaya Padangusthasana", img: "images/ubhaya_padangusthasana.jpg" },
  {
    name: "Urdhva Mukha Paschimottanasana",
    img: "images/urdhva_mukha_paschimottanasana.jpg",
  },
  { name: "Setu Bandhasana", img: "images/setu_bandhasana.jpg" },
  { name: "Urdhva Dhanurasana", img: "images/urdhva_dhanurasana.jpg" },
  { name: "Sarvangasana", img: "images/sarvangasana.jpg" },
  { name: "Halasana", img: "images/halasana.jpg" },
  { name: "Karnapidasana", img: "images/karnapidasana.jpg" },
  { name: "Urdhva Padmasana", img: "images/urdhva_padmasana.jpg" },
  { name: "Pindasana", img: "images/pindasana.jpg" },
  { name: "Matsyasana", img: "images/matsyasana.jpg" },
  { name: "Uttana Padasana", img: "images/uttana_padasana.jpg" },
  { name: "Sirsasana", img: "images/sirsasana.jpg" },
  { name: "Baddha Padmasana", img: "images/baddha_padmasana.jpg" },
  { name: "Padmasana", img: "images/padmasana.jpg" },
  { name: "Utpluthih Tolasana", img: "images/tolasana.jpg" },
  { name: "Savasana", img: "images/savasana.jpg" },
];

let score = 0;
let incorrectCount = 0;
let incorrectPostures = [];
let currentIndex = 0;
let reviewMode = false;
let isRandomMode = false; // Bandera para controlar si el modo es aleatorio o no

// Función para mezclar las posturas aleatoriamente
function shufflePostures(array) {
  return array.sort(() => 0.5 - Math.random());
}

// Función para comenzar el juego
function startGame(randomMode) {
  isRandomMode = randomMode;
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-container").style.display = "block";

  if (isRandomMode) {
    shufflePostures(postures);
  }
  loadNextExercise();
}

document
  .getElementById("play-order")
  .addEventListener("click", () => startGame(false));
document
  .getElementById("play-random")
  .addEventListener("click", () => startGame(true));

function getRandomPostures(correctPosture) {
  const shuffledPostures = postures.filter(
    (p) => p.name !== correctPosture.name
  );
  let randomPostures = shuffledPostures
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
  randomPostures.push(correctPosture);
  return randomPostures.sort(() => 0.5 - Math.random());
}

function loadNextExercise() {
  let correctPosture;

  if (currentIndex < postures.length) {
    correctPosture = postures[currentIndex];
  } else if (incorrectPostures.length > 0) {
    reviewMode = true;
    correctPosture = incorrectPostures.shift();
  } else {
    showFinalMessage();
    return;
  }

  const randomPostures = getRandomPostures(correctPosture);
  document.getElementById("name").textContent = correctPosture.name;

  randomPostures.forEach((posture, index) => {
    const imgElement = document.getElementById(`img${index + 1}`);
    imgElement.src = posture.img;
    imgElement.alt = posture.name;
    imgElement.onclick = () =>
      checkAnswer(posture.name, correctPosture.name, imgElement);
  });
}

function checkAnswer(selectedName, correctName, imgElement) {
  if (selectedName === correctName) {
    score++;
    document.getElementById("score").textContent = `Puntuación: ${score}`;
    imgElement.classList.add("correct");
  } else {
    incorrectCount++;
    document.getElementById(
      "incorrectCount"
    ).textContent = `Posturas incorrectas: ${incorrectCount}`;
    imgElement.classList.add("incorrect");
    if (!reviewMode) {
      incorrectPostures.push(postures[currentIndex]);
    }
  }

  setTimeout(() => {
    imgElement.classList.remove("correct", "incorrect");
    currentIndex++;
    loadNextExercise();
  }, 500);
}

function showFinalMessage() {
  document.getElementById("name").textContent = "¡Felicitaciones!";
  document.querySelector(".images-container").style.display = "none";
  document.getElementById("score").textContent = `Puntuación final: ${
    score - incorrectCount
  }`;
}

document.getElementById("restart").addEventListener("click", () => {
  // Restablecer las variables del juego
  score = 0;
  incorrectCount = 0;
  incorrectPostures = [];
  currentIndex = 0;
  reviewMode = false;

  // Restablecer los textos de puntuación e incorrectas
  document.getElementById("score").textContent = `Puntuación: 0`;
  document.getElementById(
    "incorrectCount"
  ).textContent = `Posturas incorrectas: 0`;

  // Volver a mostrar la pantalla inicial y ocultar el juego
  document.getElementById("game-container").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
});

loadNextExercise();
