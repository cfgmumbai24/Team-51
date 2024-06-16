import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SchoolStats = ({ students, ratings }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Check if there's an existing chart instance
    if (chartInstanceRef.current) {
      // Destroy the existing chart instance to release the canvas
      chartInstanceRef.current.destroy();
    }

    const averageStats = {
      ListeningSkills: calculateAverage('ListeningSkills'),
      AttentionSpan: calculateAverage('AttentionSpan'),
      Curiosity: calculateAverage('Curiosity'),
      ReflectingAbility: calculateAverage('ReflectingAbility'),
    };

    function calculateAverage(skill) {
      const total = ratings.reduce((acc, curr) => acc + curr[skill], 0);
      return ratings.length > 0 ? (total / ratings.length).toFixed(2) : 0;
    }

    const chartData = {
      labels: ['Listening Skills', 'Attention Span', 'Curiosity', 'Reflecting Ability'],
      datasets: [{
        label: 'Average Ratings',
        backgroundColor: '#3182CE',
        borderColor: '#3182CE',
        borderWidth: 1,
        hoverBackgroundColor: '#63B3ED',
        hoverBorderColor: '#63B3ED',
        data: [averageStats.ListeningSkills, averageStats.AttentionSpan, averageStats.Curiosity, averageStats.ReflectingAbility],
      }],
    };

    // Create new chart instance
    const newChartInstance = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw.toFixed(2)}`,
            },
          },
        },
      },
    });

    // Store the chart instance reference for future updates
    chartInstanceRef.current = newChartInstance;

    // Clean up function to destroy chart instance when component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [ratings]);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">School Average Ratings</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <canvas id="schoolChart" ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default SchoolStats;
