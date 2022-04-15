import React, { useContext, useEffect } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

function Table() {
  const { data, fetchData, nameFilter, numericValuesFilter } = useContext(PlanetsContext);
  const { column, comparison, value } = numericValuesFilter;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderTableLines = (planets) => planets.map((planet) => (
    <tr key={ planet.name }>
      <td>{planet.name}</td>
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

  const checkValues = (planet) => {
    if (comparison === 'menor que') {
      return parseFloat(planet[column]) < parseFloat(value);
    }
    if (comparison === 'maior que') {
      return parseFloat(planet[column]) > parseFloat(value);
    } if (comparison === 'igual a') {
      return parseFloat(planet[column]) === parseFloat(value);
    }
    return true;
  };

  const filterPlanets = (planets) => {
    const nameFilteredPlanets = planets.filter(nameIncludesInputValue);
    const numericFiltered = nameFilteredPlanets.filter(checkValues);
    return renderTableLines(numericFiltered);
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
