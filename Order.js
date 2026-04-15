let currentState = welcoming;

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput(){
  currentState = welcoming;  
}

function welcoming() {
  let aReturn = [];
  currentState = ordering;
  aReturn.push("Welcome to Jasmine's Pizza!");
  aReturn.push("Would you like to order a pizza?");
  return aReturn;
}

function ordering(sInput) {
  let aReturn = [];
  currentState = welcoming;

  if (sInput.toLowerCase().startsWith('y')) {
    let d = new Date();
    d.setMinutes(d.getMinutes() + 30);

    aReturn.push("Your pizza order has been placed!");
    aReturn.push(`It will be ready for pickup at 456 Slice Ave before ${d.toTimeString()}`);
  } else {
    aReturn.push("No problem!");
    aReturn.push("Come back anytime if you're hungry 🍕");
  }

  return aReturn;
}