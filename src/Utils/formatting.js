// takes a string and returns a string with the first letter of every word capitalised
export const formatTitle = (string) => {
  return string.trim().split(" ").map(word => (word.replace(word[0], word[0].toUpperCase()))).join(" ")
}

// takes a string and returns the string with the first letter of each sentence capitalised
export const formatText = (string) => {
  const regex1 = RegExp("[!.?]+ ", 'g');
  let array1 = [];

  string = string[0].toUpperCase() + string.slice(1)

  while ((array1 = regex1.exec(string)) !== null) {
    string = string.slice(0, regex1.lastIndex) + string[regex1.lastIndex].toUpperCase() + string.slice(regex1.lastIndex + 1)
  }
  return string
}

