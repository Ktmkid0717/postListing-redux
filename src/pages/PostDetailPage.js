import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostDetail from '../components/PostDetail';

const PostDetailPage = ({ match }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postId = match.params.postId;
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      setPost(response.data);
    };
    fetchPost();
  }, [match.params.postId]);

  return (
    <div>
      {post ? (
        <PostDetail title={post.title} body={post.body} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetailPage;
