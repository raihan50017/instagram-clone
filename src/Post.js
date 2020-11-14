import React from 'react';
import './Post.css';
import Avator from '@material-ui/core/Avatar';

const Post = ({username, caption, imgUrl}) => {
    return (
        <div className="post">
            <div className="post__header">
                <Avator alt={username} className="post__avator" src="/static/images">
                </Avator>
                <h3>{username}</h3>
            </div>
            <img className="post__image" src={imgUrl} alt=""></img>
            <h4 className="post__text"><strong>{username}: </strong>{caption}</h4>
        </div>
    );
};

export default Post;