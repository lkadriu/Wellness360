import React, { useState } from 'react';
import './DoctorsAdvices.css';

const DoctorsAdvices = () => {
  const [selectedCategory, setSelectedCategory] = useState('food');

  const advices = {
    food: [
      'Eat a variety of foods to get all the nutrients you need.',
      'Incorporate more fruits and vegetables into your diet.',
      'Limit your intake of sugar and saturated fats.',
      'Stay hydrated by drinking plenty of water.',
      'Avoid processed foods and opt for whole foods.',
    ],
    exercise: [
      'Exercise regularly to maintain a healthy weight.',
      'Include both cardio and strength training in your routine.',
      'Always warm up before exercising and cool down afterward.',
      'Try to get at least 150 minutes of moderate exercise per week.',
      'Stay consistent with your workouts for long-term benefits.',
    ],
    activities: [
      'Take breaks and stretch regularly if you have a sedentary job.',
      'Engage in hobbies that keep you active, like gardening or dancing.',
      'Make time for relaxation and stress-relieving activities.',
      'Get outdoors for activities like hiking or biking.',
      'Incorporate mindfulness practices into your daily routine.',
    ],
    mentalHealth: [
      'Prioritize getting enough sleep each night.',
      'Practice mindfulness and meditation to reduce stress.',
      'Stay connected with friends and family for social support.',
      'Engage in activities that bring you joy and fulfillment.',
      'Seek professional help if you experience persistent mental health issues.',
    ],
  };

  const categories = {
    food: 'Food Advice',
    exercise: 'Exercise Advice',
    activities: 'Activity Advice',
    mentalHealth: 'Mental Health Advice',
  };

  return (
    <div className="doctors-advices">
      <h1>Doctors' Advices</h1>
      <div className="categories">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {categories[category]}
          </button>
        ))}
      </div>
      <div className="advices">
        <h2>{categories[selectedCategory]}</h2>
        <ul>
          {advices[selectedCategory].map((advice, index) => (
            <li key={index}>{advice}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorsAdvices;
