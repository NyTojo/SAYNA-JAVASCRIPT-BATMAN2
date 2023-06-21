const questions = [
    {
      question: "Quel est l'autre nom de l'Homme-Mystère ?",
      choices: ["Le Sphinx", "Saphir", "Le Joker"],
      answer: "Le Sphinx"
    },
    {
      question: "Quel est l'objet fétiche de Double Face ?",
      choices: ["Une pièce", "Un livre", "Un couteau"],
      answer: "Une pièce"
    },
    {
      question: "Qui a produit Batman en 1964 ?",
      choices: ["Stanley Kubrick", "Andy Warhol", "Peter Jackson"],
      answer: "Andy Warhol"
    },
    {
      question: "Batman c'est aussi le nom d'une ville en...",
      choices: ["Turquie", "Islande", "Allemagne"],
      answer: "Turquie"
    },
    {
      question: "Quel vilain apparaît pour la première fois dans le Batman 232 ?",
      choices: ["Le Pingouin", "Ra's al Ghul", "Poison Ivy"],
      answer: "Ra's al Ghul"
    },
    {
      question: "Quelle ville Batman défend-il ?",
      choices: ["Gotham City", "Starling City", "Hell's Kitchen"],
      answer: "Gotham City"
    },
    {
      question: "Tim Burton a réalisé deux Batman, qui jouait Batman ?",
      choices: ["Georges Clooney", "Val Kilmer", "Michael Keaton"],
      answer: "Michael Keaton"
    },
    {
      question: "Dans son premier Batman (1989) Jack Nicholson jouait :",
      choices: ["Le Pingouin", "L'Homme Mystère", "Le Joker"],
      answer: "Le Joker"
    },
    {
      question: "Qui est Jonathan Crane ?",
      choices: ["L'Épouvantail", "Le Joker", "Hugo Strange"],
      answer: "L'Épouvantail"
    },
    {
      question: "Qui est l'interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
      choices: ["Emma Watson", "Gigi Hadid", "Lola Iolani Momoa", "Zoë Kravitz"],
      answer: "Zoë Kravitz"
    },
    {
      question: "Quel est le prénom des parents du jeune Bruce Wayne ?",
      choices: ["Thomas et Martha", "Elaine et Georges", "Martha et James"],
      answer: "Thomas et Martha"
    },
    {
      question: "Qui interprète le Joker en 2008 ?",
      choices: ["Heath Ledger", "Haeth Ledger", "Heath Ledger"],
      answer: "Heath Ledger"
    },
    {
      question: "En quelle année Robin fait-il sa première apparition ?",
      choices: ["1940", "1939", "1941"],
      answer: "1940"
    },
    {
      question: "Qui est la fille de Batman et Catwoman (Earth-2) ?",
      choices: ["Oracle", "Huntress", "Black Canary"],
      answer: "Huntress"
    }

  ];


  let currentQuestion = 0;
  let score = 0;

  const gameStartButton = document.getElementById("gamestart");
  const quizSection = document.getElementById("quiz");
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const nextButton = document.getElementById("nextButton");



  gameStartButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", nextQuestion);

  function startQuiz() {
    document.getElementById("quiz").style.display = "block";
    nextButton.style.display = "block";
    showQuestion();
    document.getElementById("introduction").style.display = "none";
  }
  

  function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";

    question.choices.forEach(choice => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "choice";
      checkbox.value = choice;

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(choice));

      choicesElement.appendChild(label);
    });

    nextButton.style.display = "none";
  }

  function nextQuestion() {
    const selectedChoices = document.querySelectorAll('input[name="choice"]:checked');
    let userAnswer = [];

    selectedChoices.forEach(choice => {
      userAnswer.push(choice.value);
    });

    const question = questions[currentQuestion];
    const isCorrect = compareArrays(userAnswer, question.answer);

    if (isCorrect) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }

  function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }

  function showResult() {
    quizSection.innerHTML = `
      <h2>Résultat</h2>
      <p>Vous avez répondu correctement à ${score} question(s) sur ${questions.length}.</p>
      <button id="restart">Recommencer le quizz</button>
    `;

    const restartButton = document.getElementById("restart");
    restartButton.addEventListener("click", restartQuiz);
  }

  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizSection.style.display = "none";
    gameStartButton.style.display = "block";
  }

  var topleftImg = ["./home/Illustrations/Batgame_4.png",
                "./home/Illustrations/Batgame_5.png",
                "./home/Illustrations/Batgame_6.png",
                "./home/Illustrations/Batgame_7.png",
                "./home/Illustrations/Batgame_8.png",
                "./home/Illustrations/Batgame_9.png",
                "./home/Illustrations/Batgame_10.png",
                "./home/Illustrations/Batgame_11.png",
                "./home/Illustrations/Batgame_12.png",
            ]
