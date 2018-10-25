import React, { Component } from 'react';

import Post from '../../components/Post/Post';
    
class News extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
      render() {
        return (
          <div>
            <Post />
            <Post />
          </div>
        )
    }
}

export default News