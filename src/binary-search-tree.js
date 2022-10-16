const { NotImplementedError } = require('../extensions/index.js');

 //const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
 * class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.rootEl = null
  }
  root() {
  return this.rootEl
  }

  add(data) {

this.rootEl = addData(this.rootEl, data)

    function addData(node, data) {

      if(!node){
        return new Node(data)
      }
      if (node.data === data){
        return node
      }
      if (data < node.data){
        node.left = addData(node.left, data)
      } else {
        node.right = addData(node.right, data)
      }
      return node


    }
  }

  has(data) {
    return searchData(this.rootEl, data)

    function searchData(node, data){
      if(!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      return node.data > data ? searchData(node.left, data):searchData(node.right, data)



    }
  }

  find(data) {

  }

  remove( data ) {
  this.rootEl = removeData(this.rootEl, data)

    function removeData(node, data){
    // stop recursion
    if (!node) {
      return null
    }
if (data < node.data){
  node.left = removeData(node.left, data)
  return node
} else if (data > node.data) {
  node.right = removeData(node.right, data)
  return node
    }else {

      // checks List
  if (!node.left && !node.right){
    return null
  }

  if (!node.left) {
    node = node.right
    return node
  }
  if (!node.right) {
    node = node.left
    return node
  }
  let minRightNode = node.right
  while(minRightNode.left){
    minRightNode = minRightNode.left
  }
  node.data = minRightNode.data

  node.right = removeData(node.right, minRightNode.data)
  return node
}
    }


  }

  min() {

    if(!this.rootEl){
      return
    }
    let node = this.rootEl
    while (node.left){
      node = node.left
    }
    return node.data

  }

  max() {
    if(!this.rootEl){
      return
    }
    let node = this.rootEl
    while (node.right){
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree

};