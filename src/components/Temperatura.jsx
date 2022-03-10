import React, {useState} from 'react';

export const Temperatura = () => {

    const [temperatura, setTemperatura] = useState(19)
    const subir = () => {
        setTemperatura(temperatura +1)
    }

    const bajar = () => {
        setTemperatura(temperatura -1)
    }


  return (
    <div className='container'>
        <h2>La temperatura es: {temperatura} </h2>
        <p>
            {
                temperatura >   21  ? 'Caluroso' : 'Frio'
            }
        </p>
        <button className='btn btn-danger' onClick={subir}>+ temperatura</button>
        <button className='btn btn-primary' onClick={bajar}>- temperatura</button>
    </div>
  );
};
 export default Temperatura