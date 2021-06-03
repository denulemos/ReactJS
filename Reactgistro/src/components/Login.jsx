import React, { useState } from "react";
import { auth } from "../firebaseconfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msgError, setMsgError] = useState(null);

  const RegistrarUsuario = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, pass);
      setEmail("");
      setPass("");
      alert("Usuario registrado");
    } catch (e) {
      if (e.code === "auth/invalid-email") {
        setMsgError("Email invalido");
      } else if (e.code === "auth/weak-password") {
        setMsgError("El password es poco seguro");
      } else {
        setMsgError("Ocurrio un error");
      }
    }
  };

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={(e) => RegistrarUsuario(e)} className="form-group">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
            placeholder="Introduce tu email"
            type="email"
          />
          <input
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            className="form-control mt-4"
            placeholder="Introduce tu password"
            type="password"
          />
          <input
            type="submit"
            value="Registrar"
            className="btn btn-dark btn-block mt-4"
          />
        </form>
        {msgError !== null ? <div> {msgError} </div> : <span></span>}
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
