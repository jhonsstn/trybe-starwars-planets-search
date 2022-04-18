import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import useAPI from '../hooks/useAPI';

const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const PlanetsContext = createContext();

export function PlanetsContextProvider({ children }) {
  const [data] = useAPI(API_URL);
  const [nameFilter, setNameFilter] = useState({ name: '' });
  const [numericValuesFilter, setNumericValuesFilter] = useState([
    {
      column: '',
      comparison: '',
      value: 0,
    },
  ]);
  const [order, setOrder] = useState({
    column: '',
    sort: '',
  });

  const contextValues = {
    data,
    nameFilter,
    setNameFilter,
    numericValuesFilter,
    setNumericValuesFilter,
    order,
    setOrder,
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
