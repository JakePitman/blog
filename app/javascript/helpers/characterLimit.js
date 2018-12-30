const characterLimit = (string, maximumCharacters) => {
  let result = null
  if (string.length > maximumCharacters) {
    result = string.substr(0, maximumCharacters) + '...'
  } else {
    result =  string
  }
  string.split(' ').forEach(word => {
    if ( word.length > (maximumCharacters / 2) ) {
      result = string.substr(0, (maximumCharacters / 2.5)) + '...'
    }
  })
  return result
}

export default characterLimit
