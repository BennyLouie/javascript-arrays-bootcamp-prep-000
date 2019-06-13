function addElementToBeginningOfArray (array, element) {
  const otherArray = [element, ...array]
  return otherArray
}

function destructiveAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  const anotherArray = [...array, element]
  return anotherArray
}

function destructiveAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

