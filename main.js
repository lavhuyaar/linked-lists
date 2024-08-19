//Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Linked list class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Returns true if the list is empty, false if it's not
  isEmpty() {
    return this.size === 0;
  }

  //Adds value to the end of the list
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  //Adds value to the start of the list
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //Returns the size of the list
  getSize() {
    return this.size;
  }

  //Returns first node of the list
  getHead() {
    if (this.isEmpty()) {
      return "Empty list";
    } else {
      return this.head.value;
    }
  }

  //Returns last node of the list
  getTail() {
    if (this.isEmpty()) {
      return "Empty list";
    } else {
      let curr = this.head;
      while (curr.value) {
        curr = curr.next;
        if (!curr.next) {
          return curr.value;
        }
      }
    }
  }

  //Returns value of the node at the passed index
  at(index) {
    if (this.isEmpty()) {
      return "No node found";
    }
    if (index < 0 || index >= this.size) {
      return "Invalid index";
    } else {
      let curr = this.head;
      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
      return curr.value;
    }
  }

  //Pops and returns the last node of the list
  popLast() {
    if (this.isEmpty()) {
      return;
    } else {
      let curr = this.head;
      for (let i = 1; i < this.size - 1; i++) {
        curr = curr.next;
      }
      let removedNode = curr.next.value;
      curr.next = null;
      this.size--;
      return removedNode;
    }
  }

  //Tells whether the passed value is in list or not
  contains(value) {
    if (this.isEmpty()) {
      return null;
    } else {
      let curr = this.head;
      while (curr) {
        if (curr.value === value) {
          return true;
        }
        curr = curr.next;
      }
      return false;
    }
  }

  //Finds the passed value
  find(value) {
    if (this.isEmpty()) {
      return null;
    } else {
      let curr = this.head;
      for (let i = 0; i < this.size; i++) {
        if (curr.value === value) {
          return i;
        }
        curr = curr.next;
      }
      return null;
    }
  }

  //Prints the list
  toString() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `(${curr.value}) -> `;
        curr = curr.next;
        if (curr === null) {
          listValues += "null";
        }
      }
      return listValues;
    }
  }

  //Inserts value at the passed index
  insertAt(value, index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  //Removes node from the passed index
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); //(dog) -> (cat) -> (parrot) -> (hamster) -> (snake) -> (turtle) -> null
