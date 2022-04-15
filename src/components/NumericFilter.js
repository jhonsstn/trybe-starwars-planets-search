import React, { useContext, useState } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

function NumericFilter() {
  const { numericValuesFilter, setNumericValuesFilter } = useContext(PlanetsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    setNumericValuesFilter((prevState) => [
      ...prevState,
      {
        column,
        comparison,
        value,
      },
    ]);
  };

  const removeFilter = (filterIndex) => {
    const removedFilter = numericValuesFilter.filter(
      (filter, index) => index !== filterIndex,
    );
    setNumericValuesFilter([...removedFilter]);
  };

  const renderColumnFilters = (columnFilters) => columnFilters.map((columnFilter) => (
    <option key={ columnFilter } value={ columnFilter }>
      {columnFilter}
    </option>
  ));

  const filterColumnFilters = () => {
    const columnFilters = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const activeFilters = numericValuesFilter.map((filter) => filter.column);

    const remainingFilters = columnFilters.filter(
      (filter) => !activeFilters.includes(filter),
    );

    return renderColumnFilters(remainingFilters);
  };

  return (
    <div>
      <form onSubmit={ handleFilterSubmit }>
        <label htmlFor="column">
          Coluna
          <select
            data-testid="column-filter"
            name="column"
            id="column"
            value={ column }
            onChange={ ({ target }) => setColumn(target.value) }
          >
            {filterColumnFilters()}
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
        <button data-testid="button-filter" type="submit">
          FILTRAR
        </button>
      </form>
      {numericValuesFilter.map((filter, index) => {
        if (index === 0) {
          return null;
        }
        return (
          <div key={ filter.column }>
            <span>{filter.column}</span>
            <span>{filter.comparison}</span>
            <span>{filter.value}</span>
            <span>
              <button type="button" onClick={ () => removeFilter(index) }>
                Remove
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default NumericFilter;
