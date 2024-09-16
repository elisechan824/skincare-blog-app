import React, {useState, useEffect} from "react";
import './feed.css';
import '../../components/Post/Post.css'
import Post from "../../components/Post/Post";

function Feed({postList, setPostList}) {
    const [editIndex, setEditIndex] = useState(null);
    const [editPost, setEditPost] = useState({title: '', date: '', content: ''});

    const sortedPostList = postList.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    const handleEdit = (index) => {
        const post = postList[index];
        console.log(post)
        setEditIndex(index);
        setEditPost({
            ...post, date: formatDate(post.date)
        });
    };

    const handleSave = () => {
        const updatedList = postList.map((post, index) => 
            index === editIndex ? editPost : post
        )
        setPostList(updatedList);
        setEditIndex(null); //reset values
        setEditPost({title: '', date: '', content: ''});
    };

    const handleDelete = (index) => {
        const updatedPosts = postList.filter((_, i) => i !== index);
        setPostList(updatedPosts);
    }

    return <div className="feed-container">
        <h1 id="feed-title">My Feed</h1>
        <h2 id="feed-desc">A record of your skincare journey</h2>
        {sortedPostList.length > 0 ? (
            sortedPostList.map((post, index) => (
                <Post 
                    key={index}
                    title={post.title}
                    date={post.date}
                    content={post.content}
                    onEdit={() => handleEdit(index)}
                    onDelete={() => handleDelete(index)}
                />
            ))
        ) : (
            <h2 id="no-posts-yet">No content yet. Try creating a post!</h2>
        )}
        {editIndex !== null && (
            <div id="edit-card" className="post-card">
                <input
                    className="post-title edit"
                    type="text"
                    value={editPost.title}
                    onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                    placeholder="Title"
                />
                <input
                    className="post-date edit"
                    type="date"
                    value={editPost.date}
                    onChange={(e) => setEditPost({ ...editPost, date: e.target.value })}
                />
                <textarea
                    className="post-content edit"
                    value={editPost.content}
                    onChange={(e) => setEditPost({ ...editPost, content: e.target.value })}
                    placeholder="Content"
                />
                <button className="button" onClick={handleSave}>Save</button>
            </div>
        )}
            
        
    </div>
}

// yyyy-mm-dd formatting
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // yyyy-MM-dd format
};

export default Feed;
