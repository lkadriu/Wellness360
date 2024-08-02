import React from 'react';
import './DoctorAdvice.css'; // Stilizimet për këtë komponent

const DoctorAdvice = ({ advice }) => {
  return (
    <div className="doctor-advice">
      <h3>{advice.title}</h3>
      <p>{advice.content}</p>
      <p><em>- {advice.doctor}</em></p>
    </div>
  );
};

export default DoctorAdvice;
