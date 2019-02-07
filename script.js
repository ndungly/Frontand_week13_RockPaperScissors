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
  
  console.log('computer: ' + getComputerChoice(randomNumber));
  
  
  // Determine the winner!
  
  function determineWinner(userChoice, computerChoice) {
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        console.log('It\'s a tie!')
      } else if(computerChoice === 'paper') {
        console.log('Computer won!')
      } else if(computerChoice === 'scissors') {
        console.log('You won!')
      }
    }
    else if(userChoice === 'paper') {
      if(computerChoice ==='paper') {
        console.log('It\'s a tie!')
      } else if(computerChoice === 'scissors') {
        console.log('Computer won!')
      } else if(computerChoice === 'rock') {
        console.log('You won!')
      }
    }
    else {
      if(computerChoice === 'scissors') {
        console.log('It\'s a tie!')
      } else if(computerChoice === 'rock') {
        console.log('Computer won!')
      } else if(computerChoice === 'paper') {
        console.log('You won!')
      }
    }
  }
  
  console.log(function playGame(userChoice, computerChoice) {
    const userChoice = getUserChoice('rock'); 
    const computerChoice = getComputerChoice(); 
  }
  )
  