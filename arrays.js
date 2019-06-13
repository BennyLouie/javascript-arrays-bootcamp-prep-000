function addElementToBeginningOfArray (array, element) {
  const newArray = [element, ...array]
  return newArray
}

function destructiveAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  const otherArray = [...array, element]
  return otherArray
}

function destructiveAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

function destructiveRemoveElementFromBeginningOfArray(array) {
  array.unshift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  anotherArray = array.slice(1)
  return anotherArray
}

function destructiveRemoveElementFromEndOfArray(array) {
  array.pop()
}

function removeElementFromEndOfArray(array) {
  yetAnotherArray = array.slice(0, -1)
  return yetAnotherArray
}

