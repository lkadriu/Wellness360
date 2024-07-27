import React from 'react';
import styles from './KategoriaList.module.css';

const KategoriaList = ({ kategorite, editRow, deleteKategoria }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th className={styles.th}>Kategoria</th>
        <th className={styles.th}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {kategorite.length > 0 ? (
        kategorite.map(kategoria => (
          <tr key={kategoria.kategoria}>
            <td>{kategoria.kategoria}</td>
            <td>
              <button onClick={() => editRow(kategoria)} className={styles.button}>Edit</button>
              <button onClick={() => deleteKategoria(kategoria.kategoria)} className={styles.button}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No kategorite</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default KategoriaList;
