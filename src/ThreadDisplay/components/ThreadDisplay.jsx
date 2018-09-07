import React, { Component } from 'react';
import Post from '../../Post/components/Post';
import PostEditor from '../../PostEditor/components/PostEditor';

class ThreadDisplay extends Component {
  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);

    this.state = {
      posts: []
    }
  }

  addPost(newPostBody) {
    const posts = [...this.state.posts, newPostBody];
    this.setState({ ...this.state, posts });
  }

  render() {
    return (
      <div>
        {
          this.state.posts.map((postBody, idx) => {
            return (<Post key={idx} postBody={postBody} />)
          })
        }
        <PostEditor addPost={this.addPost} />
      </div>
    )
  }
}

export default ThreadDisplay;
