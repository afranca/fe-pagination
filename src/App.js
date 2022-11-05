import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import axios from "axios";


function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage,  setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(()=>{
    const fetchPosts = async () =>{
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      setLoading(false);
    }

    fetchPosts();
  },[]);

  // Get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost) ;
  
  
  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">React Front-end Pagination</h2>
      <Posts posts={currentPosts} loading={loading} />
    </div>
  );
}

export default App;
