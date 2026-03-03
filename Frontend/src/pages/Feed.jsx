import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const api = import.meta.env.VITE_BACKEND_URL
    axios.get(api + "/posts")
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <section className="feed-section">
      <div className="feed-wrapper">
        <h1 className="feed-heading">Feed</h1>

        <div className="posts">
          {posts.length === 0 ? (
            <p className="no-posts">No posts available. Create a new post to see it here.</p>
          ) : (
            posts.map((post, index) => (
              <div key={index} className="post">
                <img src={post.image} alt={`Post ${index + 1}`} className="post-image" />
                <p className="post-caption">{post.caption}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Feed;