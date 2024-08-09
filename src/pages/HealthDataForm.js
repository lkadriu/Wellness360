import React, { useState } from 'react';
import './HealthDataForm.css';

const HealthDataForm = () => {
    const userId = "user123"; // Zëvendësoje me ID-në e saktë të përdoruesit

    const [formData, setFormData] = useState({
        date: '',
        weight: '',
        bloodPressure: '',
        heartRate: '',
        sleepHours: '',
        waterIntake: '',
        dailyMood: 'Happy',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const healthData = {
            ...formData,
            userId: userId
        };

        try {
            const response = await fetch('http://localhost:5004/api/HealthData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(healthData),
            });

            if (response.ok) {
                console.log('Data submitted successfully');
                setFormData({
                    date: '',
                    weight: '',
                    bloodPressure: '',
                    heartRate: '',
                    sleepHours: '',
                    waterIntake: '',
                    dailyMood: 'Happy',
                });
            } else {
                console.error('Error submitting data');
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div className="health-data-form">
            <h2>Health Data Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date:</label>
                    <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div>
                    <label>Weight (kg):</label>
                    <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
                </div>
                <div>
                    <label>Blood Pressure:</label>
                    <input type="text" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} required />
                </div>
                <div>
                    <label>Heart Rate (bpm):</label>
                    <input type="number" name="heartRate" value={formData.heartRate} onChange={handleChange} required />
                </div>
                <div>
                    <label>Sleep Hours:</label>
                    <input type="number" name="sleepHours" value={formData.sleepHours} onChange={handleChange} required />
                </div>
                <div>
                    <label>Water Intake (liters):</label>
                    <input type="number" name="waterIntake" value={formData.waterIntake} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="dailyMood">Daily Mood:</label>
                    <select name="dailyMood" value={formData.dailyMood} onChange={handleChange}>
                        <option value="Happy">Happy</option>
                        <option value="Sad">Sad</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Stressed">Stressed</option>
                        <option value="Excited">Excited</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default HealthDataForm;
