import React, { useState } from 'react';

function FormularioAdicionarTarefa({ aoAdicionarTarefa }) {
  const [novaTarefa, setNovaTarefa] = useState('');

  const lidarComMudanca = (evento) => {
    setNovaTarefa(evento.target.value);
  };

  const lidarComAdicionar = () => {
    if (novaTarefa.trim()) {
      aoAdicionarTarefa(novaTarefa);
      setNovaTarefa('');
    }
  };

  return (
    <div className="formulario-adicionar-tarefa">
      <input 
        type="text" 
        placeholder="Digite uma nova tarefa" 
        value={novaTarefa} 
        onChange={lidarComMudanca} 
        className="input-tarefa"
      />
      <button onClick={lidarComAdicionar} className="botao-adicionar">
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default FormularioAdicionarTarefa;
