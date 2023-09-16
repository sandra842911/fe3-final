import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/ContextGlobal';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Home () {
  const {details} = useContext(ContextGlobal);
  return (
    <main className="card" >
      <h1>Home</h1>
      <div className='card-grid'>
      {details.map((detail) => (
          <div key={detail.id} className="dentist-card">
            <h2>{detail.name}</h2>
            <p>Email: {detail.email}</p>
            <p>Teléfono: {detail.phone}</p>
            <p>Website: {detail.website}</p>
            <Link to={`/dentist/${detail.id}`}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home;