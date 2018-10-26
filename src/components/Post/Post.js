import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" id={props.key}>
        <a href={props.source}>{props.title}</a>
    </article>
)

export default post