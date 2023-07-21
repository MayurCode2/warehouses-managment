import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import WarehouseItem from './WarehouseItem';
import "./css/ListingPage.css"

const ListingPage = () => {
  // Get the 'warehouses' data from the Redux store
  const warehouses = useSelector((state) => state.warehouses.warehouses);

  // Define state variables using React hooks
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [filterCity, setFilterCity] = useState(''); // State for city filter
  const [filterCluster, setFilterCluster] = useState(''); // State for cluster filter

  // Initialize 'filteredWarehouses' with all the warehouses
  let filteredWarehouses = warehouses;

  // Apply filtering based on the search query
  if (searchQuery) {
    filteredWarehouses = filteredWarehouses.filter((warehouse) =>
      warehouse.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply filtering based on the selected city
  if (filterCity) {
    filteredWarehouses = filteredWarehouses.filter(
      (warehouse) => warehouse.city === filterCity
    );
  }

  // Apply filtering based on the selected cluster
  if (filterCluster) {
    filteredWarehouses = filteredWarehouses.filter(
      (warehouse) => warehouse.cluster === filterCluster
    );
  }

  return (
    <div>
      <div className='filter'>
        {/* Input for searching by warehouse name */}
        <input
          type="text"
          placeholder="Search by Warehouse Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* Dropdown for filtering by city */}
        <select
          value={filterCity}
          onChange={(e) => setFilterCity(e.target.value)}
        >
          <option value="">Filter by City</option>
          {/* Generate options for each unique city in the 'warehouses' data */}
          {Array.from(
            new Set(warehouses.map((warehouse) => warehouse.city))
          ).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        {/* Dropdown for filtering by cluster */}
        <select
          value={filterCluster}
          onChange={(e) => setFilterCluster(e.target.value)}
        >
          <option value="">Filter by Cluster</option>
          {/* Generate options for each unique cluster in the 'warehouses' data */}
          {Array.from(
            new Set(warehouses.map((warehouse) => warehouse.cluster))
          ).map((cluster) => (
            <option key={cluster} value={cluster}>
              {cluster}
            </option>
          ))}
        </select>
      </div>
      {/* Container to display the filtered warehouse items */}
      <div className='card-container' >
        {/* Render the 'WarehouseItem' component for each filtered warehouse */}
        {filteredWarehouses.map((warehouse) => (
          <WarehouseItem key={warehouse.id} warehouse={warehouse} />
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
