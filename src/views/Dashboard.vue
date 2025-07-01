<template>
    <div class="p-6 relative">
      <h1 class="text-4xl font-bold mb-8 text-center chart-title">Digital Human Inside a Box - Metrics Dashboard</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card p-6 rounded-xl animate-card">
          <h2 class="text-2xl font-semibold mb-4 chart-title">Interaction Frequency</h2>
          <div class="h-80">
            <BarChart :chart-data="interactionFrequencyData" />
          </div>
        </div>
        <div class="card p-6 rounded-xl animate-card">
          <h2 class="text-2xl font-semibold mb-4 chart-title">Response Time</h2>
          <div class="h-80">
            <LineChart :chart-data="responseTimeData" />
          </div>
        </div>
        <div class="card p-6 rounded-xl md:col-span-2 animate-card">
          <h2 class="text-2xl font-semibold mb-4 chart-title">Sentiment Analysis</h2>
          <div class="h-80 max-w-md mx-auto">
            <DoughnutChart :chart-data="sentimentData" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { gsap } from 'gsap';
  import BarChart from '../components/BarChart.vue';
  import LineChart from '../components/LineChart.vue';
  import DoughnutChart from '../components/DoughnutChart.vue';
  
  const interactionFrequencyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'User Interactions',
      data: [120, 190, 150, 220, 180, 130, 200],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(147, 51, 234, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(74, 222, 128, 0.8)',
        'rgba(251, 191, 36, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(45, 212, 191, 0.8)',
      ],
      borderColor: [
        'rgba(59, 130, 246, 1)',
        'rgba(147, 51, 234, 1)',
        'rgba(236, 72, 153, 1)',
        'rgba(74, 222, 128, 1)',
        'rgba(251, 191, 36, 1)',
        'rgba(239, 68, 68, 1)',
        'rgba(45, 212, 191, 1)',
      ],
      borderWidth: 2,
      hoverBackgroundColor: 'rgba(255, 255, 255, 0.2)',
    }],
  };
  
  const responseTimeData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Average Response Time (ms)',
      data: [300, 250, 280, 320, 270, 290, 310],
      borderColor: 'rgba(236, 72, 153, 1)',
      backgroundColor: 'rgba(236, 72, 153, 0.3)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: 'rgba(255, 255, 255, 0.8)',
      pointBorderColor: 'rgba(236, 72, 153, 1)',
      pointHoverBackgroundColor: 'rgba(59, 130, 246, 1)',
      pointHoverBorderColor: 'rgba(255, 255, 255, 1)',
    }],
  };
  
  const sentimentData = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets:[{
      data: [60, 30, 10],
      backgroundColor: [
        'rgba(74, 222, 128, 0.8)',
        'rgba(251, 191, 36, 0.8)',
        'rgba(239, 68, 68, 0.8)',
      ],
      borderColor: [
        'rgba(74, 222, 128, 1)',
        'rgba(251, 191, 36, 1)',
        'rgba(239, 68, 68, 1)',
      ],
      borderWidth: 2,
      hoverBackgroundColor: [
        'rgba(74, 222, 128, 0.9)',
        'rgba(251, 191, 36, 0.9)',
        'rgba(239, 68, 68, 0.9)',
      ],
    }],
  };
  
  onMounted(() => {
    gsap.from('.animate-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });
  });
  </script>