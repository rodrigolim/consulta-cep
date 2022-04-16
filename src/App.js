import './styles.css';

import { useState } from 'react';
import Carregando from './Containers/Carregando.js'
import Erro from './Containers/Erro.js'
import Pesquisa from './Containers/Pesquisa.js'
import Resultado from './Containers/Resultado.js'

function App() { 
  const [nomeTela, setNomeTela] = useState("PESQUISA");
  const [resultado, setResultado] = useState({});//Inicializando com Objeto Vazio
  const [errorMessage, setErrorMessage] = useState("");

  function goTo(nomeTela){
    setNomeTela(nomeTela);
  }

  return <>
    <div className="container">
        {nomeTela === "PESQUISA" ? <Pesquisa goTo={goTo} setResultado={setResultado} setErrorMessage={setErrorMessage}/> : null}
        {nomeTela === "RESULTADO" ? <Resultado goTo={goTo} result={resultado}/> : null}
        {nomeTela === "ERRO" ? <Erro goTo={goTo} errorMessage={errorMessage}/> : null}
        {nomeTela === "CARREGANDO" ? <Carregando goTo={goTo} /> : null}  
    </div>
  </> 
  
}

export default App;
