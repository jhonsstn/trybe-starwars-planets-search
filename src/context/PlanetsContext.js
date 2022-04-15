import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const PlanetsContext = createContext();

export function PlanetsContextProvider({ children }) {
  const [data, setData] = useState({ results: [] });
  const [nameFilter, setNameFilter] = useState({ name: '' });
  const [numericValuesFilter, setNumericValuesFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const fetchData = async () => {
    const planetsResp = await fetch(
      'https://swapi-trybe.herokuapp.com/api/planets/?format=json',
    );
    const planetsData = await planetsResp.json();
    setData(planetsData);
  };

  const contextValues = {
    data,
    fetchData,
    nameFilter,
    setNameFilter,
    numericValuesFilter,
    setNumericValuesFilter,
  };
  return (
    <PlanetsContext.Provider value={ contextValues }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
