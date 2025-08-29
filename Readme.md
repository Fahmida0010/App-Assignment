1) Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
Answer : document.getElementById("id") finds only one element by its id.
Returns a single element 
document.getElementsByClassName("class") finds all elements with that class name. Returns an HTMLCollection (like an array but not exactly).
document.querySelector("selector") finds the first element that matches a CSS selector (#id, .class, div p etc.).
Returns a single element.
document.querySelectorAll("selector") finds all elements that match a CSS selector. Returns a NodeList (array-like, supports forEach).

2) How to create and insert a new element into the DOM
Answer : Create the element : document.createElement("tagName") add content/attributes : element.textContent or element.setAttribute()
Insert it into the DOM : appendChild() / prepend() / insertBefore()
Example:
const newDiv = document.createElement("div");  
newDiv.textContent = "Hello, Hero!";  
document.body.appendChild(newDiv);  

3) What is Event Bubbling and how does it work?
Answer : Event Bubbling means when an event happens on an element, it bubbles up through its parent elements until it reaches document.
Example: 
Clicking a button inside a div :  event first triggers on the button, then the div, then body, then document.
document.querySelector("button").addEventListener("click", () => {
console.log("Button clicked!");
});
document.querySelector("div").addEventListener("click", () => {
  console.log("Div clicked!");
});

4) What is Event Delegation? Why is it useful?
Answer : Event Delegation is instead of attaching event listeners to many child elements, attach one listener to a parent, and handle events using bubbling.
It's useful as Saves memory .
Works for dynamically added elements.

5) What is the difference between preventDefault() and stopPropagation() methods? 
 Answer : Stops the default action of an element.
Example:
 prevent a link <a> from going to another page.
document.querySelector("a").addEventListener("click", (e) => {
e.preventDefault();
console.log("Link prevented!");
});
event.stopPropagation()
Stops the event from bubbling up to parent elements.
Example: prevent parent click handler from firing.
document.querySelector("button").addEventListener("click", (e) => {
e.stopPropagation();
console.log("Button only, not parent!");
});


