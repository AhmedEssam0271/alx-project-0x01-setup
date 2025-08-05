import React from "react";
import Image from "next/image";

interface PostCardProps {
  title: string;
  content: string;
  image?: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, image }) => (
  <div className="border p-4 rounded shadow">
    {image && (
      <Image
        src={image}
        alt={title}
        className="mb-4 rounded"
        width={600}
        height={400}
        style={{ objectFit: "cover" }}
      />
    )}
    {image && <Image src={image} alt={title} className="mb-4 rounded" />}
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default PostCard;
