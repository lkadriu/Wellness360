import React, { useState, useEffect } from 'react';
import './ViewActivities.css'; // Optional: for custom styling

const ViewActivities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await fetch('http://localhost:5004/api/RunningActivities');
                if (!response.ok) {
                    throw new Error('Failed to fetch activities');
                }
                const data = await response.json();
                setActivities(data);
            } catch (err) {
                console.error('Failed to fetch activities:', err);
            }
        };

        fetchActivities();
    }, []);

    const formatDuration = (duration) => {
        const parts = duration.split(':');
        const hours = parseInt(parts[0], 10);
        const minutes = parseInt(parts[1], 10);
        return (hours * 60 + minutes) + ' min';
    };

    return (
        <div className="view-activities">
            <h2>Your Runs</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date and Time</th>
                        <th>Average Speed (km/h)</th>
                        <th>Duration (minutes)</th>
                        <th>Calories Burned</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map(activity => (
                        <tr key={activity.id}>
                            <td>{new Date(activity.date).toLocaleString()}</td>
                            <td>{activity.averageSpeed}</td>
                            <td>{formatDuration(activity.duration)}</td>
                            <td>{activity.caloriesBurned.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewActivities;
