import { FiXOctagon } from 'react-icons/fi';

function Carregando(props){
   const goTo = props.goTo;
    return (
          <>       
            <h1 className="subTitle">Carregando resultados...</h1>
            
            <button
            className="buttonSearch" 
            onClick={() => goTo("PESQUISA")}>
              <FiXOctagon size={50} color="#FFF" />
          </button>
          </>        
      );
}

export default Carregando;