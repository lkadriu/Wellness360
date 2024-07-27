import React, { useState, useEffect } from 'react';

const EditEmriUshqimit = ({ editing, setEditing, currentUshqim, updateUshqim }) => {
  const [ushqim, setUshqim] = useState(currentUshqim);

  useEffect(() => {
    setUshqim(currentUshqim);
  }, [currentUshqim]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUshqim({ ...ushqim, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    updateUshqim(ushqim.ushqimi, ushqim);
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
      <button type="submit">Update ushqim</button>
      <button onClick={() => setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  );
};

export default EditEmriUshqimit;
