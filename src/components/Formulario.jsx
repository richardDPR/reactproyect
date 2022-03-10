import React, {useState} from 'react';

export const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const Validar = (event) =>{
        event.preventDefault()
        console.log('test')
        if(!nombre.trim()){
            console.log('Campo Nombre vacio')
            return
        }
        if(!edad.trim()){
            console.log('Campo Edad vacio')
            return
        }
    }

  return (
    <div className='container'>
        <form onSubmit={Validar}>
            <input placeholder='Nombre' className='form-control mb-3' type="text"  onChange={ (e) =>{setNombre(e.target.value)}}/>
            <input placeholder='Edad' className='form-control mb-3' type="text" onChange={ (e) =>{setEdad(e.target.value)}}/>
            <div className='d-grid gap-2'>
                <input className='btn btn-info' type="submit" />
            </div>
            
        </form>
    </div>
  )
};
export default Formulario