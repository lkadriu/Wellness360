import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddKategoria from './components/AddKategoria';
import EditKategoria from './components/EditKategoria';
import KategoriaList from './components/KategoriaList';
import EmriUshqimitList from './components/EmriUshqimitList';
import AddEmriUshqimit from './components/AddEmriUshqimit';
import EditEmriUshqimit from './components/EditEmriUshqimit';
import './App.css';

const App = () => {
  const [kategorite, setKategorite] = useState([]);
  const [ushqimet, setUshqimet] = useState([]);
  const [editingKategoria, setEditingKategoria] = useState(false);
  const [currentKategoria, setCurrentKategoria] = useState({ kategoria: '' });
  const [editingUshqim, setEditingUshqim] = useState(false);
  const [currentUshqim, setCurrentUshqim] = useState({ ushqimi: '' });

  useEffect(() => {
    axios.get('http://localhost:5004/api/Kategoria')
      .then(response => setKategorite(response.data))
      .catch(error => console.error(error));
      
    axios.get('http://localhost:5004/api/EmriUshqimit')
      .then(response => setUshqimet(response.data))
      .catch(error => console.error(error));
  }, []);

  const addKategoria = kategoria => {
    axios.post('http://localhost:5004/api/Kategoria', kategoria)
      .then(response => setKategorite([...kategorite, response.data]))
      .catch(error => console.error(error));
  };

  const deleteKategoria = kategoria => {
    axios.delete(`http://localhost:5004/api/Kategoria/${kategoria}`)
      .then(() => setKategorite(kategorite.filter(k => k.kategoria !== kategoria)))
      .catch(error => console.error(error));
  };

  const updateKategoria = (kategoria, updatedKategoria) => {
    axios.put(`http://localhost:5004/api/Kategoria/${kategoria}`, updatedKategoria)
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

  const addUshqim = ushqimi => {
    axios.post('http://localhost:5004/api/EmriUshqimit', ushqimi)
      .then(response => setUshqimet([...ushqimet, response.data]))
      .catch(error => console.error(error));
  };

  const deleteUshqim = ushqimi => {
    axios.delete(`http://localhost:5004/api/EmriUshqimit/${ushqimi}`)
      .then(() => setUshqimet(ushqimet.filter(u => u.ushqimi !== ushqimi)))
      .catch(error => console.error(error));
  };

  const updateUshqim = (ushqimi, updatedUshqim) => {
    axios.put(`http://localhost:5004/api/EmriUshqimit/${ushqimi}`, updatedUshqim)
      .then(response => {
        setUshqimet(ushqimet.map(u => (u.ushqimi === ushqimi ? response.data : u)));
        setEditingUshqim(false);
      })
      .catch(error => console.error(error));
  };

  const editUshqimRow = ushqim => {
    setEditingUshqim(true);
    setCurrentUshqim({ ushqimi: ushqim.ushqimi });
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
        {editingUshqim ? (
          <EditEmriUshqimit
            editing={editingUshqim}
            setEditing={setEditingUshqim}
            currentUshqim={currentUshqim}
            updateUshqim={updateUshqim}
          />
        ) : (
          <AddEmriUshqimit addUshqim={addUshqim} />
        )}
        <EmriUshqimitList ushqimet={ushqimet} editRow={editUshqimRow} deleteUshqim={deleteUshqim} />
      </div>
    </div>
  );
};

export default App;
