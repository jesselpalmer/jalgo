export const linearSearch = (list, item) => {
  for (let i = 0; i < list.length; i++) {
    const currentItem = list[i]
    
    if (currentItem === item) {
      return i
    }
  }
  
  return -1
}
