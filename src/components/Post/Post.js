import React from 'react';


import './Post.css';

const post = (props) => (
    <article className="Post">
        <a href={props.source}>{props.title}</a>
        <span className="Comments" onClick={props.cliked}>{props.child} comment(s) </span>
        <span className="Score">
         <img src="https://png.icons8.com/ios/50/666666/hearts.png" alt="heart-ico"></img> 
         Score: {props.score}</span>
         <p className="Author">Author: {props.author}</p>
    </article>
    )

export default post