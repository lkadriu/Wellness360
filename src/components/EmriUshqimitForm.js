import React, { useState, useEffect } from 'react';
import { createEmriUshqimit, updateEmriUshqimit } from '../api/EmriUshqimitService';

const EmriUshqimitForm = ({ emri, onFormSubmit }) => {
  const [ushqimi, setUshqimi] = useState('');

  useEffect(() => {
    if (emri) {
      setUshqimi(emri.ushqimi);
    } else {
      setUshqimi('');
    }
  }, [emri]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emri) {
      await updateEmriUshqimit(emri.ushqimi, { ushqimi });
    } else {
      await createEmriUshqimit({ ushqimi });
    }

    onFormSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ushqimi:</label>
        <input
          type="text"
          value={ushqimi}
          onChange={(e) => setUshqimi(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EmriUshqimitForm;
