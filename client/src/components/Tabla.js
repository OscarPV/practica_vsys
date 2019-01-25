import React from 'react';
import Fila from './Fila';
import './Tabla.css';

const Tabla = ({ contrataciones }) => {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Fecha hora alta</th>
                        <th>Folio de contratación</th>
                        <th>Participantes</th>
                        <th>Producto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contrataciones.map((contratacion, i) => {
                            return (
                                <Fila
                                    key={contrataciones[i]._id}
                                    usuario={contrataciones[i].usuario}
                                    fecha={contrataciones[i].fecha_alta}
                                    hora={contrataciones[i].hora_alta}
                                    folio={contrataciones[i].folio_contratacion}
                                    participantes={contrataciones[i].participantes}
                                    producto={contrataciones[i].producto}
                                    nombre={contrataciones[i].datos_usuario.nombre}
                                    apellidos={contrataciones[i].datos_usuario.apellidos}
                                />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Tabla;