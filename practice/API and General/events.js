'use strict';

// JavaScript is an Event Driven Programming language.
// JavaScript Event Listeners:
// Event Driven Programming: Program waits for events and uses those events to trigger the next function(s).

var headerElement = document.getElementById('headerOne'),
  anchorElement = document.getElementById('anchorOne'),
  eventBubbleElement = document.getElementById('eventBubbleTester'),
  clickedElement = document.getElementById('clickElement'),
  inputElement = document.getElementById('inputOne'),
  keyboardElement = document.getElementById('inputTwo');
// The value of "this" inside a Event Handler functions is the element.

// Named functions for Reusability and anonymous functions for single time usage.
// Object.addEventListener(event, callbackFunction, useCapture);
// The third parameter is "false" by default.

// We typically need "event.preventDefault();" when we are working with anchor tags and forms.
// When somebody clicks inside a button of the form then the Browser's default behavior is to submit
// the form and reload the page. But if we don't want that then we should use:
// "event.preventDefault();"

headerElement.addEventListener("click", function(event) {
  console.log(event.target);
});

anchorElement.addEventListener("click", function(event) {
  event.preventDefault();
});

// Input fired on every input action in real time.
inputElement.addEventListener("input", function(event) {
  console.log(event.type, event.target);
});
// Change fired on blur and only when there's a change in the input's value.
inputElement.addEventListener("change", function(event) {
  console.log(event.type, event.target);
});
// Blur fired on every blur action regardless the value of the input.
inputElement.addEventListener("blur", function(event) {
  console.log(event.type);
});

// Difference between stopPropagation and stopImmediatePropagation:
// "stopPropagation" will prevent any parent handlers from being executed.
// "stopImmediatePropagation" will prevent any parent handlers and also any other handlers from executing.
// So in essence it means since addEventListener gives us the flexibility of adding multiple Event Listeners
// we can restict the execution of other event handlers of that element by executing "stopImmediatePropagation".

eventBubbleElement.addEventListener("click", function() {
  console.log("Event Bubbled until Parent");
});

clickedElement.addEventListener("click", function(event) {
  event.stopImmediatePropagation();
  console.log("I'm clicked");
}, true);

clickedElement.addEventListener("click", function(event) {
  console.log("Another Function");
});

// Difference between event.target and event.currentTarget
// "event.target" is the element in which the event occured, event.target never changes.
// "event.currentTarget" is the element where the event is currently placed, so event.currentTarget changes.

document.querySelector("main").addEventListener("click", clicked);

function clicked(event) {
  console.log('The event occured at ' + event.target.tagName + ' and is currently at ' + event.currentTarget.tagName);
}

// There's an implicit JS "handleEvent" property which is a function that's attached to every object to handle
// all the type of events related to that object. But I am not going to focus on that since
// object properties can be removed or mutilated.
// It would be something like this:

var handleEventObjectTester = {
  init: function init() {
    document.getElementById("buttonOne").addEventListener("click", this);
    document.getElementById("buttonOne").addEventListener("blur", this);
    document.getElementById("buttonOne").addEventListener("focus", this);
  },
  handleEvent: function handleEvent(event) {
    switch (event.type) {
      case "click":
        this.buttonEventsHandler(event);
        break;
      case "focus":
        this.buttonEventsHandler(event);
        break;
      case "blur":
        this.buttonEventsHandler(event);
        break;
    }
  },
  buttonEventsHandler: function buttonEventsHandler(event) {
    console.log(event.type);
  }
};

document.addEventListener("DOMContentLoaded", function() {
  handleEventObjectTester.init();
});

// Keyboard Events:
// These are very similar to click events and are equivalent to the Click Counterparts:
// keydown -> mousedown
// keyup -> mouseup
// keypress -> click
keyboardElement.addEventListener("keydown", function(event) {
  var char = event.char || event.charCode || event.which;
  console.log(String.fromCharCode(char), event.type);
});

keyboardElement.addEventListener("keyup", function(event) {
  var char = event.char || event.charCode || event.which;
  console.log(String.fromCharCode(char), event.type);
});

keyboardElement.addEventListener("keypress", function(event) {
  var char = event.char || event.charCode || event.which;
  console.log(String.fromCharCode(char), event.type);
});

// Don't use MouseOver and MouseOut.
// Use MouseEnter and MouseLeave.
// Since MouseOver and MouseOut has got event problems and unexpected behavior.

// Creating Custom Events in JS

(function() {
  const born = new Event('born');
  const died = new CustomEvent('died', {
    detail: Date.now()
  });
  const mainElement = document.getElementById('main');

  function createParagraph(text) {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = text;
    paragraphElement.addEventListener('born', wasBorn);
    paragraphElement.addEventListener('died', hasDied);
    paragraphElement.dispatchEvent(born);
    return paragraphElement;
  }

  function appendElements(parent = document.body, element) {
    parent.appendChild(element);
  }

  function removeParagraph(parent = document.body, element = "p") {
    const targetNode = parent.querySelector(element);
    parent.removeChild(targetNode);
    targetNode.dispatchEvent(died);
  }

  function wasBorn(event) {
    console.log('A Paragraph was Born');
    console.log(event.type, event.target);
  }

  function hasDied(event) {
    console.log('A Paragraph has Died');
    console.log(`It's died on ${event.detail} timestamp`);
    console.log(event.target, event.type);
    event.target.removeEventListener('born', wasBorn);
    event.target.removeEventListener('died', hasDied);
  }

  document.addEventListener('DOMContentLoaded', () => {
    appendElements(document.body, createParagraph('Hello, World!'));
    appendElements(mainElement, createParagraph('Mein Neues, Welt!'));
    mainElement.addEventListener('click', () => {
      removeParagraph(mainElement);
    });
  });
})();

// Mutation Observers:
// Mutation Observers are used to track, when changes take place.

(function() {
  const mutationPara = document.getElementById('mutationPara');
  const config = {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['data-thing', 'title', 'style'],
    childList: true,
    subtree: true,
    characterData: false,
    characterDataOldValue: false,
  };

  const observer = new MutationObserver(mutated);
  observer.observe(mutationPara, config);

  function change(ev) {
    let p = ev.currentTarget;

    p.textContent = ' this is new content';
    p.setAttribute('data-thing', 123);
    p.title = 'NEW TITLE'

    let span = document.createElement('span');
    span.textContent = ' SOME SPAN TEXT';
    p.appendChild(span);
  }

  function mutated(mutationList) {
    console.log(mutationList);
    for (let mutation of mutationList) {
      if (mutation.type == 'childList') {
        console.log('A child node has been added or removed.');
      } else if (mutation.type == 'attributes') {
        console.log('The ' + mutation.attributeName + ' attribute was modified.');
        console.log(mutation.oldValue);
      }
    }
    //observer.takeRecords();
    observer.disconnect();

    //target - Element
    //addNodes - NodeList
    //removedNodes - NodeList
    //oldValue
    //attributeName
    //attributeNamespace
    //nextSibling - Element / textNode
    //previousSibling - Element / textNode
    //type 'attributes' or 'childList'
  }

  document.addEventListener('DOMContentLoaded', function() {
    mutationPara.addEventListener('click', change);
  });
})();
