import React from 'react';

const Fila = ({ usuario, fecha, hora, folio, participantes, producto, nombre, apellidos }) => {
    return (
        <tr>
            <td>{usuario}</td>
            <td>{nombre}</td>
            <td>{apellidos}</td>
            <td>{fecha + ' ' + hora}</td>
            <td>{folio}</td>
            <td>{participantes}</td>
            <td>{producto}</td>
        </tr>
    );
}

export default Fila;