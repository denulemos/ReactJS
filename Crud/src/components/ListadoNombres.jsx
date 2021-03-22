import React, { useState } from "react";
import uniqid from "uniqid";

const ListadoNombres = () => {
  const [nombre, setNombre] = useState("");
  const [nombres, setNombres] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState(null);

  const addNombres = (e) => {
    e.preventDefault(); // Evitamos la recarga de la pagina
    if (!nombre.trim()){
        setError("El campo nombre esta vacio");
        return
    }
    const nuevoNombre = {
      id: uniqid(), // genera un ID unico
      dato: nombre,
    };
    setNombres([...nombres, nuevoNombre]); // A lista de nombres le agregamos nombre
    setNombre("");
    setError(null);
  };

  const borrarNombre = (id) => {
    // Sacamos el item con el ID coincidente
    const nuevoArray = nombres.filter((item) => item.id !== id);
    setNombres(nuevoArray);
  };

  const editar = (item) => {
    setModoEdicion(true);
    setNombre(item.dato);
    setId(item.id);
  };

  const editarNombre = (e) => {
    e.preventDefault(); // Evitamos la recarga de la pagina
    const nuevoArray = nombres.map((item) =>
      item.id === id
        ? {
            id: item.id,
            dato: nombre,
          }
        : item
    );
    setNombres(nuevoArray);
    setModoEdicion(false);
    setNombre("");
  };

  return (
    <div>
      <h2> Aplicacion CRUD Basica </h2>
      <div className="row">
        <div className="col">
          <h2> Listado de nombres </h2>
          <ul className="list-group">
            {nombres.map((item) => (
              <li key={item.id} className="list-group-item">
                {item.dato}
                <button
                  onClick={() => borrarNombre(item.id)}
                  className="btn btn-danger float-right"
                >
                  Borrar
                </button>
                <button
                  onClick={() => editar(item)}
                  className="btn btn-info float-right"
                >
                  Editar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2> Añadir nombres </h2>
          <form
            onSubmit={(e) => (modoEdicion ? editarNombre(e) : addNombres(e))}
            className="form-group"
          >
            <input
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              className="form-control mb-3"
              type="text"
              placeholder="Nombre"
            >
              
            </input>
            <input
              className="form-control btn-block"
              type="submit"
              value={modoEdicion ? "Editar" : "Registrar"}
            />
          </form>
          {
              error != null ? (
<div className="alert-danger">{error}</div>
              )
              :
              (
<div></div>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default ListadoNombres;
