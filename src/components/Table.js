import React, { useContext, useEffect } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

function Table() {
  const { data, fetchData, nameFilter } = useContext(PlanetsContext);

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

  const filterPlanets = (planets) => {
    const filteredPlanets = planets.filter((planet) => planet.name.includes(nameFilter));

    return renderTableLines(filteredPlanets);
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
