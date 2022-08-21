import React, { useContext } from 'react';
import Context from '../../context/Context';

function SearchBar() {
  const {
    setFilterRadio,
    setFilterInput,
    filter,
    setFilter,
  } = useContext(Context);

  const setFiltersParams = (e) => {
    e.preventDefault();
    setFilter();
  };

  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            name="search-input"
            value={ filter.value }
            onChange={ ({ target: { value } }) => setFilterInput(value) }
          />
          <label htmlFor="collumn">
            Cód
            <input
              type="radio"
              name="collumn"
              value="cod"
              onClick={ ({ target: { id } }) => setFilterRadio(id) }
            />
          </label>
          <label htmlFor="collumn">
            Name
            <input
              type="radio"
              name="collumn"
              value="name"
              onClick={ ({ target: { id } }) => setFilterRadio(id) }
            />
          </label>
          <label htmlFor="collumn">
            Grupo
            <input
              type="radio"
              name="collumn"
              value="grupo"
              onClick={ ({ target: { id } }) => setFilterRadio(id) }
            />
          </label>
        </form>
      </div>
      <div>
        <button
          type="submit"
          onClick={ setFiltersParams }
        >
          Buscar Reagente
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
