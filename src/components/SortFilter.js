import React, { useContext, useState } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

function SortFilter() {
  const { setOrder } = useContext(PlanetsContext);

  const [column, setColumn] = useState('population');
  const [sort, setSort] = useState('ASC');

  const handleSortSubmit = (event) => {
    event.preventDefault();
    setOrder({ column, sort });
  };

  return (
    <form onSubmit={ handleSortSubmit }>
      <label htmlFor="column">
        Ordenar
        <select
          data-testid="column-sort"
          name="column"
          id="column"
          value={ column }
          onChange={ ({ target }) => setColumn(target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="sort-asc">
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          id="sort-asc"
          name="sort"
          value="ASC"
          onChange={ ({ target }) => setSort(target.value) }
        />
        Ascendente
      </label>
      <label htmlFor="sort-desc">
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          id="sort-desc"
          name="sort"
          value="DESC"
          onChange={ ({ target }) => setSort(target.value) }
        />
        Descendente
      </label>
      <button data-testid="column-sort-button" type="submit">
        ORDENAR
      </button>
    </form>
  );
}

export default SortFilter;
