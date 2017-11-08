function getLowestElementIndex (list) {
  let min = list[0]
  let lowestElementIndex = 0

  list.forEach((element, index) => {
    if (element < min) {
      min = element
      lowestElementIndex = index
    }
  })

  return lowestElementIndex
}

export const selectionSort = list => {
  let result = new Array()

  while (list.length !== 0) {
    const lowestElementIndex = getLowestElementIndex(list)
    result.push(list[lowestElementIndex])
    list.splice(lowestElementIndex, 1)
  }

  return result
}
