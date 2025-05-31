import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ZapatoList from './components/ZapatoList';
import ZapatoForm from './components/ZapatoForm';

const API_URL = 'http://localhost:5000/api/zapatos';

export default function App() {
  const [zapatos, setZapatos] = useState([]);
  const [editingZapato, setEditingZapato] = useState(null);

  const fetchZapatos = async () => {
    try {
      const res = await axios.get(API_URL);
      setZapatos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchZapatos();
  }, []);

  const saveZapato = async (zapato) => {
    try {
      if (editingZapato) {
        await axios.put(`${API_URL}/${editingZapato.id}`, zapato);
        setEditingZapato(null);
      } else {
        await axios.post(API_URL, zapato);
      }
      fetchZapatos();
    } catch (error) {
      console.error(error);
    }
  };

  const editZapato = (zapato) => {
    setEditingZapato(zapato);
  };

  const deleteZapato = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchZapatos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <h1>Gestión de Zapatería</h1>
      <ZapatoForm onSave={saveZapato} editingZapato={editingZapato} onCancel={() => setEditingZapato(null)} />
      <ZapatoList zapatos={zapatos} onEdit={editZapato} onDelete={deleteZapato} />
    </div>
  );
}