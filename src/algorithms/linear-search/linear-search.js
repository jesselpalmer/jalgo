export const simpleSearch = (list, element) => {
  const index = list.findIndex(item => {
    return item === element
  })

  return index
}
