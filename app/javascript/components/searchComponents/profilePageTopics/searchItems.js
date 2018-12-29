import React from 'react'

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

const searchItems = (props) => {
  let searchItems = []
  props.searchItems.forEach(searchItem => {
    if ( props.searchInput == null || props.searchInput == '' || searchItem.title.toLowerCase().includes(props.searchInput.toLowerCase()) ) {
      searchItems.push(
        <div className='profile-page-link-container' key={searchItem.id}>
          <div className='color-fill'></div>
          <a className='profile-page-link-inner-content' href={`/topic/${searchItem.id}`}>{characterLimit(searchItem.title, 20)}</a>
        </div>
      )
    }
  })
  return searchItems
}

export default searchItems
