import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePageTopicsSearchComponent from '../components/searchComponents/profilePageTopics/profilePageTopicsSearchComponent'
import TopicPagePostsSearchComponent from '../components/searchComponents/topicPagePosts/topicPagePostsSearchComponent'

class Search extends React.Component {

  render() {
    let searchComponent
    if (this.props.searchGroupName == 'profile-page-topics') {
      searchComponent = <ProfilePageTopicsSearchComponent searchGroupName={this.props.searchGroupName} searchItems={this.props.searchItems} color={this.props.color}/>
    } else if (this.props.searchGroupName == 'topic-page-posts') {
      searchComponent = <TopicPagePostsSearchComponent searchGroupName={this.props.searchGroupName} searchItems={this.props.searchItems} color={this.props.color}/>
    }
    return (
      searchComponent
    )
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('search-data')
  const searchItems = JSON.parse(node.dataset.searchItems)
  const color = node.dataset.color
  const searchGroupName = node.dataset.searchGroupName

  ReactDOM.render(
    <Search searchGroupName={searchGroupName} searchItems={searchItems} color={color} />,
    document.querySelector('#' + searchGroupName + '-search-container')
  );
});
