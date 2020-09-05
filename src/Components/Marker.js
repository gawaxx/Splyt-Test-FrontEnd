import React from 'react';
import './Marker.css';

const Marker = (props) => {
  const { id } = props;
  return (
    <div>
      <div
        className="pin bounce"
        style={{ cursor: 'pointer' }}
        title={`car id: ${id}`}
      />
      <div className="pulse" />
    </div>
  );
};

export default Marker;