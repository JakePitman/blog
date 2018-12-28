import React from 'react';
import ReactDOM from 'react-dom';

const Form = () => {
  return (
    <form className="new-topic-form" action="/topics" method="post">
      <input
        type="hidden"
        value={
          document.head.querySelector('[name~=csrf-token][content]').content
        }
        name="authenticity_token"
      />

      <input
        className="new-topic-form-text"
        type="text"
        name="topic[title]"
        id="topic_title"
        placeholder="title"
      />
      <textarea
        className="new-topic-form-text-area"
        rows="5"
        cols="60"
        name="topic[description]"
        id="topic_description"
        placeholder="description"
      />

      <button className="new-topic-form-submit" type="submit">
        Submit
      </button>
    </form>
  );
};

class NewTopicForm extends React.Component {
  state = {
    active: false
  };

  toggleActive = (e) => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={
            this.state.active
              ? 'japanese-btn japanese-btn-red japanese-btn-active'
              : 'japanese-btn japanese-btn-red'
          }
          onClick={this.toggleActive}
        >
          <div className="inner-box inner-box-left" />
          <h2 className="japanese-btn-inner-content">new topic</h2>
          <p className="vertical-text vertical-text-left">新しい</p>
          <p className="horizontal-text horizontal-text-right">話題</p>
        </div>
        {this.state.active ? <Form /> : null}
      </React.Fragment>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <NewTopicForm />,
    document.querySelector('#new-topic-form-container')
  );
});
