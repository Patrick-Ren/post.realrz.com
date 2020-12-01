import React, { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loadig, setLoading] = useState(true);

  useEffect(() => {
    // make API request to get all posts
    setTimeout(() => {
      setPosts([
        {
          date: "2020-10-12",
          name: "sqlite3 笔记",
        },
        {
          date: "2020-10-19",
          name: "写给 JavaScript 开发者的 Swift 简介",
        },
        {
          date: "2020-11-05",
          name: "JavaScript 中的函数参数",
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  if (loadig) return <div>Loading...</div>;

  return (
    <div>
      {posts.map((post) => {
        return (
          <div style={{ marginBottom: 12 }} key={post.name}>
            <div style={{ fontSize: 12 }}>{post.date}</div>
            <div style={{ fontSize: 20, color: "royalblue" }}>{post.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
