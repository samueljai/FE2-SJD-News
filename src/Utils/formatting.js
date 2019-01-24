export const formatDate = () => {

  return
}

// takes a string and returns a string with the first letter of every word capitalised
export const formatTitle = (string) => {
  // split the string at spaces
  // loop over each word
  // for each word change the first letter
  // join the array with a space
  return string.split(" ").map(word => (word.replace(word[0], word[0].toUpperCase()))).join(" ")
}

// takes a string and returns the string with the first letter of each sentence capitalised
export const formatText = (string) => {

}

