import React ,{Fragment} from 'react';

const Cancion = ({letra}) => {

    if(letra.length===0) return null

    return (
         <Fragment>
            <h2 className='mt-3'>Letra cancion</h2>
            <p className='letra'>{letra}</p>
        </Fragment>
    
    );
}
 
export default Cancion;