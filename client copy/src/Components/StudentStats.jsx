import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const StudentStats = ({ student, ratings, isActive, onClick }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (isActive && chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            const averageStats = {
                ListeningSkills: calculateAverage('ListeningSkills'),
                AttentionSpan: calculateAverage('AttentionSpan'),
                Curiosity: calculateAverage('Curiosity'),
                ReflectingAbility: calculateAverage('ReflectingAbility'),
            };

            function calculateAverage(skill) {
                const studentRatings = ratings.filter(r => r.Student === student._id);
                const total = studentRatings.reduce((acc, curr) => acc + curr[skill], 0);
                return studentRatings.length > 0 ? (total / studentRatings.length).toFixed(2) : 0;
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
                    data: [
                        averageStats.ListeningSkills,
                        averageStats.AttentionSpan,
                        averageStats.Curiosity,
                        averageStats.ReflectingAbility,
                    ],
                }],
            };

            // Check if chart instance already exists, destroy it first
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

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
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                precision: 0,
                            },
                        },
                    },
                },
            });

            // Store the chart instance reference for future updates
            chartInstanceRef.current = newChartInstance;
        } else if (!isActive && chartInstanceRef.current) {
            // If chart instance exists and isActive becomes false, destroy the chart
            chartInstanceRef.current.destroy();
            chartInstanceRef.current = null;
        }
    }, [isActive, ratings, student]);

    const handleClose = () => {
        onClick(student._id); // Toggle isActive state to hide the chart
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="relative">
                <div className="card border border-gray-300 shadow-lg rounded-lg">
                    <div className="card-body p-4">
                        <h5 className="card-title text-xl font-semibold">{student.name}</h5>
                        <p className="card-text text-gray-600 mb-2">Total Evaluations: {ratings.filter(r => r.Student === student._id).length}</p>
                        <h6 className="card-subtitle text-sm text-gray-500 mb-2">Average Ratings</h6>
                        <button
                            className={`btn ${isActive ? 'btn-red' : 'btn-blue'} mt-3 px-4 py-2 rounded-md shadow-sm focus:outline-none`}
                            onClick={() => onClick(student._id)}
                        >
                            {isActive ? 'Hide Chart' : 'Show Chart'}
                        </button>
                    </div>
                </div>

                {/* Modal for Chart */}
                {isActive && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                            <div className="flex justify-end">
                                <button
                                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                    onClick={handleClose}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h2 className="text-xl font-bold mb-4">{student.name}'s Average Ratings</h2>
                            <div className="max-w-lg w-full">
                                <canvas id={`studentChart-${student._id}`} ref={chartRef}></canvas>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentStats;
