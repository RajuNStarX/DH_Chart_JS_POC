<template>
    <Bar :data="chartData" :options="chartOptions" />
  </template>
  
  <script setup>
  import { Bar } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  defineProps(['chartData']);
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: { labels: { color: '#ffffff', font: { size: 14 } } },
      title: { display: true, text: 'Weekly Interaction Frequency', color: '#ffffff', font: { size: 18, weight: 'bold' } },
      tooltip: { backgroundColor: 'rgba(59, 130, 246, 0.9)', titleColor: '#ffffff', bodyColor: '#ffffff' },
    },
    scales: {
      x: { ticks: { color: '#ffffff' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
      y: { ticks: { color: '#ffffff' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } }
    }
  };
  </script>