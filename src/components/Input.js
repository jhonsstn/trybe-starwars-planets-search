import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

function Input() {
  const { nameFilter, setNameFilter } = useContext(PlanetsContext);

  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ nameFilter }
      onChange={ ({ target }) => setNameFilter(target.value) }
    />
  );
}

export default Input;
