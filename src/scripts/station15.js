const displayList = () => {
  const fruits = document.getElementById("fruits");
  const fruitsList = document.createElement("ul");

  for (const fruit of fruits.children) {
    const fruitItem = document.createElement("li");
    fruitItem.textContent = fruit.textContent;
    fruitsList.appendChild(fruitItem);
  }
  fruits.replaceChildren(fruitsList);
};
