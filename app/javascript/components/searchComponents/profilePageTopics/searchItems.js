import React from 'react'
import characterLimit from '../../../helpers/characterLimit'
import highlightSearchMatch from '../../../helpers/highlightSearchMatch'

const searchItems = (props) => {
  let searchItems = []
  props.searchItems.forEach(searchItem => {
    if ( props.searchInput == null || props.searchInput == '' || searchItem.title.toLowerCase().includes(props.searchInput.toLowerCase()) ) {
      searchItems.push(
        <div className='profile-page-link-container' key={searchItem.id}>
          <div className='color-fill'></div>
          <div className='profile-page-link-inner-content-flex-wrapper'>
            <a className='profile-page-link-inner-content' href={`/topic/${searchItem.id}`}>{highlightSearchMatch(characterLimit(searchItem.title, 20), props.searchInput, 'red')}</a>
          </div>
        </div>
      )
    }
  })
  return searchItems
}

export default searchItems
