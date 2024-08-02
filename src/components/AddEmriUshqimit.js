import React, { useState } from 'react';

const AddEmriUshqimit = ({ addEmriUshqimit }) => {
  const initialFormState = { ushqimi: '' };
  const [ushqimi, setUshqimi] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUshqimi({ ...ushqimi, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!ushqimi.ushqimi) return;
    addEmriUshqimit(ushqimi);
    setUshqimi(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Emri i Ushqimit</label>
      <input type="text" name="ushqimi" value={ushqimi.ushqimi} onChange={handleInputChange} />
      <button>Add</button>
    </form>
  );
};

export default AddEmriUshqimit;
