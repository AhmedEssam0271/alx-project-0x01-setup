import React, { useState } from "react";
import { UserModalProps, UserData, UserProps } from "@/interfaces";

const initialState: UserData = {
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: { lat: "", lng: "" },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else if (name.startsWith("geo.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [key]: value },
        },
      }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [key]: value },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Helper to generate a new unique id (replace with your own logic as needed)
  const generateNewId = (): number => Date.now();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userWithId: UserProps = {
      ...user,
      id: user.id ?? generateNewId(),
    };
    onSubmit(userWithId);
    onClose();
  };

  // When creating a new user, ensure id is always a number
  const handleAddUser = (user: UserData) => {
    const userWithId: UserProps = {
      ...user,
      id: user.id ?? generateNewId(), // generateNewId() should return a number
    };
    // Now use userWithId where UserProps is expected
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="w-full border rounded px-3 py-2"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border rounded px-3 py-2"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border rounded px-3 py-2"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border rounded px-3 py-2"
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleChange}
          />
          <input
            className="w-full border rounded px-3 py-2"
            name="website"
            placeholder="Website"
            value={user.website}
            onChange={handleChange}
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              className="border rounded px-3 py-2"
              name="address.street"
              placeholder="Street"
              value={user.address.street}
              onChange={handleChange}
            />
            <input
              className="border rounded px-3 py-2"
              name="address.suite"
              placeholder="Suite"
              value={user.address.suite}
              onChange={handleChange}
            />
            <input
              className="border rounded px-3 py-2"
              name="address.city"
              placeholder="City"
              value={user.address.city}
              onChange={handleChange}
            />
            <input
              className="border rounded px-3 py-2"
              name="address.zipcode"
              placeholder="Zipcode"
              value={user.address.zipcode}
              onChange={handleChange}
            />
            <input
              className="border rounded px-3 py-2"
              name="geo.lat"
              placeholder="Geo Lat"
              value={user.address.geo.lat}
              onChange={handleChange}
            />
            <input
              className="border rounded px-3 py-2"
              name="geo.lng"
              placeholder="Geo Lng"
              value={user.address.geo.lng}
              onChange={handleChange}
            />
          </div>
          <input
            className="w-full border rounded px-3 py-2"
            name="company.name"
            placeholder="Company Name"
            value={user.company.name}
            onChange={handleChange}
          />
          <input
            className="w-full border rounded px-3 py-2"
            name="company.catchPhrase"
            placeholder="Catch Phrase"
            value={user.company.catchPhrase}
            onChange={handleChange}
          />
          <input
            className="w-full border rounded px-3 py-2"
            name="company.bs"
            placeholder="BS"
            value={user.company.bs}
            onChange={handleChange}
          />
          <div className="flex justify-end space-x-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
