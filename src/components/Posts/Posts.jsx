import React, { useEffect, useState } from "react";

// ^ Posts Component
const Posts = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  });

  return (
    <div>
      <h3>Post Count: {post.length}</h3>
      <ul style={{ listStyle: "none" }}>
        {post.map((singlePost) => (
          <li>{singlePost.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
