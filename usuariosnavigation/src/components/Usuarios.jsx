import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const Usuarios = () => {
  const [users, setUsers] = useState([]);

  const obtenerUsuarios = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(await res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>

      {users.map((item) => (
       <div>
           <Link to={`/usuario/${item.id}`} key={item.id}>{item.name}</Link>
       </div>
      ))}
    </div>
  );
};

export default Usuarios;
