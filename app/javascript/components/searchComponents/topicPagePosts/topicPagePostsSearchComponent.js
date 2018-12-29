import React from 'react'
import SearchItems from './searchItems'

class TopicPagePostsSearchContainer extends React.Component {
  state = {
    searchItems: this.props.searchItems,
    searchInput: null
  }

  updateSearchInput = (e) => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    return(

      <React.Fragment>
        <div className='search-bar-container'>
          <input className={'search-bar' + ' ' + `search-bar-${this.props.color}`} type='text' id={this.props.searchGroupName + '-search-input'} placeholder='search' onChange={this.updateSearchInput}/>
        </div>
        {
          <SearchItems searchItems={this.props.searchItems} searchInput={this.state.searchInput} />
        }
      </React.Fragment>
      
    )
  }
}

export default TopicPagePostsSearchContainer
