let currentState = welcoming;

//store user choices
let order = {
  item: " ",
  size: " ",
  extra: " ",
  drink: " ",
};

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput() {
  currentState = welcoming;
  order = { item: "", size: "", extra: "", drink: ""};
}

//welcoming
