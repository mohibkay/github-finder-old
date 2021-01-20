import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className="form form-control bg-secondary text-white mt-3">
        <i className="fas fa-exclamation-circle"></i>
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
