/* Stack Class */
class Stack {
  constructor() {
    this.count = 0;
    this.stackItems = [];
  }

  push(value = null) {
    this.stackItems[this.count] = value;
    this.count += 1;
  }

  pop(elementCountToPop = 1) {
    if (this.count === 0) {
      return null;
    }
    if (typeof elementCountToPop !== 'number') {
      throw 'Invalid data type, please enter a Number';
    }
    if (this.count < elementCountToPop) {
      throw 'Not enough elements in the Stack';
    }
    this.stackItems.length -= elementCountToPop;
    this.count -= elementCountToPop;
  }

  peek() {
    if (this.count === 0) {
      return null;
    }
    return this.stackItems[this.count - 1];
  }

  getSize() {
    return this.count;
  }
}

const stackInstance = new Stack();
stackInstance.push(23);
console.log(stackInstance);
stackInstance.push(2);
console.log(stackInstance);
stackInstance.push(3);
console.log(stackInstance);
stackInstance.pop();
console.log(stackInstance);
stackInstance.push(14);
stackInstance.push(545);
console.log(stackInstance);
stackInstance.pop(2);
console.log(stackInstance);
stackInstance.pop();
console.log(stackInstance);
console.log(`Stack Size: ${stackInstance.getSize()}`);
