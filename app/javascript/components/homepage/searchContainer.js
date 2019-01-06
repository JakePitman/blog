import React from 'react'

class SearchContainer extends React.Component {
  state = {
    searchInput: ''
  }

  changeInput = (e) => {
    this.setState( {searchInput: e.target.value} )
  }

  hasInput = () => {
    return this.state.searchInput == '' ? false : true
  }

  render() {
    return(
      <div className='home-search-container'>
        <div className={`japanese-btn ${ this.hasInput() ? 'japanese-btn-active' : null } japanese-btn-${ this.props.color }`} style={{cursor: 'default'}}>
          <div className="inner-box inner-box-left"></div>
          <h2 className="japanese-btn-inner-content">{ this.props.title }</h2>
          <p className="vertical-text vertical-text-left">{ this.props.japaneseText }</p>
          <p className="horizontal-text horizontal-text-right">探索</p>
        </div>

        <input className={`search-bar-${ this.props.color } search-bar-home`} onChange={this.changeInput} type='text' id={ this.props.id } placeholder={ this.props.searchPlaceholder } />
        <button className={`search-submit-home ${ this.hasInput() ? 'search-submit-home-active-' + this.props.color : null } search-submit-home-${ this.props.color }`} type="submit">Search</button>
      </div>
    )
  }
}

export default SearchContainer
