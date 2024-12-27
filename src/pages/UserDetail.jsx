import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);
  if (!user) return <p>Chargement...</p>;
  return (
    <div>
      <h1>Détails de l'utilisateur</h1>
      <div className="user-detail">
        <p>
          <strong>Nom :</strong> {user.name}
        </p>
        <p>
          <strong>Email :</strong> {user.email}
        </p>
      </div>
    </div>
  );
}
