import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [posts] = useState([
    {
      id: 1,
      username: "user1",
      content: "Hello world!",
      timestamp: "2024-06-01",
    },
    {
      id: 2,
      username: "user2",
      content: "This is my first post!",
      timestamp: "2024-06-02",
    },
  ]);

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">All Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <Link to={`/user/${post.username}`} className="post-username">
            {post.username}
          </Link>
          <p>{post.content}</p>
          <p className="post-timestamp">{post.timestamp}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
