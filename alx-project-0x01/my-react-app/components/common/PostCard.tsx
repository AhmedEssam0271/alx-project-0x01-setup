import React from 'react';

interface PostCardProps {
  title: string;
  content: string;
  image?: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, image }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      {image && <img src={image} alt={title} className="mb-4 rounded" />}
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default PostCard;