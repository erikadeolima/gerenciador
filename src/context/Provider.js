import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Context from './Context';
import data from '../services/data';

function Provider({ children }) {
  const [dados, setDados] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [filterRadio, setFilterRadio] = useState('');
  const [filterInput, setFilterInput] = useState('');
  const [filter, setFilter] = useState({
    collumn: filterRadio,
    value: filterInput,
  });

  useEffect(() => {
    setDados(data);
  }, [setDados]);

  useEffect(() => {
    setDataFiltered(dados);
  }, [dados, dataFiltered]);

  const context = {
    dados,
    setDados,
    dataFiltered,
    setDataFiltered,
    filterInput,
    setFilterInput,
    filterRadio,
    setFilterRadio,
    filter,
    setFilter,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
