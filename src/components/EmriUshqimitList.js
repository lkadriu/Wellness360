import React from 'react';

const EmriUshqimitList = ({ emratEushqimit, editRow, deleteEmriUshqimit }) => {
  if (!emratEushqimit) {
    return <p>Loading...</p>; // Ose shfaq një mesazh gabimi nëse është e përshtatshme
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Ushqimi</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {emratEushqimit.length > 0 ? (
          emratEushqimit.map((emri) => (
            <tr key={emri.ushqimi}>
              <td>{emri.ushqimi}</td>
              <td>
                <button onClick={() => editRow(emri)}>Edit</button>
                <button onClick={() => deleteEmriUshqimit(emri.ushqimi)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No emrat e ushqimit found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default EmriUshqimitList;
