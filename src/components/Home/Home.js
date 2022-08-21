import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div>
        <Link to="/registration">
          <button type="button">
            Cadastrar Reagente
          </button>
        </Link>
      </div>
      <div>
        <Link to="/consult">
          <button type="button">
          Consultar Reagente
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
