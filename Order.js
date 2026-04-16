let currentState = welcoming;

//Store user choices
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

//1. Welcome
function welcoming() {
  let aReturn = [];
  currentState = choosingItem;

  aReturn.push("Welcome to Jasmine's Pizza!");
  aReturn.push("What would you like? (pizza or pasta)");

  return aReturn;
}

// 2. Choose item
function choosingItem(sInput) {
  let aReturn = [];
  const input = sInput.toLowerCase();

  if (input.includes("pizza") || input.includes("pasta")) {
    order.item = input.includes("pizza") ? "pizza" : "pasta";
    currentState = choosingSize;

    aReturn.push(`Great choice! What size ${order.item}? (small, medium, large)`);
  } else {
    aReturn.push("Please choose either pizza or pasta.");
  }

  return aReturn;
}

// 3. Choose size
function choosingSize(sInput) {
  let aReturn = [];
  const input = sInput.toLowerCase();

  if (["small", "medium", "large"].includes(input)) {
    order.size = input;

    currentState = choosingExtra;

    if (order.item === "pizza") {
      aReturn.push("What topping would you like? (pepperoni or veggie)");
    } else {
      aReturn.push("What sauce would you like? (alfredo or tomato)");
    }

  } else {
    aReturn.push("Please choose a size: small, medium, or large.");
  }

  return aReturn;
}

// 4. Choose extra (topping/sauce)
function choosingExtra(sInput) {
  let aReturn = [];
  order.extra = sInput.toLowerCase();

  currentState = upsell;

  aReturn.push("Would you like a drink? (yes or no)");

  return aReturn;
}

// 5. Upsell drink
function upsell(sInput) {
  let aReturn = [];
  const input = sInput.toLowerCase();

  if (input.startsWith("y")) {
    order.drink = "drink";
  } else {
    order.drink = "no drink";
  }

  currentState = welcoming;

  aReturn.push("Your order is confirmed!");
  aReturn.push(
    `You ordered a ${order.size} ${order.item} with ${order.extra} and ${order.drink}.`
  );

  return aReturn;
}