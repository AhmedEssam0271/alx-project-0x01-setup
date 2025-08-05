import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4">
      <h1 className="text-white text-2xl">My React App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/posts" className="text-white">Posts</a></li>
          <li><a href="/users" className="text-white">Users</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;