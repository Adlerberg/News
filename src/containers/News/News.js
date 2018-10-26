import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import './News.css';
    
class News extends Component {
  state = {
    articles: [],
    selectedPostId: null,
    error: false
  };

  componentDidMount() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(res => res.json())
      .then(articles => {
        articles.forEach(item => {
         // console.log(item)
          fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
          .then(res => res.json())
          .then(article => {
            const articles = this.state.articles.concat(article);
             this.setState({ articles });
             console.log(article)
        });
      });
  });
  }


  render() {
    let posts = <p style={{textAlign: 'center'}}>Loading</p>;
    if (this.state.articles !== []) {
        posts = this.state.articles.map(post => {
          //console.log(<Post />)
            return <Post 
                key={post.id}
                title={post.title}
                source={post.url}
                child={post.kids ? post.kids.length : 0}
                 />;
        });
    }
    return <div className="News"> 
    {posts}
     </div>
  }
}

export default News