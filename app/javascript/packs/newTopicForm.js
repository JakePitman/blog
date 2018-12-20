import React from 'react';
import ReactDOM from 'react-dom';

const Form = () => {
  return (
    <form action="/topics" method="post">
      <input
        type="hidden"
        value={
          document.head.querySelector('[name~=csrf-token][content]').content
        }
        name="authenticity_token"
      />

      <div>
        <input
          type="text"
          name="topic[title]"
          id="topic_title"
          placeholder="title"
        />
      </div>
      <div>
        <textarea
          row="5"
          cols="60"
          name="topic[description]"
          id="topic_description"
          placeholder="description"
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
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
      <div>
        <button onClick={this.toggleActive}>new topic</button>
        {this.state.active ? <Form /> : null}
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <NewTopicForm />,
    document.body.appendChild(document.createElement('div'))
  );
});
