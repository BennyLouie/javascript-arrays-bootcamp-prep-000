var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, element) {
  const newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  const otherArray = [...array, element]
  return otherArray
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.unshift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  anotherArray = array.slice(1)
  return anotherArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
}

function removeElementFromEndOfArray(array) {
  yetAnotherArray = array.slice(0, -1)
  return yetAnotherArray
}

function accessElementInArray(array, index) {
  
}