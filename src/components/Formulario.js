import React ,{useState} from 'react';

const Formulario = ({guardabusquedaLetra}) => {
    const [error,guardarError]=useState(false)

    const [busqueda,guardaBusqueda]=useState({
            artista: '',
            cancion: ''
    })

    //funcion para llenar el onjeto del state

    const {artista , cancion}=busqueda;

    //leer el valor de los input
    const actualizarState = (e)=>{
        guardaBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    //consultar las apis
    const buscarInformacion = e=>{
        e.preventDefault();

        if(artista.trim()===''||cancion.trim()===''){
            guardarError(true)
            return;
        }
        //paso la validacion
        guardarError(false)
        guardabusquedaLetra(busqueda);
    }

    return ( 
        <div className='bg-info' >
            <div className='container'>
           
                <div className='row'>
                    <form 
                            className='col card bg-transparent text-white mb-5 pt-5 pb-2'
                            onSubmit={buscarInformacion}
                        >
                        <fieldset >
                            <legend className='text-center'>Buscador de Letras de Canciones</legend>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Artista</label>
                                        <input 
                                            className='form-control'
                                            type='text'
                                            name='artista'
                                            placeholder='Nombre Artista'
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                    </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Cancion</label>
                                        <input 
                                            className='form-control'
                                            type='text'
                                            name='cancion'
                                            placeholder='Nombre Cancion'
                                            onChange={actualizarState}
                                            value={cancion}
                                            
                                        />
                                    </div>
                                
                                </div>
                            
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
            {error?<p className='alert alert-primary text-center'>Todos lo campos son obligatorios</p>:null}
        </div>
     );
}
 
export default Formulario;