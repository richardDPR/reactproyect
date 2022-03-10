import React, { Fragment } from 'react';

function Hola() {
    let saludo = 'variable saludo';
    return(
       <Fragment>
           <h2>Primer Componente de react {saludo} </h2>
           <p>segundo texto</p>
       </Fragment> 
    );
}
export default Hola;