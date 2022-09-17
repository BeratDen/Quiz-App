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
    "Hangisi .Net paket yönetim uygulamasıdır.",
    {
      a: "Node.js",
      b: "Nuget",
      c: "Npm",
    },
    "b"
  ),
  new Question(
    "Hangisi JavaScript paket yönetim uygulamasıdır.",
    {
      a: "Node.js",
      b: "TypeScript",
      c: "Npm",
    },
    "c"
  ),
  new Question(
    "Hangisi Ruby paket yönetim uygulamasıdır.",
    {
      a: "Node.js",
      b: "Nuget",
      c: "Npm",
    },
    "b"
  ),
  new Question(
    "Hangisi Angular paket yönetim uygulamasıdır.",
    {
      a: "Node.js",
      b: "Nuget",
      c: "Npm",
    },
    "b"
  ),
  new Question(
    "Hangisi Python paket yönetim uygulamasıdır.",
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

console.log(quiz.getQuestion());

document.querySelector(".btn-start").addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex) {
    document.querySelector(".quiz_box").classList.add("active");
    let question = quiz.getQuestion();
    quiz.questionIndex++;
  } else {
    console.log("quiz bitti");
  }
});
