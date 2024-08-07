import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import './RegisterActivity.css'; // Optional: for custom styling

const RegisterActivity = () => {
    const { user } = useContext(AuthContext);
    const [dateTime, setDateTime] = useState('');
    const [averageSpeed, setAverageSpeed] = useState('');
    const [duration, setDuration] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const formatDuration = (minutes) => {
        const hrs = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:00`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate input
        if (!dateTime || !averageSpeed || !duration) {
            setError('All fields are required');
            return;
        }

        const requestBody = {
            date: new Date(dateTime).toISOString(),
            averageSpeed: parseFloat(averageSpeed),
            duration: formatDuration(parseFloat(duration)),
            caloriesBurned: 0
        };

        console.log('Request Body:', requestBody); // Debug: log the request body

        try {
            const response = await fetch('http://localhost:5004/api/RunningActivities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Response Error:', errorData); // Debug: log the response error
                throw new Error(errorData.title || 'Failed to register activity');
            }

            const result = await response.json();
            console.log('Success:', result); // Debug: log the success message
            setSuccess('Activity registered successfully');
            setDateTime('');
            setAverageSpeed('');
            setDuration('');
            setError(null);
        } catch (err) {
            console.error('Catch Error:', err); // Debug: log the catch error
            setError(err.message);
            setSuccess(null);
        }
    };

    return (
        <div className="register-activity">
            <h2>Register Running Activity</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date and Time:</label>
                    <input
                        type="datetime-local"
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Average Speed (km/h):</label>
                    <input
                        type="number"
                        step="0.1"
                        value={averageSpeed}
                        onChange={(e) => setAverageSpeed(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Duration (minutes):</label>
                    <input
                        type="number"
                        step="0.1"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </form>
        </div>
    );
};

export default RegisterActivity;
