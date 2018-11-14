$(document).ready(function(){
  // Buttons
  let $landingPlayBtn = $('#landing-play-btn');
  let $landingSettingsBtn = $('#landing-settings-btn');

  // Content Containers
  let moveContainer = document.getElementById('move-container');

  // Game Settings
  let gameSettings = {
    heelHooks: false,
    toeHooks: false,
    handMatching: false,
    noDuplicateHolds: false,
    clockwiseRotation: false,
    counterclockwiseRotation: false,
    handsThenFeet: false,
    rainbowHands: false,
    rainhowFeet: false,
    colors: ['rainbow', 'black', 'white', 'red', 'green', 'yellow', 'blue', 'pink', 'gray', 'brown', 'orange', 'purple'],
    holds: ['right hand', 'right foot', 'left foot', 'left hand']
  }


  // Generate Randomized Move
  let colors = ['rainbow', 'black', 'white', 'red', 'green', 'yellow', 'blue', 'pink', 'gray', 'brown', 'orange', 'purple'];
  let holds = ['right hand', 'right foot', 'left foot', 'left hand'];

  function generateMove(){
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let randomHold = holds[Math.floor(Math.random() * holds.length)];

    let move = document.createElement('div');
    move.appendChild(document.createTextNode(`${randomHold} ${randomColor}`));
    move.className = `col-sm-12 game-pill game-${randomColor}`;
    moveContainer.appendChild(move);
  }

  generateMove();
  generateMove();
  /*
    <div class="col-sm-12 game-pill">Left Hand Red</div>
    <div class="col-sm-12 game-pill inactive-pill">Right Foot Blue</div>
  */
});