import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './css/Details.css'

const WarehouseDetailsPage = () => {
  const { id } = useParams();
  const selectedWarehouse = useSelector((state) =>
    state.warehouses.warehouses.find((warehouse) => warehouse.id === Number(id))
  );

  if (!selectedWarehouse) {
    return <div>Loading...</div>;
  }

  return (
    <div className='details'>
      <h1>Warehouse Details</h1>
      <h3>{selectedWarehouse.name}</h3>
      <p>Code: {selectedWarehouse.code}</p>
      <p>City: {selectedWarehouse.city}</p>
      <p>Cluster: {selectedWarehouse.cluster}</p>
      <p>Available Space: {selectedWarehouse.space_available}</p>
      <p>Type: {selectedWarehouse.type}</p>
      <p>Is Registered: {selectedWarehouse.is_registered.toString()}</p>
      <p>Is Live: {selectedWarehouse.is_live.toString()}</p>
    </div>
  );
};

export default WarehouseDetailsPage;
