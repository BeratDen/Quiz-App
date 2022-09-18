// OOP: Nesne tabanlı programlama
// Object

let soru = {
  soruMetni: "Hangisi JavaScript paket yönetim uygulamasıdır.",
  cevapSecenekleri: {
    a: "Node.js",
    b: "TypeScript",
    c: "Npm",
  },
  dogruCevap: "c",
  cevabiKontrolEt: function (cevap) {
    return cevap === this.dogruCevap;
  },
};

// let soru2 = {
//   soruMetni: "Hangisi .net paket yönetim uygulamasıdır.",
//   cevapSecenekleri: {
//     a: "Node.js",
//     b: "nuget",
//     c: "Npm",
//   },
//   dogruCevap: "b",
//   cevabiKontrolEt: function (cevap) {
//     return cevap === this.dogruCevap;
//   },
// };

// Sınıf => nesne * 30
// ES5, ES6, ES7

function Question(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Question.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let questions = [
  new Question(
    "1-Hangisi .Net paket yönetim uygulamasıdır.",
    {
      a: "Node.js",
      b: "Nuget",
      c: "Npm",
    },
    "b"
  ),
  new Question(
    "2-Hangisi JavaScript paket yönetim uygulamasıdır.",
    {
      a: "Node.js",
      b: "TypeScript",
      c: "Npm",
    },
    "c"
  ),
  new Question(
    "3-Hangisi Ruby paket yönetim uygulamasıdır.",
    {
      a: "Node.js",
      b: "Nuget",
      c: "Npm",
    },
    "b"
  ),
  new Question(
    "4-Hangisi Angular paket yönetim uygulamasıdır.",
    {
      a: "Node.js",
      b: "Nuget",
      c: "Npm",
    },
    "b"
  ),
  new Question(
    "5-Hangisi Python paket yönetim uygulamasıdır.",
    {
      a: "Node.js",
      b: "Nuget",
      c: "Npm",
    },
    "b"
  ),
];

function Quiz(questions) {
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
};

const quiz = new Quiz(questions);

document.querySelector(".btn-start").addEventListener("click", function () {
  document.querySelector(".quiz_box").classList.add("active");
  ShowQuestion(quiz.getQuestion());
  document.querySelector(".next_btn").classList.remove("show");
});
document.querySelector(".next_btn").addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    document.querySelector(".quiz_box").classList.add("active");
    quiz.questionIndex++;
    ShowQuestion(quiz.getQuestion());
    document.querySelector(".next_btn").classList.remove("show");
  } else {
    console.log("quiz bitti");
  }
});

const options_list = document.querySelector(".options_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function ShowQuestion(soru) {
  let questionİnner = `<span>${soru.soruMetni}</span>`;
  let options = "";
  for (let anwser in soru.cevapSecenekleri) {
    options += `
      <div class="option">
        <span><b>${anwser}</b>: ${soru.cevapSecenekleri[anwser]}</span>
      </div>`;
  }

  document.querySelector(".question-text").innerHTML = questionİnner;
  options_list.innerHTML = options;

  const option = options_list.querySelectorAll(".option");

  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(option) {
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.getQuestion();

  if (soru.cevabiKontrolEt(cevap)) {
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", incorrectIcon);
  }
  for (let i = 0; i < options_list.children.length; i++) {
    options_list.children[i].classList.add("disabled");
  }
  document.querySelector(".next_btn").classList.add("show");
}
