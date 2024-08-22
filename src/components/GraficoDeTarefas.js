import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

function GraficoDeTarefas({ tarefas }) {
  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;
  const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida).length;

  const dados = {
    labels: ['Concluídas', 'Pendentes'],
    datasets: [
      {
        label: 'Visão Geral das Tarefas',
        data: [tarefasConcluidas, tarefasPendentes],
        backgroundColor: ['#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56']
      }
    ]
  };

  return <Pie data={dados} />;
}

export default GraficoDeTarefas;
