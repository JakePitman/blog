import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {

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

  topicsData = () => {

    let topics = []
    this.props.topics.forEach(topic => {
      topics.push(
        <div className='profile-page-link-container'>
          <div className='color-fill'></div>
          <a className='profile-page-link-inner-content' href={`/topic/${topic.id}`}>{this.characterLimit(topic.title, 20)}</a>
        </div>
      )
    })

    return topics
  }

  render() {
    return (
      <div className='profile-page-links-container'>
        {this.topicsData()}
      </div>
    )
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('topics-data')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
    <Search topics={data} />,
    document.querySelector('#search-container')
  );
});
