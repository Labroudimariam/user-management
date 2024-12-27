import React, { useState } from "react";
export default function UserForm({ initialData = {}, onSubmit }) {
  const [user, setUser] = useState({ name: "", email: "", ...initialData });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom :</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div>
        <label>Email :</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <button type="submit">Enregistrer</button>
    </form>
  );
}
