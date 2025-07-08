import React from "react";
import posts from "./post.json";

function PostList() {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{post.title}</h2>
          {post.content && <p>{post.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default PostList;
