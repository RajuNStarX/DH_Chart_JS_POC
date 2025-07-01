<template>
    <Doughnut :data="chartData" :options="chartOptions" />
  </template>
  
  <script setup>
  import { Doughnut } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, ArcElement);
  
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
      title: { display: true, text: 'User Sentiment Distribution', color: '#ffffff', font: { size: 18, weight: 'bold' } },
      tooltip: { backgroundColor: 'rgba(74, 222, 128, 0.9)', titleColor: '#ffffff', bodyColor: '#ffffff' },
    }
  };
  </script>