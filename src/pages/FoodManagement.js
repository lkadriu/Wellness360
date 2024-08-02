import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddKategoria from '../components/AddKategoria';
import EditKategoria from '../components/EditKategoria';
import KategoriaList from '../components/KategoriaList';
import AddEmriUshqimit from '../components/AddEmriUshqimit';
import EditEmriUshqimit from '../components/EditEmriUshqimit';
import EmriUshqimitList from '../components/EmriUshqimitList';
import '../App.css';

const FoodManagement = () => {
  const [kategorite, setKategorite] = useState([]);
  const [emratEushqimit, setEmratEushqimit] = useState([]);
  const [editingKategoria, setEditingKategoria] = useState(false);
  const [currentKategoria, setCurrentKategoria] = useState({ kategoria: '' });
  const [editingEmriUshqimit, setEditingEmriUshqimit] = useState(false);
  const [currentEmriUshqimit, setCurrentEmriUshqimit] = useState({ ushqimi: '' });

  useEffect(() => {
    axios.get('http://localhost:5004/api/kategoria')
      .then(response => setKategorite(response.data))
      .catch(error => console.error(error));

    axios.get('http://localhost:5004/api/emriushqimit')
      .then(response => setEmratEushqimit(response.data))
      .catch(error => console.error(error));
  }, []);

  const addKategoria = kategoria => {
    axios.post('http://localhost:5004/api/kategoria', kategoria)
      .then(response => setKategorite([...kategorite, response.data]))
      .catch(error => console.error(error));
  };

  const deleteKategoria = kategoria => {
    axios.delete(`http://localhost:5004/api/kategoria/${kategoria}`)
      .then(() => setKategorite(kategorite.filter(k => k.kategoria !== kategoria)))
      .catch(error => console.error(error));
  };

  const updateKategoria = (kategoria, updatedKategoria) => {
    axios.put(`http://localhost:5004/api/kategoria/${kategoria}`, updatedKategoria)
      .then(response => {
        setKategorite(kategorite.map(k => (k.kategoria === kategoria ? response.data : k)));
        setEditingKategoria(false);
      })
      .catch(error => console.error(error));
  };

  const editKategoriaRow = kategoria => {
    setEditingKategoria(true);
    setCurrentKategoria({ kategoria: kategoria.kategoria });
  };

  const addEmriUshqimit = ushqimi => {
    axios.post('http://localhost:5004/api/emriushqimit', ushqimi)
      .then(response => setEmratEushqimit([...emratEushqimit, response.data]))
      .catch(error => console.error(error));
  };

  const deleteEmriUshqimit = ushqimi => {
    axios.delete(`http://localhost:5004/api/emriushqimit/${ushqimi}`)
      .then(() => setEmratEushqimit(emratEushqimit.filter(e => e.ushqimi !== ushqimi)))
      .catch(error => console.error(error));
  };

  const updateEmriUshqimit = (ushqimi, updatedUshqimi) => {
    axios.put(`http://localhost:5004/api/emriushqimit/${ushqimi}`, updatedUshqimi)
      .then(response => {
        setEmratEushqimit(emratEushqimit.map(e => (e.ushqimi === ushqimi ? response.data : e)));
        setEditingEmriUshqimit(false);
      })
      .catch(error => console.error(error));
  };

  const editEmriUshqimitRow = ushqimi => {
    setEditingEmriUshqimit(true);
    setCurrentEmriUshqimit({ ushqimi: ushqimi.ushqimi });
  };

  return (
    <div className="container">
      <div className="section">
        <h2>Kategoritë e Ushqimeve</h2>
        {editingKategoria ? (
          <EditKategoria
            editing={editingKategoria}
            setEditing={setEditingKategoria}
            currentKategoria={currentKategoria}
            updateKategoria={updateKategoria}
          />
        ) : (
          <AddKategoria addKategoria={addKategoria} />
        )}
        <KategoriaList kategorite={kategorite} editRow={editKategoriaRow} deleteKategoria={deleteKategoria} />
      </div>
      <div className="section">
        <h2>Emrat e Ushqimeve</h2>
        {editingEmriUshqimit ? (
          <EditEmriUshqimit
            editing={editingEmriUshqimit}
            setEditing={setEditingEmriUshqimit}
            currentEmriUshqimit={currentEmriUshqimit}
            updateEmriUshqimit={updateEmriUshqimit}
          />
        ) : (
          <AddEmriUshqimit addEmriUshqimit={addEmriUshqimit} />
        )}
        <EmriUshqimitList emratEushqimit={emratEushqimit} editRow={editEmriUshqimitRow} deleteEmriUshqimit={deleteEmriUshqimit} />
      </div>
    </div>
  );
};

export default FoodManagement;
