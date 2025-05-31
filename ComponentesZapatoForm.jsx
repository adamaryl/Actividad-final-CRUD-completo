import React, { useState, useEffect } from 'react';

export default function ZapatoForm({ onSave, editingZapato, onCancel }) {
  const [modelo, setModelo] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    if (editingZapato) {
      setModelo(editingZapato.modelo);
      setPrecio(editingZapato.precio);
      setDescripcion(editingZapato.descripcion || '');
    } else {
      setModelo('');
      setPrecio('');
      setDescripcion('');
    }
  }, [editingZapato]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!modelo || !precio) {
      alert('Modelo y precio son obligatorios');
      return;
    }
    onSave({ modelo, precio: parseFloat(precio), descripcion });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Modelo"
        value={modelo}
        onChange={e => setModelo(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={e => setPrecio(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
        style={{ marginRight: 10, width: 300 }}
      />
      <button type="submit">{editingZapato ? 'Actualizar' : 'Agregar'}</button>
      {editingZapato && <button type="button" onClick={onCancel} style={{ marginLeft: 10 }}>Cancelar</button>}
    </form>
  );
}