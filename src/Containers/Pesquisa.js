import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import api from '../services/api';

function numersOnly(str){
  return str.replace(/[^\d]/g,'');
}

function Pesquisa(props){
    const goTo = props.goTo;
    const [cepNumber, setCepNumber] = useState("");

    function handleSuccess(dadosCep){      
      props.setResultado(dadosCep);
      goTo("RESULTADO")
    }

    function handleError(err){
      props.setErrorMessage(err);
      goTo("ERRO")
    }

    async function handleSearch(){
      if (cepNumber === ''){
        handleError("digite um cep válido")
        return 
      }

      goTo("CARREGANDO");
      try {
        const response = await api.get(`${cepNumber}/json`);
        console.log(response);
        handleSuccess(response.data);
      } catch (error) {
        handleError("Erro ao consultar o CEP")
      }      
    }

    return (
        <>
          <h1 className="title">Buscador CEP</h1>
          <div className="containerInput">

            <input
              value={numersOnly(cepNumber)}
              placeholder="Digite o CEP"
              onChange={(e) => setCepNumber(numersOnly(e.target.value))}
            />

            <button
              className="buttonSearch" 
              onClick={handleSearch}>
                <FiSearch size={25} color="#FFF" />
            </button>
          </div>
        </>
      );
}

export default Pesquisa;