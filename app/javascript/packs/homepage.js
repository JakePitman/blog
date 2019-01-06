import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import SearchContainer from '../components/homepage/searchContainer'

class Homepage extends React.Component {
  state = {}

  render() {
    return(
      <Fragment>
        <h1 className="home-title">What's on your mind?</h1>

        <div className='home-searches-container'>
          <SearchContainer title='Find People' color='blue' japaneseText='人々' searchPlaceholder='username'/>
          <SearchContainer title='Find Topics' color='red' japaneseText='トピック' searchPlaceholder='topic name'/>
        </div>
      </Fragment>
    )
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Homepage />,
    document.querySelector('#homepage-container')
  );
});
