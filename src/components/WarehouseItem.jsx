import React from 'react';
import { Link } from 'react-router-dom';
import './css/WarehouseItem.css'
const WarehouseItem = ({ warehouse }) => {
  return (
    <div className='card-item'>
      <h3>{warehouse.name}</h3>
      <p>City: {warehouse.city}</p>
      <p>Cluster: {warehouse.cluster}</p>
      <p>Available Space: {warehouse.space_available}</p>
      <Link to={`/warehouse/${warehouse.id}`}>View Details</Link>
    </div>
  );
};

export default WarehouseItem;