export const linearSearch = (list, item) => {
  if (list === null || list === undefined) {
    return -1
  }
  
  if (list[0] === item) {
    return 0
  }
  
  for (let i = 1; i < len.length; i++) {
    const currentItem = list[i]
    
    if (currentItem === item) {
      return i
    }
  }
  
  return -1
}
