import React, { useState } from 'react';

const AddEmriUshqimit = ({ addUshqim }) => {
  const initialFormState = { ushqimi: '' };
  const [ushqim, setUshqim] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUshqim({ ...ushqim, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!ushqim.ushqimi) return;
    addUshqim(ushqim);
    setUshqim(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Ushqimi</label>
      <input
        type="text"
        name="ushqimi"
        value={ushqim.ushqimi}
        onChange={handleInputChange}
      />
      <button type="submit">Add new ushqim</button>
    </form>
  );
};

export default AddEmriUshqimit;
