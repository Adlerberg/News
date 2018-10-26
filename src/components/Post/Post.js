import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" id={props.key}>
        <a href={props.source}>{props.title}</a>
        <p>{props.child} comments</p>
    </article>
)

export default post