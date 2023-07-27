import React from 'react';
import PropTypes from 'prop-types';
import { StyledFilterBar } from './FilterBar.styled';

export const FilterBar = ({ filter, onFilter }) => {
  const handleInputChange = event => {
    onFilter(event.target.value);
  };

  return (
    <StyledFilterBar>
      Find contact by name
      <input
        onChange={handleInputChange}
        type="text"
        name="search"
        value={filter}
      />
    </StyledFilterBar>
  );
};

FilterBar.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
}.isRequired;
