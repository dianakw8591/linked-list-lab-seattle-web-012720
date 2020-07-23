function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(head, collection) {
  return collection[head.next]
}

function nodeAt(index, linkedList, collection) {
  let head = headNode(linkedList, collection);
  if (index === 0) {
    return head
  } else {
    for (let i=0; i < index; i++) {
      head = next(head, collection)
    }
    return head
  }
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList
  } else {
    return nodeAt(index - 1, linkedList, collection).next
  }
}

function indexAt(node, collection, linkedList) {
  let head = headNode(linkedList, collection);
  let i = 0;
  if (head === node) {
    return i
  } else {
    while (head !== node) {
      i++
      head = nodeAt(i, linkedList, collection)
    }
    return i
  }
}

function insertNodeAt(index, newAddress, linkedList, collection) {
  if (index === 0) {
    collection[newAddress].next = linkedList
  } else {
    collection[newAddress].next = nodeAt(index - 1, linkedList, collection).next
    nodeAt(index - 1, linkedList, collection).next = newAddress
  }
}

function deleteNodeAt(index, linkedList, collection) {
  if (index === 0) {
    linkedList = addressAt(1, linkedList, collection)
  } else {
    nodeAt(index - 1, linkedList, collection).next = addressAt(index + 1, linkedList, collection) || null
  }
}