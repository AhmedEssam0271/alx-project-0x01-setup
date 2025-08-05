import React from "react";
import Header from "@/components/layout/Header";
const UsersPage: React.FC = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <main className="flex-grow flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Users Page</h1>
        <p className="mt-4">List of users will be displayed here.</p>
      </div>
    </main>
  </div>
);

export default UsersPage;
