import React, { useContext, useState } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

function NumericFilter() {
  const { setNumericValuesFilter } = useContext(PlanetsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleFilterSubmit = () => {
    // const numericValuesFilter = {
    //   column,
    //   comparison,
    //   value,
    // };
    setNumericValuesFilter({
      column,
      comparison,
      value,
    });
  };

  return (
    <div>
      <label htmlFor="column">
        Coluna
        <select
          data-testid="column-filter"
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
      <label htmlFor="comparison">
        Operador
        <select
          data-testid="comparison-filter"
          name="comparison"
          id="comparison"
          value={ comparison }
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        data-testid="value-filter"
        type="number"
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleFilterSubmit }
      >
        FILTRAR
      </button>
    </div>
  );
}

export default NumericFilter;
