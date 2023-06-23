const express = require('express');
const app = express();

// Route pour récupérer les questions du quiz avec les images
app.get('/api/questions', (req, res) => {
  // Charger les questions du quiz à partir de la source de données
  const questions = [
    {
      question: "Quel est l'autre nom de l'Homme-Mystère ?",
      image: "/path/to/question1_image.jpg",
      choices: ["Le Sphinx", "Saphir", "Le Joker"]
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

  res.json(questions);
});

// Démarrez le serveur sur le port 3000 (ou tout autre port de votre choix)
app.listen(3000, () => {
  console.log('Le serveur est démarré sur le port 3000.');
});
