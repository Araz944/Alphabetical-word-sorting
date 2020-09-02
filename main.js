// Grab <ul> element
const ul = document.getElementsByClassName('any-text')[0];


// let "Add" button add words into the created list element
function addClick() {
    const insertText = document.querySelectorAll('input')[0].value;
    const enteredText = document.createElement('li');


    // If input value is empty or null, then warn with a message
    if(insertText == '') {
        document.querySelectorAll('input')[0].style.backgroundColor = '#F08080';
        document.querySelectorAll('input')[0].setAttribute('placeholder', 'Please add something');
        return;
    } else {
        enteredText.appendChild(document.createTextNode(insertText));
        ul.appendChild(enteredText);
        

        // Clear form field for each time after pushing "Add" button
        const theForm = document.querySelectorAll('form')[0];
        theForm.reset();
    };
    

    // Remove targeted list element when clicking on it
    enteredText.onclick = removeItem;
    function removeItem(e) {
        e.target.parentElement.removeChild(e.target);
    };
};


// Grab <span> element
let span = document.querySelectorAll('span')[0];


// Make input field default when focusing on it
function defaultField() {
    document.querySelectorAll('input')[0].style.backgroundColor = '';
    document.querySelectorAll('input')[0].removeAttribute('placeholder');
    span.innerHTML = '';
};


// Let "Sort" button sort added words by alphabetical order
function sortList() {
    if(ul.firstElementChild === null) {
        span.innerHTML = 'Nothing to sort!'
    } else if(ul.childElementCount === 1) {
        span.innerHTML = 'There is only one word, please add more!'
    } else {


        // Show this message after the sorting
        span.innerHTML = 'Already sorted alphabetically!';
    }
  

    // Compare all of the added words with the function below
    Array.from(ul.getElementsByTagName('li'))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ul.appendChild(li));
}


// Two different messages following triple and fifth times clicking "Sort" button
const sort = document.querySelectorAll('[name="sort"]')[0];

sort.addEventListener('click', (e) => {
    if (e.detail === 3) {
        span.innerHTML = 'Cox basma knopkani!'
        setTimeout(function sortList() {
            span.innerHTML = '';
        }, 3000);
    } else if (e.detail === 5) {
        span.innerHTML = 'Bos yere neye basirsan knopkani, aaaaa!'
        setTimeout(function sortList() {
            span.innerHTML = '';
        }, 10000);
    }
});



