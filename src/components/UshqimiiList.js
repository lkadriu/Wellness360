import React from 'react';

const UshqimiiList = ({ ushqimet, editRow, deleteUshqimii }) => (
  <table>
    <thead>
      <tr>
        <th>Data</th>
        <th>Kategoria</th>
        <th>Ushqimi</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {ushqimet.length > 0 ? (
        ushqimet.map(ushqimii => (
          <tr key={ushqimii.data}>
            <td>{new Date(ushqimii.data).toLocaleDateString()}</td>
            <td>{ushqimii.kategoria}</td>
            <td>{ushqimii.ushqimi}</td>
            <td>
              <button onClick={() => editRow(ushqimii)}>Edit</button>
              <button onClick={() => deleteUshqimii(ushqimii.data)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No ushqime</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UshqimiiList;
