import React from 'react';
import { Link } from 'react-router-dom';

function Edit() {
  const handleSubmit = () => {
  };
  return (
    <div>
      <Link to="/">
        Voltar
      </Link>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="group">
          Grupo
          <input type="text" name="group" />
        </label>
        <label htmlFor="name">
          Nome
          <input type="text" name="name" />
        </label>
        <label htmlFor="concentration">
          Concentração
          <input type="text" name="concentration" />
        </label>
        <label htmlFor="expiration-date">
          Data de validade
          <input type="text" name="expiration-date" />
        </label>
        <label htmlFor="invoice">
          Nota Fiscal
          <input type="text" name="invoice" />
        </label>
        <label htmlFor="entry-date">
          Data de entrada
          <input type="text" name="entry-date" />
        </label>
        <label htmlFor="manufacturer">
          Fabricante
          <input type="text" name="manufacturer" />
        </label>
        <label htmlFor="quantity">
          Quantidade
          <input type="text" name="quantity" />
        </label>
        <label htmlFor="unit">
          Unidade
          <input type="text" name="unit" />
        </label>
        <label htmlFor="exit">
          Saída
          <input type="text" name="unit" />
        </label>
        <label htmlFor="date">
          Data
          <input type="text" name="unit" />
        </label>
      </form>
      <Link to="/edit">
        <button
          type="submit"
        >
          Editar
        </button>
      </Link>
    </div>
  );
}

export default Edit;
