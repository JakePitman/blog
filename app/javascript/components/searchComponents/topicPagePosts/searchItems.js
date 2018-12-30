import React from 'react'
import characterLimit from '../../../helpers/characterLimit'
import highlightSearchMatch from '../../../helpers/highlightSearchMatch'

//const highlightSearchMatch = (string, substring, color) => {
  //return (
    //<span>
      //{string.split(substring)[0]}
      //<span className={color + '-highlight'}>{substring}</span>
      //{string.split(substring)[1]}
    //</span>
  //)
//}

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
            <div className='post-card-title-flex-wrapper'>
                <h3 className='post-card-title'>{highlightSearchMatch(characterLimit(searchItem.title, 80), props.searchInput, 'red')}</h3>
            </div>
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
//TODO refactor this with highlightSearchMatch
//<h3 className='post-card-title'>{ characterLimit(searchItem.title, 80)  }</h3>
export default searchItems
