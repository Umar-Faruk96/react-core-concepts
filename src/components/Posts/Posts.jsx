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
      <h2 style={{ textDecoration: "underline double green" }}>
        Posts Component
      </h2>
      <h5>Post Count: {post.length}</h5>
      <ul style={{ listStyle: "none" }}>
        {post.map((singlePost) => (
          <li>{singlePost.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
