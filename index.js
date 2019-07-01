let readlineSync = require('readline-sync');

let suitability = 0;

let areYouReady = () => {
  let getStarted = readlineSync.question("Ready? Let's begin. Type yes or no.\n");
  if (getStarted === "yes") {
    console.log("Excellent. Let's proceed.\n");

  } else if (getStarted === "no") {
    console.log("Are you sure? You look pretty ready to me.\n");
    areYouReady()
  } else {
    areYouReady();
  }
}

let creativeOrLogical = () => {
  let creativeLogic = ['Creative', 'Logical', 'Both'];
  index = readlineSync.keyInSelect(creativeLogic, 'Are you more creative or logical?', {
    cancel: false
  });
  switch (index) {
    case 0:
      suitability += 2;
      break;

    case 1:
      suitability += 2;
      break;

    case 2:
      suitability += 4;
      break;

    default:
      creativeOrLogical();
  }
}

let philosophyOrMath = () => {
  let philosopherOrMathematician = ['Philosophy', 'Math', 'Both'];
  index = readlineSync.keyInSelect(philosopherOrMathematician, 'Philosophy or Math?', {
    cancel: false
  });
  switch (index) {
    case 0:
      suitability += 3;
      break;

    case 1:
      suitability += 2;
      break;

    case 2:
      suitability += 4;
      break;

    default:
      philosophyOrMath();
  }
}

let whyTheChicken = () => {
  let chicken = ['She wanted to stretch her legs.', 'Because she saw what you did to her eggs', 'Because this is AMERICA ! It can go anywhere it wants.'];
  index = readlineSync.keyInSelect(chicken, 'Why did the chicken cross the road?', {
    cancel: false
  });
  switch (index) {
    case 0:
      suitability += 1;
      break;

    case 1:
      suitability += 2;
      break;

    case 2:
      suitability += 3;
      break;

    default:
      whyTheChicken();
  }
}

let preferedTvShow = () => {
  let tvShows = ['The Office', "Friends", 'Game of Throne'];
  index = readlineSync.keyInSelect(tvShows, 'Pick a tv show?', {
    cancel: false
  });

  switch (index) {
    case 0:
      suitability += 2;
      theOffice();
      break;

    case 1:
      suitability += 3;
      friends();
      break;

    case 2:
      suitability += 4;
      gameOfTrone();
      break;

    default:
      preferedTvShow();

  }
}

let theOffice = () => {
  let fanQuiz = ['Michael Scott', 'Dwight Schrute', 'Jim Halper'];
  index = readlineSync.keyInSelect(fanQuiz, 'You are more like ...?', {
    cancel: false
  });
  switch (index) {
    case 0:
      suitability += 1;
      break;

    case 1:
      suitability = 4;
      break;

    case 2:
      suitability = 3;
      break;

    default:
      theOffice();
  }
}

let friends = () => {
 preferedActor = ['Rachel Green', 'Joey Tribbiani ', 'Ross Geller'];
  index = readlineSync.keyInSelect(preferedActor, 'You are more like ...?',{
  cancel: false
});
switch (index){
  case 0:
      suitability += 3;
      break;

    case 1:
      suitability += 1;
      break;

    case 2:
      suitability += 2
      break;

    default:
        friends();

}

}

let gameOfTrone = () => {
  favoriteActors = ['Arya Stark', 'Cersei Lanister', 'Daenerys targaryen'];
    index = readlineSync.keyInSelect(favoriteActors, 'You are more like...?', {
      cancel: false
    });

  switch (index) {
    case 0:
      suitability += 3;
      break;

    case 1:
      suitability += 1;
      break;

    case 2:
      suitability += 2
      break;

    default:
      gameOfTrone();
  }
}

let preferedSocialNetwork = () => {
  let socialNetwork = ['Instagram', 'Facebook', 'Linkedin'],
    index = readlineSync.keyInSelect(socialNetwork, 'Pick a social network ?', {
      cancel: false
    });

  switch (index) {
    case 0:
      suitability += 3;
      break;

    case 1:
      suitability += 2;
      break;

    case 2:
      suitability += 5;
      break;

    default:
      preferedSocialNetwork();
  }
}

let displayCareer = () => {
  if (suitability <= 13) {
    console.log(`${name} you should be an Artist. You are quiet, serious, sensitive and kind. Extremely well-developed senses, and aesthetic appreciation for beauty. Not interested in leading or controlling others. Flexible and open-minded. Likely to be original and creative. Enjoy the present moment.
    `);

  } else if (suitability <= 16) {
    console.log(`${name} you got: Astronaut
    You are an explorer. You are curious about the world around you and the way it works. You look at things closely, and often with a different perspective than everyone else. You're quite unique, lucky you. 
    `);

  } else if (suitability <= 19) {
    console.log(`${name} you got: Thinker 
    you are Logical, original, creative thinker. Can become very excited about theories and ideas. Exceptionally capable and driven to turn theories into clear understandings. You're quite unique, lucky you. 
    `);

  } else {
    console.log(`${name} you got: Engineer
    You are very smart. You are curious about the world around you and the way it works. You look at things closely, and often with a different perspective than everyone else. You're quite unique, lucky you. 
    `);
  }
}

console.log("DISCOVER YOUR CAREER!\n")

let name = readlineSync.question("What is your name?\n")

console.log(`Ok ${name}. I'm going to ask you a series of questions. Based on your answers, I'm going to tell you what career you should have .\n`)

areYouReady();
creativeOrLogical();
philosophyOrMath();
whyTheChicken();
preferedTvShow();
preferedSocialNetwork();
displayCareer();
