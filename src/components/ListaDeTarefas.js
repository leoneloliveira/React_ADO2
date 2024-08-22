import React from 'react';
import ItemDeTarefa from './ItemDeTarefa';

function ListaDeTarefas({ tarefas, aoConcluirTarefa, aoRemoverTarefa }) {
  return (
    <div className="lista-de-tarefas">
      
      <ul>
        {tarefas.map((tarefa, indice) => (
          <ItemDeTarefa 
            key={indice} 
            tarefa={tarefa} 
            indice={indice} 
            aoConcluirTarefa={aoConcluirTarefa} 
            aoRemoverTarefa={aoRemoverTarefa} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
