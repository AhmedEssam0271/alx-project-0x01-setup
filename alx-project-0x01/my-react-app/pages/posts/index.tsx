import React from 'react';
import PostCard from '../../../components/common/PostCard';

const PostsPage: React.FC = () => {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', image: 'image1.jpg' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', image: 'image2.jpg' },
    // Add more posts as needed
  ];

  return (
    <div className="posts-page">
      <h1 className="text-3xl font-bold">Posts</h1>
      <div className="post-list">
        {posts.map(post => (
          <PostCard key={post.id} title={post.title} content={post.content} image={post.image} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;