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

