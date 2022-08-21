import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function Consult() {
  return (
    <div>
      <Link to="/">
        Voltar
      </Link>
      <SearchBar />
      <Link to="/details/">
        Detalhes
      </Link>
    </div>
  );
}

export default Consult;
