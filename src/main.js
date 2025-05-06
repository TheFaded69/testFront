export function setupCounter(element) {
  let counter = 0;

  const adjustCounterValue = value => {
    if (value >= 100) return value - 100;
    if (value <= -100) return value + 100;
    return value;
  };



  const setCounter = value => {
    counter = adjustCounterValue(value);
    //TIP WebStorm has lots of inspections to help you catch issues in your project. It also has quick fixes to help you resolve them. Press <shortcut actionId="ShowIntentionActions"/> on <shortcut raw="text"/> and choose <b>Inline variable</b> to clean up the redundant code.
    element.innerHTML = `${counter}`;
  };

  document.getElementById('increaseByOne').addEventListener('click', () => setCounter(counter + 1));
  document.getElementById('decreaseByOne').addEventListener('click', () => setCounter(counter - 1));
  document.getElementById('increaseByTwo').addEventListener('click', () => setCounter(counter + 2));
  //TIP In the app running in the browser, you’ll find that clicking <b>-2</b> doesn't work. To fix that, rewrite it using the code from lines 19 - 21 as examples of the logic.
  document.getElementById('decreaseByTwo')

  //TIP Let’s see how to review and commit your changes. Press <shortcut actionId="GotoAction"/> and look for <b>commit</b>. Try checking the diff for a file – double-click main.js to do that.
  setCounter(0);
}

//TIP To find text strings in your project, you can use the <shortcut actionId="FindInPath"/> shortcut. Press it and type in <b>counter</b> – you’ll get all matches in one place.
setupCounter(document.getElementById('counter-value'));

let stringTest = "123";
let array = [...stringTest]
let a = Math.random()

function  test()
{
  return 1;
}

//TIP There's much more in WebStorm to help you be more productive. Press <shortcut actionId="Shift"/> <shortcut actionId="Shift"/> and search for <b>Learn WebStorm</b> to open our learning hub with more things for you to try.
