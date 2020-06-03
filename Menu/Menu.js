/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/
let menuBtn = document.querySelector(".menu-button");

function menuMaker(arr) {
  let div = document.createElement("div");
  let ul = document.createElement("ul");

  div.classList.add("menu");

  div.appendChild(ul);
  // menuBtn.appendChild(div);

  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.textContent = arr[i];
    ul.appendChild(li);
  }

  menuBtn.addEventListener("click", (event) => {
    div.classList.toggle("menu--open");
  });

  return div;
}

// testing our menuMaker function
const theTestMenu = menuMaker(menuItems);
console.log("these are list's created with menuMaker", theTestMenu);

document.body.appendChild(theTestMenu);
// console.log(menuMaker(menuItems));
