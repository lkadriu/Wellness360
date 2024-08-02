import React, { useState } from 'react';

const AddUshqimii = ({ addUshqimii }) => {
  const initialFormState = { data: '', kategoria: '', ushqimi: '' };
  const [ushqimii, setUshqimii] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUshqimii({ ...ushqimii, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!ushqimii.data || !ushqimii.kategoria || !ushqimii.ushqimi) return;
    addUshqimii(ushqimii);
    setUshqimii(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Data</label>
      <input
        type="date"
        name="data"
        value={ushqimii.data}
        onChange={handleInputChange}
      />
      <label>Kategoria</label>
      <input
        type="text"
        name="kategoria"
        value={ushqimii.kategoria}
        onChange={handleInputChange}
      />
      <label>Ushqimi</label>
      <input
        type="text"
        name="ushqimi"
        value={ushqimii.ushqimi}
        onChange={handleInputChange}
      />
      <button type="submit">Add new ushqimii</button>
    </form>
  );
};

export default AddUshqimii;
