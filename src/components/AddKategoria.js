import React, { useState } from 'react';
import styles from './AddKategoria.module.css';

const AddKategoria = ({ addKategoria }) => {
  const initialFormState = { kategoria: '' };
  const [kategoria, setKategoria] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setKategoria({ ...kategoria, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!kategoria.kategoria) return;
    addKategoria(kategoria);
    setKategoria(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>Kategoria</label>
      <input
        type="text"
        name="kategoria"
        value={kategoria.kategoria}
        onChange={handleInputChange}
        className={styles.input}
      />
      <button>Add</button>
    </form>
  );
};

export default AddKategoria;
