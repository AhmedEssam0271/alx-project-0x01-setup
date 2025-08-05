import React from "react";
import Header from "@/components/layout/Header";
// Update the path below if your UserCard component is located elsewhere
import UserCard from "../../components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => (
  <div className="flex flex-col h-screen">
    <Header />
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </main>
  </div>
);

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
