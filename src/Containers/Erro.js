import { FiRotateCcw } from 'react-icons/fi';

function Erro(props){
  const goTo = props.goTo;
    return (
        <>
          <h1 className="subTitle">Erro na Consulta</h1>
          
          <main className="main">
            <h2>{props.errorMessage}</h2>
          </main>
          
          <button
            className="buttonSearch" 
            onClick={() => goTo("PESQUISA")}>
              <FiRotateCcw size={50} color="#FFF" />
          </button>
        </>
      );
}

export default Erro;