import { FiRotateCcw } from 'react-icons/fi';

function Resultados(props){
    const result = props.result;
    const goTo = props.goTo;


    const keys = Object.keys(result);
    const elements = keys.map(key => (
      <span key={key}><b>{key}: </b>{result[key]}</span>
    ))
    return (
        <>
          <main className="main">
            {elements}            
          </main>

          <button
            className="buttonSearch" 
            onClick={() => goTo("PESQUISA")}>
              <FiRotateCcw size={50} color="#FFF" />
          </button>
        </>
      );
}

export default Resultados;