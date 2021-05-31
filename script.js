const consoleDemo = document.getElementById('error-btns');
const logDemoBtn = document.querySelectorAll('button')[1];
const errorDemoBtn = document.querySelectorAll('button')[2];
const dirDemoBtn = document.querySelectorAll('button')[3];
const dirxmlDemoBtn = document.querySelectorAll('button')[4];
const groupStartBtn = document.querySelectorAll('button')[5];
const groupEndBtn = document.querySelectorAll('button')[6];
const tableBtn = document.querySelectorAll('button')[7];
const startTimerBtn = document.querySelectorAll('button')[8];
const endTimerBtn = document.querySelectorAll('button')[9];
const consoleTrace = document.querySelectorAll('button')[10];
const triggerGlobalError = document.querySelectorAll('button')[11];
console.dirxml(triggerGlobalError);

logDemoBtn.addEventListener('click', function () {
  console.log('Console log button clicked');
});

errorDemoBtn.addEventListener('click', function() {
  console.error('Console error button clicked');
  try {
    lmao
  } catch(err) {
     alert('An unexpected error occurred clicking this button (bruh you cant even click a button?)');  
  } finally {

    alert('This is a test. You can indeed click a button like a normal human being');

  }
});

dirDemoBtn.addEventListener('click', function() {
  console.dir(dirDemoBtn);
});

dirxmlDemoBtn.addEventListener('click', function() {
  console.dirxml(dirxmlDemoBtn);
});

const label = 'Group Button Demo'
groupStartBtn.addEventListener('click', function() {
  console.group(label);
});

groupEndBtn.addEventListener('click', function() {
  console.groupEnd(label);
  console.log('Group Button Demo Ended');
});

const testArray = ['This', 'is', 'a', 'test', 'array.'];
tableBtn.addEventListener('click', function() {
  console.table(testArray);
});

startTimerBtn.addEventListener('click', function() {
  console.log('Timer Started');
  console.time();
});

endTimerBtn.addEventListener('click', function() {
  console.timeEnd();
  console.log('Timer Ended');
});

consoleTrace.addEventListener('click', function() {
  const traceTest = () => {traceTest1();};
  const traceTest1 = () => {traceTest2();};
  const traceTest2 = () => {console.trace();};
  traceTest();
});

class GlobalError extends Error {
  constructor(message) {
    super(message);
    this.name = 'GlobalError'
  }
}

triggerGlobalError.addEventListener('click', function() {
  console.log('triggered global error');
  try {
    throw new GlobalError;
  }
  catch(err) {
  if(err instanceof GlobalError) {
      alert("Oh no you've done it...");
      alert("You've triggered the global error...");
      alert("You're going to pay for this...");
      alert('3...');
      alert('2...');
      alert('1...');
      alert('boom');
    }
  }
});

