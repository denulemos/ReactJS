import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';

const Usuario = () => {
    const [user, setUser] = useState([]);
    const {id} = useParams();

  const obtenerUsuario = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);
      setUser(await res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    obtenerUsuario();
  }, []);
    return (
        <div>
            <h4>Usuario</h4>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default Usuario
