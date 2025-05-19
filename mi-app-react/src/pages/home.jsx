import React from 'react';
import moipolitico from '../assets/moipolitico.png';
import moirapero from '../assets/moirapero.png';

function Home() {
  return (
    <div>
      <h1>¿MOISÉS MACÍAS DÍAZ POLÍTICO O RAPERO?</h1>
      <img src={moipolitico} alt="Moi Politico" width={400} />
      <img src={moirapero} alt="Moi Rapero" width={400} />
    </div>
  );
}

export default Home;
