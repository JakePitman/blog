import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {

  state = {
    searchItems: this.props.searchItems,
    searchInput: null
  }

  updateSearchInput = (e) => {
    this.setState({searchInput: e.target.value})
  }

  characterLimit = (string, maximumCharacters) => {
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

  itemsOutput = () => {
    let searchItems = []
    this.state.searchItems.forEach(searchItem => {
      if ( this.state.searchInput == null || this.state.searchInput == '' || searchItem.title.toLowerCase().includes(this.state.searchInput.toLowerCase()) ) {
        searchItems.push(
          <div className='profile-page-link-container'>
            <div className='color-fill'></div>
            <a className='profile-page-link-inner-content' href={`/topic/${searchItem.id}`}>{this.characterLimit(searchItem.title, 20)}</a>
          </div>
        )
      }
    })
    return searchItems
  }

  render() {
    return (
      <React.Fragment>
        <div className='search-bar-container'>
          <input className={'search-bar' + ' ' + `search-bar-${this.props.color}`} type='text' id='search-input' placeholder='search' onChange={this.updateSearchInput}/>
        </div>
        <div className='profile-page-links-container'>
          {
            this.itemsOutput()
          }
        </div>
      </React.Fragment>
    )
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('topics-data')
  //const data = JSON.parse(node.getAttribute('data'))
  const searchItems = JSON.parse(node.dataset.searchItems)
  const color = node.dataset.color
  //const data = JSON.parse(node.dataset.items)

  ReactDOM.render(
    <Search searchItems={searchItems} color={color} />,
    document.querySelector('#topics-search-container')
  );
});
