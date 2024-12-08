import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./UserPage.css";

const UserPage = () => {
  const { username } = useParams();
  const [description, setDescription] = useState(
    "This is a sample user description."
  );
  const [posts] = useState([
    { id: 1, content: "My first post!", timestamp: "2024-06-01" },
    { id: 2, content: "Another day, another post.", timestamp: "2024-06-02" },
  ]);

  return (
    <div className="userpage-container">
      <h1 className="userpage-title">{username}'s Profile</h1>
      <p className="userpage-description">{description}</p>

      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="user-post">
          <p>{post.content}</p>
          <p className="text-gray-500 text-sm">{post.timestamp}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPage;
