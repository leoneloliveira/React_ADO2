import React from 'react';

function ItemDeTarefa({ tarefa, indice, aoConcluirTarefa, aoRemoverTarefa }) {
  return (
    <li>
      <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
        {tarefa.nome}
      </span>
      <button className='concluir' onClick={() => aoConcluirTarefa(indice)}>
        {tarefa.concluida ? 'Concluída' : 'Concluir'}
      </button>
      <button  className="remover"  onClick={() => aoRemoverTarefa(indice)}>Remover</button>
    </li>
  );
}

export default ItemDeTarefa;
