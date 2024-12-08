import { useState } from "react";

const Home = () => {
  const [posts] = useState([
    {
      id: 1,
      username: "User1",
      content: "Hello world!",
      timestamp: "2024-06-01",
    },
    {
      id: 2,
      username: "User2",
      content: "Another post!",
      timestamp: "2024-06-02",
    },
  ]);

  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <p>
            <strong>{post.username}</strong>: {post.content}
          </p>
          <p>{post.timestamp}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
