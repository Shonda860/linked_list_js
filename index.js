class Node {
  constructor(value, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null
  }

// # method to add a new node with the specific data value in the linked list
// # insert the new node at the beginning of the linked list
// # Time Complexity: O(1) 
// # Space Complexity: O(1)
 
 addFirst(value) {
   
  const newHead = new Node(value);
  newHead.nextNode = this.head
  this.head = newHead
}

addLast(value) {
  let current = this.head
  
  while (current) {
    current = current.nextNode
    if (current.nextNode.nextNode === null){
      const newHead = new Node(value);
    }
  }
  
}

// # method to find if the linked list contains a node with specified value
// # returns true if found, false otherwise
// # Time Complexity: O(n)
// # Space Complexity: O(1)

search(value) {
  let current = this.head

  while (current) {
    if (current.value === value){
        return true
    }else {
      current = current.nextNode
    }
    }
    return false
  }



  // # method to return the max value in the linked list
  // # returns the data value and not the node
  // # Time Complexity: O(n)
  // # Space Complexity: O(1)

  findMax(){
    let current = this.head
    let max = -Infinity

    while(current){
      if (current.value > max){
        max = current.value
      }
        current = current.nextNode
    }
      return max
  }

  // # method to return the min value in the linked list
  // # returns the data value and not the node
// # Time Complexity: O(n)
  // # Space Complexity: O(1)

findMin(){
  let current = this.head
  let min = Infinity

  while(current){
    if (current.value < min){
      min = current.value
    }
    current = current.nextNode
  }
   return min
}

  // # method that returns the length of the singly linked list
  // # Time Complexity: 0(n)
  // # Space Complexity: O(1)

   length(){
     let current = this.head
     let count = 0

     while(current){
       count += 1
     }
      return count
   }

  //  # method that returns the value at a given index in the linked list
  //  # index count starts at 0
  //  # returns nil if there are fewer nodes in the linked list than the index value
  //  # Time Complexity: O(n)
  //  # Space Complexity: O(1)

  getAtIndex(index){
    let current = this.head
    let i = 0

    while(current){
      if (i === index){
        return current.value
      } else {
        current = current.nextNode
        i += 1
      }
    }
    return null
  }
  // # method to print all the values in the linked list
  // # Time Complexity: O(n)
  // # Space Complexity: 0(1) 

  visit(){
    let current = this.head

    while(current){
      console.log(current.value)
    }
  }

  // # method to delete the first node found with specified value
  // # Time Complexity: O(n)
  // # Space Complexity: O(1)
   delete(value){
     // is there a head
     if (this.head === null ){
       return 
     }
     // is the head equal to value
      if (this.head.value === value){
         this.head === this.head.nextNode
         return // resets head
      }

      let current = this.head

      while (current.nextNode.value !== value){
        current = current.nextNode
      }
       current.nextNode = current.nextNode.nextNode
   }

  //  # method to reverse the singly linked list
  //  # note: the nodes should be moved and not just the values in the nodes
  //  # Time Complexity: O(n)
  //  # Space Complexity: O(1)

  reverse(){
    let current = this.head
    let prev  = null
    let next = current.nextNode

    while (next !== null) {// check if current is at the end
      current.nextNode = prev
      prev = current 
      current = next
      next = current.nextNode
    }
    current.nextNode = prev
    this.head = current
  }
  
  // # returns the value at the middle element in the singly linked list
  // # Time Complexity: ?
  // # Space Complexity: ?

  findMiddleValue(){
    let single = this.head
    let double = this.head 

    while (double.nextNode !== null && double.nextNode.nextNode !== null){
      double = single.nextNode.nextNode
      single = single.nextNode
    }
  }
  
  findNthFrom_end(){

  }

}


module.exports = SinglyLinkedList;