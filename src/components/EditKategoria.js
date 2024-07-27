import React, { useState, useEffect } from 'react';

const EditKategoria = ({ editing, setEditing, currentKategoria, updateKategoria }) => {
  const [kategoria, setKategoria] = useState(currentKategoria);

  useEffect(() => {
    setKategoria(currentKategoria);
  }, [currentKategoria]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setKategoria({ ...kategoria, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    updateKategoria(kategoria.kategoria, kategoria);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Kategoria</label>
      <input type="text" name="kategoria" value={kategoria.kategoria} onChange={handleInputChange} />
      <button>Update kategoria</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditKategoria;
