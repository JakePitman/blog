import React from 'react'

const highlightSearchMatch = (string, substring, color) => {
  const result = []
  const splitString = string.toLowerCase().split(substring == null ? substring : substring.toLowerCase())
  const instances = []

  //extract instances of substring in string, and push to instances array
  //necessary in order to preserve capital letters when replacing with red span tags
  if (substring) {
    string.split('').forEach((char, i) => {
      if ( substring.toLowerCase() == string.substr(i, substring.length).toLowerCase() ) {
        instances.push(string.substr(i, substring.length))
      }
    })
  }


  substring == '' || substring == null
  ?
  result.push(string)
  :
  splitString.forEach((fragment, i) => {
    result.push(
      <React.Fragment>
      <span className='non-highlighted-span-tag'>{fragment}</span>
      {
        i == splitString.length - 1
        ?
        null
        :
        <span className={color + '-highlight highlighted-span-tag'}>{instances[i]}</span>
      }
      </React.Fragment>
    )
  })
  return (
    result
  )
}

export default highlightSearchMatch
