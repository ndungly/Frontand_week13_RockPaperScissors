
// De user input (3 valide opties + 1 bonus optie) wegschrijven naar een variabele. Anders een error.

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    switch(userInput) {
      case 'rock':
        return userInput;
        break;
      case 'paper':
        return userInput;
        break;
      case 'scissors':
        return userInput;
        break;
      case 'bomb':
        return userInput;
        break;
      default: 
        console.log('You are cheating!!');
        break;
  }}
  
  
  //console.log('user: ' + getUserChoice('paper'));
  
  
  
  /* Waarom werkt deze notatie niet?
  
  const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    userInput = 'rock' || 'paper' || 'scissors' ? return userInput : console.log('You are cheating!!');
  }
  
  console.log(getUserChoice('flower'));
  
  */
  
  const randomNumber = () => Math.floor(Math.random() * 3);
  
  function getComputerChoice() {
    switch(randomNumber()) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  // console.log('computer: ' + getComputerChoice(randomNumber));
  
  
  // Functie om de winnaar te bepalen.
  
  function determineWinner(userChoice, computerChoice) {
    if(userChoice === 'bomb') {
      return 'You won BIG TIME!';
    }
    else if(userChoice === 'rock') {
      if(computerChoice === 'rock') {
        return 'It\'s a tie!';
      } else if(computerChoice === 'paper') {
        return 'Computer won!';
      } else if(computerChoice === 'scissors') {
        return 'You won!';
      }
    }
    else if(userChoice === 'paper') {
      if(computerChoice ==='paper') {
        return 'It\'s a tie!';
      } else if(computerChoice === 'scissors') {
        return 'Computer won!';
      } else if(computerChoice === 'rock') {
        return 'You won!';
      }
    }
    else {
      if(computerChoice === 'scissors') {
        return 'It\'s a tie!';
      } else if(computerChoice === 'rock') {
        return 'Computer won!';
      } else if(computerChoice === 'paper') {
        return 'You won!';
      }
    }
  }
  

  // Met deze functie 'speel je het spel' - er wordt gelogt wat de gebruiker speelt en wat de computer speelt (van de gebruiker is een vooringestelde waarde). Vervolgens wordt de uitslag daaronder gelogd.

  function playGame() {
    const userChoice = getUserChoice('scissors');
      const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
  }
  

  // Uitvoeren van het spel.

  playGame();
  
  