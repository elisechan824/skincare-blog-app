import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';
import '../Feed/Feed.css';
import '../../components/Post/Post.css'

function CreatePost({onCreatePost}) {
    // state variables 
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title && date) { //title and date are required, so if not null
            const newPost = {
                title: title, 
                content: content, 
                date: date
            };
            onCreatePost(newPost);
            setTitle(''); // reset values
            setContent('');
            setDate('');
            navigate('/feed'); // return to feed
        }
        else {
            console.log("Failed");
        }
    };

    return <div className="create-post-container">
        <h1 id="create-post-title">Create a Post</h1>
        <div className="new-post-card post-card">
            <form onSubmit={handleSubmit}>
                <div className="new-post-field">
                    <input 
                        type="text" 
                        value={title} 
                        className="form-control" 
                        id="new-post-title" 
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)} 
                        required
                    />
                </div>  
                <div className="new-post-field">
                    <input 
                        type="date" 
                        value={date} 
                        className="form-control" 
                        id="new-post-date" 
                        placeholder="Date"
                        onChange={(e) => setDate(e.target.value)} 
                        required
                    />
                </div>
                <div className="new-post-field">
                    <textarea 
                        className="form-control" 
                        value={content} 
                        id="new-post-content" 
                        rows="10" 
                        placeholder="Share your thoughts here..."
                        onChange={(e) => setContent(e.target.value)}    
                    ></textarea>
                </div>
                <button id="submit-button" type="submit" class="btn btn-primary">Post</button>
            </form>
                {/* <h3 class="post-title"><%= %></h3> 
                <form action="/submit" method="POST">
                    <div class="new-post-title-group">
                        <input type="text" name="newPostTitle" class="form-control" id="new-post-title" placeholder="Title">
                    </div>                                           
                    <p class="post-date"><%= %></p>
                    <div class="new-post-content-group">
                        <textarea class="form-control" name="newPostContent" id="new-post-content" rows="10" placeholder="Share your thoughts here..."></textarea>
                    </div>
                    <button id="submit-button" type="submit" class="btn btn-primary">Post</button>
                </form> */}
        </div>
        
    </div>
}

export default CreatePost;