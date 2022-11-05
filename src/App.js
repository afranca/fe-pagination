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

  console.log(posts);
  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">React Front-end Pagination</h2>
      <Posts posts={posts} loading={loading} />
    </div>
  );
}

export default App;
