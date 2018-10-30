import React from 'react';


import './Post.css';

const post = (props) => (
    <article className="Post">
        <a href={props.source}>{props.title}</a>
        <p className="Comments" onClick={props.cliked}>{props.child} comment(s) </p>
        <span className="Score">
         <img src="https://png.icons8.com/color/50/000000/hearts.png" alt="heart-ico"></img> 
         Score: {props.score}</span>
         <p className="Author">Author: {props.author}</p>
    </article>
    )

export default post