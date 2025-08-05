import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => (
  <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="mb-2">
      <h2 className="text-2xl font-bold text-blue-700">{name}</h2>
      <p className="text-gray-500">@{username}</p>
    </div>
    <p className="text-gray-700 mb-2">
      <span className="font-semibold">Email:</span> {email}
    </p>
    <p className="text-gray-700 mb-2">
      <span className="font-semibold">Phone:</span> {phone}
    </p>
    <p className="text-gray-700 mb-2">
      <span className="font-semibold">Website:</span> {website}
    </p>
    <div className="mb-2">
      <span className="font-semibold">Address:</span>
      <p className="text-gray-600 ml-2">
        {address.suite}, {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
    <div>
      <span className="font-semibold">Company:</span>
      <p className="text-gray-600 ml-2">{company.name}</p>
      <p className="text-gray-400 ml-2 italic">{company.catchPhrase}</p>
    </div>
  </div>
);

export default UserCard;
