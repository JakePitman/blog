import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {

  topicsData = () => {

    let topics = []
    this.props.topics.forEach(topic => {
      topics.push(<h1>{topic.title}</h1>)
    })

    return topics
  }

  render() {
    return (
      <div>
        <h1>TITLE:</h1>
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
