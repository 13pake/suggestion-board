import React, { Component } from 'react';
import '../styles/PostEditor.css';

class PostEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPostBody: ''
    };

    this.createPost = this.createPost.bind(this);
    this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
  }

  createPost() {
    this.props.addPost(this.state.newPostBody);
    this.setState({ newPostBody: '' });
  }

  handlePostEditorInputChange(event) {
    this.setState({ newPostBody: event.target.value });
  }

  render() {
    return (
      <div className="panel panel-default post-editor">
        <div className="panel-body">
          <textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange} />
          <button className="btn btn-success post-editor-button" onClick={this.createPost}>Post</button>
        </div>
      </div>
    )
  }
}

export default PostEditor;
