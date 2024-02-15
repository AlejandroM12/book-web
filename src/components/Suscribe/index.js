import React from 'react';

const Suscribe = () => {
  return (
    <section className='flex items-center justify-center mt-20 subscribe'>
      <div>
        <h4>Libros recomendados para que los revises</h4>
        <form>
          <input
            placeholder='Escribe tu recomendación'
            className='submit-area'
          />
          <button className='submit-button'>Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Suscribe;
