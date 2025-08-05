import React from "react";
import PostCard from "../../components/common/PostCard";
import Header from "@/components/layout/Header";
const posts = [
  { id: 1, title: "First Post", content: "This is the first post.", image: "" },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post.",
    image: "",
  },
];

const PostsPage: React.FC = () => (
  <div className="p-8">
    <Header />
    <h1 className="text-3xl font-bold mb-4">Posts</h1>
    <div className="grid gap-4">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.content}
          image={post.image}
        />
      ))}
    </div>
  </div>
);

export default PostsPage;
