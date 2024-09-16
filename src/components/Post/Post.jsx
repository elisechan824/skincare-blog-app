import React from "react";
import './Post.css';

function Post(props) {
    return <div className="post-card">
        <h3 className="post-title">{props.title}</h3>
        <p className="post-date">{props.date}</p>
        <p className="post-content">{props.content}</p>
        <div className="post-actions">
            <button className="edit-button" onClick={props.onEdit}>Edit</button>
            <button className="delete-button" onClick={props.onDelete}>Delete</button>
        </div>
    </div>
}

export default Post;