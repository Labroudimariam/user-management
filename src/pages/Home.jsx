import React, { useState, useEffect } from "react";
import UserTable from "../components/UserTable";
export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <UserTable users={users} />
    </div>
  );
}
