import React from 'react';

const comments = (props) => (
    <article className="Post">
    <p>{props.body}</p>
    <p className="Comments" onClick={props.cliked}>{props.child} comment(s) </p>
    <p>Author: {props.author}</p>
</article>
)

export default comments