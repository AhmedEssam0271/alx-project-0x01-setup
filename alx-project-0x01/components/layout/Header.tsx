import React from "react";
import Link from "next/link";

const Header: React.FC = () => (
  <header className="bg-blue-500 p-4">
    <h1 className="text-white text-2xl">My App</h1>
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/posts" className="text-white">
            Posts
          </Link>
        </li>
        <li>
          <Link href="/users" className="text-white">
            Users
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
