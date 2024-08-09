import React, { useEffect, useState } from 'react';
import './HealthDataList.css';

const HealthDataList = () => {
    const userId = "user123"; // Përdorni ID-në e saktë të përdoruesit këtu
    const [healthDataList, setHealthDataList] = useState([]);

    useEffect(() => {
        const fetchHealthData = async () => {
            try {
                const response = await fetch(`http://localhost:5004/api/HealthData/${userId}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched health data:', data); // Log të dhënat për kontroll
                    setHealthDataList(data);
                } else {
                    console.error('Failed to fetch health data');
                }
            } catch (error) {
                console.error('Error fetching health data:', error);
            }
        };

        fetchHealthData();
    }, [userId]);

    // Funksioni për formatimin e datës
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit' 
        });
    };

    return (
        <div className="health-data-list">
            <h2>Your Health Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Weight (kg)</th>
                        <th>Blood Pressure</th>
                        <th>Heart Rate (bpm)</th>
                        <th>Sleep Hours</th>
                        <th>Water Intake (liters)</th>
                        <th>Daily Mood</th>
                    </tr>
                </thead>
                <tbody>
                    {healthDataList.map((data) => (
                        <tr key={data.id}> {/* Supozoni që `id` është një fushë unike */}
                            <td>{formatDate(data.date)}</td> {/* Formatoni datën */}
                            <td>{data.weight}</td>
                            <td>{data.bloodPressure}</td>
                            <td>{data.heartRate}</td>
                            <td>{data.sleepHours}</td>
                            <td>{data.waterIntake}</td>
                            <td>{data.dailyMood}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HealthDataList;
