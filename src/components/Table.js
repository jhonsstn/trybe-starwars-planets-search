import React, { useContext, useEffect } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

const NEGATIVE = -1;
const POSITIVE = 1;
const ZERO = 0;

function Table() {
  const { data, fetchData, nameFilter } = useContext(PlanetsContext);
  const {
    numericValuesFilter,
    order: { column, sort },
  } = useContext(PlanetsContext);

  useEffect(() => {
    fetchData();
  });

  const renderTableLines = (planets) => planets.map((planet) => (
    <tr key={ planet.name }>
      <td data-testid="planet-name">{planet.name}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.orbital_period}</td>
      <td>{planet.diameter}</td>
      <td>{planet.climate}</td>
      <td>{planet.gravity}</td>
      <td>{planet.terrain}</td>
      <td>{planet.surface_water}</td>
      <td>{planet.population}</td>
      <td>{planet.films}</td>
      <td>{planet.created}</td>
      <td>{planet.edited}</td>
      <td>{planet.url}</td>
    </tr>
  ));

  const nameIncludesInputValue = (planet) => {
    const include = planet.name.toLowerCase().includes(nameFilter.name);
    return include;
  };

  const checkValues = (planet, obj) => {
    if (obj.comparison === 'menor que') {
      return parseFloat(planet[obj.column]) < parseFloat(obj.value);
    }
    if (obj.comparison === 'maior que') {
      return parseFloat(planet[obj.column]) > parseFloat(obj.value);
    }
    if (obj.comparison === 'igual a') {
      return parseFloat(planet[obj.column]) === parseFloat(obj.value);
    }
    return true;
  };

  const sortCallback = (first, second) => {
    if (sort === '') {
      if (first.name < second.name) {
        return NEGATIVE;
      }
      if (first.name > second.name) {
        return POSITIVE;
      }
      return ZERO;
    }
    if (first === 'unknown') {
      return NEGATIVE;
    }
    if (sort === 'ASC') {
      return first[column] - second[column];
    }
    return second[column] - first[column];
  };

  const filterPlanets = (planets) => {
    const nameFilteredPlanets = planets.filter(nameIncludesInputValue);

    const numericFiltered = numericValuesFilter.reduce(
      (prev, actual) => prev.filter((planet) => checkValues(planet, actual)),
      nameFilteredPlanets,
    );

    const sortedPlanets = numericFiltered.sort(sortCallback);
    return renderTableLines(sortedPlanets);
  };

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
        {filterPlanets(data.results)}
      </tbody>
    </table>
  );
}

export default Table;
