const functionalObject = (() => {
  const grabElement = id => document.getElementById(id),
    grabClassElements = className => document.getElementsByClassName(className),
    idClickListener = id => callback => grabElement(id).addEventListener('click', callback),
    classClickListener = className => callback => Array.from(grabClassElements(className)).forEach((element) => {
      element.addEventListener('click', callback);
    }),
    removeAddClickListener = className => callback => Array.from(grabClassElements(className)).forEach((element) => {
      element.removeEventListener('click', callback);
      element.addEventListener('click', callback);
    }),
    dangerousRemoveAddClickListener = (className, callback) => Array.from(document
      .getElementsByClassName(className)).forEach((element) => {
        const elementClone = element.cloneNode(true);
        element.parentNode.replaceChild(elementClone, element);
        elementClone.addEventListener('click', callback);
      });

  return {
    grabElement,
    grabClassElements,
    idClickListener,
    classClickListener,
    removeAddClickListener,
    dangerousRemoveAddClickListener,
  }
})();
window.FunctionalObject = functionalObject;


window.addEventListener('load', () => {
  const elementToBeAppended = document.createElement('li');
  elementToBeAppended.classList.add('test-class');
  elementToBeAppended.innerHTML = `<span class="test-span">Some Text</span>`;

  function californiaUberAlles() {
    console.log('California Uber Alles');
  }

  functionalObject.classClickListener('test-class')(californiaUberAlles);

  functionalObject.idClickListener('named-function-execution')(() => {
    functionalObject.removeAddClickListener('test-class')(californiaUberAlles);
  });

  functionalObject.idClickListener('create-element')(() => {
    functionalObject.grabElement('test-parent').appendChild(elementToBeAppended);
  });

  functionalObject.idClickListener('anonymous-function-execution')(() => {
    functionalObject.dangerousRemoveAddClickListener('test-class', () => {
      console.log('Hello World');
    });
  });

  functionalObject.idClickListener('register-another-function')(() => {
    functionalObject.dangerousRemoveAddClickListener('test-class', () => {
      console.log('New Anonymous Function Registered');
    });
  });
}, false);
