function calculate() {
    let screen = document.querySelector('.screen');
    let expression = screen.textContent;
    let result = eval(expression);
    screen.textContent = result;
  }
  
  let buttons = document.querySelectorAll('.calculator button');
  let operators = ['+', '-', '*', '/', '%'];
  
  for (let button of buttons) {
    button.addEventListener('click', () => {
      let screen = document.querySelector('.screen');
      let buttonText = button.textContent;
      let lastChar = screen.textContent[screen.textContent.length - 1];
      
      if (buttonText === 'C') {
        screen.textContent = '';
      } else if (buttonText === '=') {
        calculate();
      } else if (operators.includes(buttonText)) {
        if (operators.includes(lastChar)) {
          screen.textContent = screen.textContent.slice(0, -1) + buttonText;
        } else {
          screen.textContent += buttonText;
        }
      } else {
        screen.textContent += buttonText;
      }
    });
  }
  