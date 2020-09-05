import React from 'react';
import './Marker.css';

const Marker = (props) => {
    const { name } = props;
    return (
      <div>
        <div
          className="pin bounce"
          style={{cursor: 'pointer' }}
          title={name}
        />
        <div className="pulse" />
      </div>
    );
  };

  export default Marker;