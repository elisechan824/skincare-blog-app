import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Feed from '../../pages/Feed/Feed';
import CreatePost from '../../pages/CreatePost/CreatePost';
// import './App.css'
import Header from '../Header/Header'

const getPostList = () => { // initial post list -- fetch from localStorage
  const initialPostList = localStorage.getItem('postList');
  console.log(initialPostList);
  return initialPostList ? JSON.parse(initialPostList) : [];
};

function App() {
  const [postList, setPostList] = useState(getPostList); //initial state
  
  useEffect(() => { // upon change in postList, save modified postList to localstorage
    localStorage.setItem('postList', JSON.stringify(postList));
  }, [postList]);

  const createPost = (post) => { // add new post handling function
    setPostList([...postList, post]);
  };

  console.log(postList);

  return (
    <Router>
      <div className="backgroundImageContainer"></div>
      <div>
        <Header />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed postList={postList} setPostList={setPostList}/>} />
          <Route path="/create" element={<CreatePost onCreatePost={createPost}/>} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
