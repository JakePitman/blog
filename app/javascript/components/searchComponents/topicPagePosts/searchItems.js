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
        <div className='post-card' key={searchItem.id}>
          <a href={`/post/${searchItem.id}`} className='post-card-link-box'></a>
          <div className='post-card-title-container'>
            <div className='post-card-bracket post-card-bracket-top-left'></div>
            <div className='post-card-bracket post-card-bracket-bottom-right'></div>
            <h3 className='post-card-title'>{ characterLimit(searchItem.title, 80) }</h3>
          </div>
          <p className='post-card-subtitle'>{ searchItem.subtitle }</p>
        </div>
      )
    }
  })
  return searchItems
}

//TODO put this back in, under the subtitle
//<p className='post-card-timestamp'><%= render 'shared/timestamp', post: post %></p>
export default searchItems
