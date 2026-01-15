/***************************************
 * DOM MANIPULATION NOTES (Chai aur Code)
 * Storeable JS File
 ***************************************/

/* ================================
   1️⃣ ELEMENT SELECTION
   ================================ */

// Single element selections
const title = document.getElementById('title');           // by ID
const firstH1 = document.querySelector('h1');             // first h1
const titleById = document.querySelector('#title');       // by id
const headingClass = document.querySelector('.heading');  // by class

// Multiple element selections
const allLi = document.querySelectorAll('li');            // NodeList
const allH1 = document.querySelectorAll('h1');            // NodeList

// HTMLCollection (does NOT support forEach)
const classListItems = document.getElementsByClassName('list');


/* ================================
   2️⃣ STYLING ELEMENTS
   ================================ */

// IMPORTANT: style works only on SINGLE elements
title.style.backgroundColor = 'blue';
title.style.padding = '15px';
title.style.borderRadius = '15px';


/* ================================
   3️⃣ TEXT & HTML PROPERTIES
   ================================ */

// IMPORTANT DIFFERENCES
const titleInnerText = title.innerText;        // visible text only
const titleTextContent = title.textContent;    // all text (even hidden)
const titleInnerHTML = title.innerHTML;        // includes HTML tags

// ❌ WRONG (case-sensitive)
// title.innerHtml;


/* ================================
   4️⃣ CASE SENSITIVITY (IMPORTANT)
   ================================ */

// ❌ ReferenceError
// TITLE.innerText;

// ✔ Correct
title.innerText;


/* ================================
   5️⃣ WORKING WITH <li>
   ================================ */

const firstLi = document.querySelector('li');

firstLi.style.backgroundColor = 'green';
firstLi.style.padding = '10px';

// IMPORTANT: \n creates line break in innerText
firstLi.innerText = "one\ntwo";


/* ================================
   6️⃣ NODELIST LOOPING (IMPORTANT)
   ================================ */

// ❌ This does NOT work
// allLi.style.backgroundColor = 'blue';

// ✔ Correct ways
allLi[0].style.backgroundColor = 'blue';

allLi.forEach(function (li) {
  li.style.backgroundColor = 'blue';
});


/* ================================
   7️⃣ NODELIST vs HTMLCOLLECTION
   ================================ */

// ❌ HTMLCollection has no forEach
// classListItems.forEach(() => {});

// ✔ Convert HTMLCollection to Array
const convertedClassList = Array.from(classListItems);

convertedClassList.forEach(function (li) {
  li.style.color = 'orange';
});


/* ================================
   8️⃣ ACCESSING NODELIST ELEMENTS
   ================================ */

// ❌ Error
// allH1.style.color = 'pink';

// ✔ Correct
allH1[0].style.color = 'pink';


/* ================================
   9️⃣ QUERYSELECTOR SYNTAX
   ================================ */

// ❌ Syntax error
// document.querySelector('h1");

// ✔ Correct
document.querySelector('h1');


/* ================================
   🔟 QUICK REMINDERS (IMPORTANT)
   ================================ */

// querySelector      → single element
// querySelectorAll   → NodeList (forEach works)
// getElementsByClass → HTMLCollection (convert to array)
// JavaScript is CASE-SENSITIVE
// style works on individual elements only
