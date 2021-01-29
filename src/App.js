import React ,{Fragment ,useState,useEffect} from 'react';
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Info from './components/Info'
import axios from 'axios'

function App() {

  const [busquedaletra,guardabusquedaLetra]=useState({})
  const [letra,guardarLetra]=useState('')
  const [informacion,guardaInformacion]=useState({})
  const [error,guardarError]=useState(false)

 

  useEffect(()=>{

    if(Object.entries(busquedaletra).length===0) return

    const consultarApiLetras = async()=>{
      const {artista,cancion}=busquedaletra

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`


      try {
        const [letra,informacion]= await Promise.all( [ axios(url) , axios(url2) ] )
        guardarLetra(letra.data.lyrics);
        guardaInformacion(informacion.data.artists[0])
        guardarError(false)
        
      } catch (error) {
        guardarError(true)
      }

     
    }
    consultarApiLetras()

  },[busquedaletra,informacion])

  return (
    <Fragment>
      <Formulario
        guardabusquedaLetra={guardabusquedaLetra}
      />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <Info
              informacion={informacion}
            />
          </div>
          <div className='col-md-6'>
            <Cancion
                letra={letra}
              />
          </div>
        </div>
      </div>
      { error?<p className='alert alert-primary text-center mt-3' >Intenta con otra cancion u otro Artista</p>:null}
    </Fragment>
  );
}

export default App;
