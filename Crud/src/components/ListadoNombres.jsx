import React, {useState} from 'react'

const ListadoNombres = () => {
    const [nombres, setNombre] = useState('');
    return (
        <div>
            <h2>Aplicacion CRUD Basica</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                </div>
                <div className="col">
                    <h2>Añadir nombres</h2>
                    <form className="form-group">
                        <input onChange={() => {setNombre(e.target.value)}} className="form-control mb-3" type="text" placeholder="Nombre"></input>
                        <input className= "form-control btn-block" type="submit" value="Registrar"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ListadoNombres
