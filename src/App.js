
import './App.css';

import React, { useState } from 'react';
import FormularioAdicionarTarefa from './components/FormularioAdicionarTarefa';
import ListaDeTarefas from './components/ListaDeTarefas';
import GraficoDeTarefas from './components/GraficoDeTarefas'; 

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (nome) => {
    const novaTarefa = { nome, concluida: false };
    setTarefas([...tarefas, novaTarefa]);
  };
  

  const concluirTarefa = (indice) => {
    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas[indice].concluida = true;
    setTarefas(tarefasAtualizadas);
  };

  const removerTarefa = (indice) => {
    const tarefasAtualizadas = tarefas.filter((_, i) => i !== indice);
    setTarefas(tarefasAtualizadas);
  };

  return (
    <div className="app-container">
      <h1 className="titulo">Lista de Tarefas</h1>
      <div className="conteudo-principal">
        <div className="conteudo">
          <FormularioAdicionarTarefa aoAdicionarTarefa={adicionarTarefa} />
          <ListaDeTarefas 
            tarefas={tarefas} 
            aoConcluirTarefa={concluirTarefa} 
            aoRemoverTarefa={removerTarefa} 
          />
        </div>
        <div className="grafico-de-tarefas">
          <GraficoDeTarefas tarefas={tarefas} />
        </div>
      </div>
    </div>
  );
}

export default App;


