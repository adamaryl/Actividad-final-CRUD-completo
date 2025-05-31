import React from 'react';

export default function ZapatoList({ zapatos, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
      <thead>
        <tr>
          <th>ID</th><th>Modelo</th><th>Precio</th><th>Descripción</th><th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {zapatos.length === 0 && <tr><td colSpan="5">No hay productos</td></tr>}
        {zapatos.map(z => (
          <tr key={z.id}>
            <td>{z.id}</td>
            <td>{z.modelo}</td>
            <td>${z.precio.toFixed(2)}</td>
            <td>{z.descripcion}</td>
            <td>
              <button onClick={() => onEdit(z)}>Editar</button>
              <button onClick={() => onDelete(z.id)} style={{ marginLeft: 10 }}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}