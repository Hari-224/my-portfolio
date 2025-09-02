import React from 'react';
import Button from '../../ui/Button'; 
import './FilterButtons.css';

const FilterButtons = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <Button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`filter-button ${filter === activeFilter ? 'active' : ''}`}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
