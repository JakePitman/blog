import React from 'react'

const highlightSearchMatch = (string, substring, color) => {
  const result = []
  const splitString = string.toLowerCase().split(substring == null ? substring : substring.toLowerCase())
  const instances = []

  if (substring) {
    string.split('').forEach((char, i) => {
      if ( substring.toLowerCase() == string.substr(i, substring.length).toLowerCase() ) {
        instances.push(string.substr(i, substring.length))
      }
    })
  }


  substring == ''
  ?
  result.push(string)
  :
  splitString.forEach((fragment, i) => {
    result.push(
      <React.Fragment>
      <span className='highlight-span-tag'>{fragment}</span>
      {
        i == splitString.length - 1
        ?
        null
        :
        <span className={color + '-highlight highlight-span-tag'}>{instances[i]}</span>
      }
      </React.Fragment>
    )
  })
  return (
    //substring == ''
    //?
    //string
    //:
    //<span>
      //{string.split(substring)[0]}
      //<span className={color + '-highlight'}>{substring}</span>
      //{string.split(substring)[1]}
    //</span>
    result
  )
}

export default highlightSearchMatch
