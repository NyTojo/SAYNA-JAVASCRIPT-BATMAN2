var currentQuestion = 1;
var totalQuestions = 15;
var playerResponses = [];

var jeuSection = document.getElementById('quiz');
var jeuDiv = document.querySelector('.jeu');
var introDiv = document.querySelector('.intro');
var levelSpan = document.querySelector('.level');
var questionHeading = document.getElementById('question');
var choicesDiv = document.getElementById('choices');
var nextButton = document.getElementById('nextButton');

function startQuiz() {
  introDiv.style.display = 'none';
  jeuDiv.style.display = 'block';

  levelSpan.textContent = currentQuestion;

  function loadQuestion() {
    var questions = [
      {
        question: "Quel est l'autre nom de l'Homme-Mystère ?",
        choices: ["Le Sphinx", "Saphir", "Le Joker"],
        answer: "Le Sphinx",
        image: "./home/Illustrations/Batgame_3.png/"
      },
      {
        question: "Quel est l'ancienne proffession de Harley Quinn ?",
        choices: ["infirmiere", "Psychiatre", "Dentiste"],
        answer: "Le Sphinx",
        image: "./home/Illustrations/Batgame_3.png/"
      },
      {
        question: "Quel est l'objet fétiche de Double Face ?",
        choices: ["Une pièce", "Un livre", "Un couteau"],
        answer: "Une pièce",
        image: "./home/Illustrations/Batgame_3.png/"
      },
      {
        question: "Qui a produit Batman en 1964 ?",
        choices: ["Stanley Kubrick", "Andy Warhol", "Peter Jackson"],
        answer: "Andy Warhol",
        image: "./home/Illustrations/Batgame_3.png/"
      },
      {
        question: "Batman c'est aussi le nom d'une ville en...",
        choices: ["Turquie", "Islande", "Allemagne"],
        answer: "Turquie",
        image: "./home/Illustrations/Batgame_3.png/"
      },
      {
        question: "Quel vilain apparaît pour la première fois dans le Batman 232 ?",
        choices: ["Le Pingouin", "Ra's al Ghul", "Poison Ivy"],
        answer: "Ra's al Ghul",
        image: "./home/Illustrations/Batgame_3.png/"
      },
      {
        question: "Quelle ville Batman défend-il ?",
        choices: ["Gotham City", "Starling City", "Hell's Kitchen"],
        answer: "Gotham City",
        image: "./home/Illustrations/Batgame_3.png/"
      },
      {
        question: "Tim Burton a réalisé deux Batman, qui jouait Batman ?",
        choices: ["Georges Clooney", "Val Kilmer", "Michael Keaton"],
        answer: "Michael Keaton",
        image: "./home/Illustrations/Batgame_3.png/"
      },
      {
        question: "Dans son premier Batman (1989) Jack Nicholson jouait :",
        choices: ["Le Pingouin", "L'Homme Mystère", "Le Joker"],
        answer: "Le Joker",
        image: "./home/Illustrations/Batgame_3.png/"
      },
      {
        question: "Qui est Jonathan Crane ?",
        choices: ["L'Épouvantail", "Le Joker", "Hugo Strange"],
        answer: "L'Épouvantail",
        image: "./home/Illustrations/Batgame_3.png/"
      },
      {
        question: "Qui est l'interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
        choices: ["Emma Watson", "Gigi Hadid", "Lola Iolani Momoa", "Zoë Kravitz"],
        answer: "Zoë Kravitz",
        image: "./home/Illustrations/Batgame_3.png/"
      },
      {
        question: "Quel est le prénom des parents du jeune Bruce Wayne ?",
        choices: ["Thomas et Martha", "Elaine et Georges", "Martha et James"],
        answer: "Thomas et Martha",
        image: "./home/Illustrations/Batgame_3.png/"
      },
      {
        question: "Qui interprète le Joker en 2008 ?",
        choices: ["Heath Ledger", "Haeth Ledger", "Heath Ledger"],
        answer: "Heath Ledger",
        image: "./home/Illustrations/Batgame_3.png/"
      },
      {
        question: "En quelle année Robin fait-il sa première apparition ?",
        choices: ["1940", "1939", "1941"],
        answer: "1940",
        image: "./home/Illustrations/Batgame_3.png/"
      },
      {
        question: "Qui est la fille de Batman et Catwoman (Earth-2) ?",
        choices: ["Oracle", "Huntress", "Black Canary"],
        answer: "Huntress",
        image: "./home/Illustrations/Batgame_3.png/"
      }
    ];
    var currentQuestionData = questions[currentQuestion - 1];
    var question = currentQuestionData.question;
    var choices = currentQuestionData.choices;

    questionHeading.textContent = question;
    choicesDiv.innerHTML = '';

    for (var i = 0; i < choices.length; i++) {
      var choiceDiv = document.createElement('div');
      choiceDiv.className = 'qcm';

      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      var label = document.createElement('label');
      label.htmlFor = 'choix' + (i + 1);
      label.textContent = choices[i];

      choiceDiv.appendChild(checkbox);
      choiceDiv.appendChild(label);
      choicesDiv.appendChild(choiceDiv);
    }
  }

  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion <= totalQuestions) {
      loadQuestion();
      levelSpan.textContent = currentQuestion;
    } else {
      console.log('Le quizz est terminé');
    }
  }
  function nextQuestion() {
    currentQuestion++;

    // Récupérer les réponses sélectionnées par le joueur
    var selectedChoices = document.querySelectorAll('input[type="checkbox"]:checked');
    var playerAnswer = [];
    for (var i = 0; i < selectedChoices.length; i++) {
      playerAnswer.push(selectedChoices[i].nextSibling.textContent);
    }

    // Ajouter la réponse du joueur au tableau playerResponses
    playerResponses.push(playerAnswer);

    if (currentQuestion <= totalQuestions) {
      loadQuestion();
      levelSpan.textContent = currentQuestion;
    } else {
      endQuiz();
    }
 
    console.log('Le quizz est terminé');
    console.log('Réponses des joueurs :');
    console.log(playerResponses);

    // Calculer le résultat en comparant les réponses des joueurs avec les réponses correctes
    var questions = [
      // ... vos questions et réponses ici ...
    ];

    var correctAnswers = 0;
    for (var i = 0; i < totalQuestions; i++) {
      if (playerResponses[i].toString() === questions[i].answer.toString()) {
        correctAnswers++;
      }
    }

    console.log('Résultat : ' + correctAnswers + '/' + totalQuestions);
  }
  

  nextButton.addEventListener('click', nextQuestion);
}

