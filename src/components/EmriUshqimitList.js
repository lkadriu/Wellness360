import React from 'react';

const EmriUshqimitList = ({ ushqimet, editRow, deleteUshqim }) => (
  <table>
    <thead>
      <tr>
        <th>Ushqimi</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {ushqimet.length > 0 ? (
        ushqimet.map(ushqim => (
          <tr key={ushqim.ushqimi}>
            <td>{ushqim.ushqimi}</td>
            <td>
              <button onClick={() => editRow(ushqim)}>Edit</button>
              <button onClick={() => deleteUshqim(ushqim.ushqimi)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No ushqime</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default EmriUshqimitList;
