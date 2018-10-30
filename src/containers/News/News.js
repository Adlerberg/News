import React, { Component } from 'react';

import Post from '../../components/Post/Post';
// import Comments from '../../components/Comments/Comments';

import './News.css';
    
class News extends Component {
  state = {
    articles: [],
    comments: [],
    wasComementCliked: false,
    error: false,
    activePage: 1
  };

  componentDidMount() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(res => res.json())
      .then(articles => {
        articles.map(item_id => {
         // console.log(item_id);
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${item_id}.json`)
          .then(res => res.json())
          .then(article => {
            const articles = this.state.articles.concat(article);
             this.setState({ articles: articles });
             //console.log(this.state.articles)
        });
      });
      

  })
  .then(this.state.articles.map(kid_id => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${kid_id}.json`)
    .then(res => res.json())
    .then(comment => {
        const comments = this.state.comments.concat(comment);
    // console.log(kids)
    this.setState({comments: comments})
    console.log(this.state.comments)
})
})

)//.then(console.log(this.state.articles));
  }

  onCommentsClickedHandler() {
    this.setState({wasComementCliked:true})
  }
        

  render() {
    let posts = <p style={{textAlign: 'center'}}>Loading</p>;
    if (this.state.articles !== []) {
        posts = this.state.articles.map(post => {
            return <Post 
                key={post.id}
                title={post.title}
                source={post.url ? post.url: null}
                child={post.kids ? post.kids.length : 0}
                score={post.score}
                author={post.by}
                time={post.time}
                 />;
        }); 
     
    }
    // let comments = <p style={{textAlign: 'center'}}>Loading</p>;
    // if (this.state.wasComementCliked !== false) {
    // comments = this.state.comments.map(comment => {
    //   return <Comments
    //   key={comment.id}
    //   author={comment.by}
    //   body={comment.text}
    //   clicked={this.onCommentsClickedHandler}
    //   />
    // }) }

    return <div className="News"> 
    {posts}
    {/* {comments} */}
    </div>
  }
}

export default News