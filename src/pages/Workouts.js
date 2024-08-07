// src/pages/Workouts.js
import React, { useState } from 'react';
import './Workouts.css'; // Optional: for custom styling

const workoutsData = [
    {
        category: 'Chest',
        exercises: [
            { name: 'Push-ups', videoUrl: 'https://www.youtube.com/embed/IODxDxX7oi4' },
            { name: 'Bench Press', videoUrl: 'https://www.youtube.com/embed/rT7DgCr-3pg' },
            { name: 'Chest Fly', videoUrl: 'https://www.youtube.com/embed/eozdVDA78K0' },
            { name: 'Chest Dips', videoUrl: 'https://www.youtube.com/embed/dZh4Jk5qeBs' },
            { name: 'Cable Crossover', videoUrl: 'https://www.youtube.com/embed/taI4XduLpTk' },
            { name: 'Incline Dumbbell Press', videoUrl: 'https://www.youtube.com/embed/8iPEnn-ltC8' },
        ],
    },
    {
        category: 'Biceps',
        exercises: [
            { name: 'Bicep Curls', videoUrl: 'https://www.youtube.com/embed/ykJmrZ5v0Oo' },
            { name: 'Hammer Curls', videoUrl: 'https://www.youtube.com/embed/zC3nLlEvin4' },
            { name: 'Concentration Curls', videoUrl: 'https://www.youtube.com/embed/dDI8xjEJUcc' },
            { name: 'Preacher Curls', videoUrl: 'https://www.youtube.com/embed/sAq_ocpRh_I' },
            { name: 'Cable Curls', videoUrl: 'https://www.youtube.com/embed/KTtAL0UMQ4c' },
            { name: 'Incline Dumbbell Curls', videoUrl: 'https://www.youtube.com/embed/soxrZlIl35U' },
        ],
    },
    {
        category: 'Triceps',
        exercises: [
            { name: 'Tricep Dips', videoUrl: 'https://www.youtube.com/embed/6kALZikXxLc' },
            { name: 'Skull Crushers', videoUrl: 'https://www.youtube.com/embed/d_KZxkY_0cM' },
            { name: 'Tricep Pushdown', videoUrl: 'https://www.youtube.com/embed/2-LAMcpzODU' },
            { name: 'Overhead Tricep Extension', videoUrl: 'https://www.youtube.com/embed/YbX7Wd8jQ-Q' },
            { name: 'Close-Grip Bench Press', videoUrl: 'https://www.youtube.com/embed/4qmaH5_Z3YQ' },
            { name: 'Tricep Kickbacks', videoUrl: 'https://www.youtube.com/embed/ZO81bExngMI' },
        ],
    },
    {
        category: 'Back',
        exercises: [
            { name: 'Pull-ups', videoUrl: 'https://www.youtube.com/embed/eGo4IYlbE5g' },
            { name: 'Deadlifts', videoUrl: 'https://www.youtube.com/embed/op9kVnSso6Q' },
            { name: 'Lat Pulldowns', videoUrl: 'https://www.youtube.com/embed/CAwf7n6Luuc' },
            { name: 'Bent Over Rows', videoUrl: 'https://www.youtube.com/embed/kBWAon7ItDw' },
            { name: 'T-Bar Rows', videoUrl: 'https://www.youtube.com/embed/kBWAon7ItDw' },
            { name: 'Seated Rows', videoUrl: 'https://www.youtube.com/embed/GZbfZ033f74' },
        ],
    },
    {
        category: 'Shoulders',
        exercises: [
            { name: 'Shoulder Press', videoUrl: 'https://www.youtube.com/embed/B-aVuyhvLHU' },
            { name: 'Lateral Raises', videoUrl: 'https://www.youtube.com/embed/3VcKaXpzqRo' },
            { name: 'Front Raises', videoUrl: 'https://www.youtube.com/embed/yZrop1pCTSI' },
            { name: 'Reverse Flyes', videoUrl: 'https://www.youtube.com/embed/xt42AVs7V_w' },
            { name: 'Upright Rows', videoUrl: 'https://www.youtube.com/embed/kt9tGJ3njM8' },
            { name: 'Arnold Press', videoUrl: 'https://www.youtube.com/embed/6Z15_WdXmVw' },
        ],
    },
    {
        category: 'Abs',
        exercises: [
            { name: 'Crunches', videoUrl: 'https://www.youtube.com/embed/MKmrqcoCZ-M' },
            { name: 'Leg Raises', videoUrl: 'https://www.youtube.com/embed/JB2oyawG9KI' },
            { name: 'Plank', videoUrl: 'https://www.youtube.com/embed/pSHjTRCQxIw' },
            { name: 'Russian Twists', videoUrl: 'https://www.youtube.com/embed/wkD8rjkodUI' },
            { name: 'Bicycle Crunches', videoUrl: 'https://www.youtube.com/embed/Iwyvozckjak' },
            { name: 'Mountain Climbers', videoUrl: 'https://www.youtube.com/embed/cnyTQDSE884' },
        ],
    },
    {
        category: 'Legs',
        exercises: [
            { name: 'Squats', videoUrl: 'https://www.youtube.com/embed/aclHkVaku9U' },
            { name: 'Lunges', videoUrl: 'https://www.youtube.com/embed/QOVaHwm-Q6U' },
            { name: 'Leg Press', videoUrl: 'https://www.youtube.com/embed/IZxyjW7MPJQ' },
            { name: 'Leg Curls', videoUrl: 'https://www.youtube.com/embed/3YvfRx31xDE' },
            { name: 'Calf Raises', videoUrl: 'https://www.youtube.com/embed/-M4-G8p8fmc' },
            { name: 'Leg Extensions', videoUrl: 'https://www.youtube.com/embed/YyvSfVjQeL0' },
        ],
    },
];

const Workouts = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedExercise, setSelectedExercise] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedExercise(null);
    };

    const handleExerciseClick = (exercise) => {
        setSelectedExercise(exercise);
    };

    return (
        <div className="workouts">
            <h2>Workouts</h2>
            {selectedCategory ? (
                selectedExercise ? (
                    <div>
                        <button onClick={() => setSelectedExercise(null)}>Back to {selectedCategory.category} Exercises</button>
                        <h3>{selectedExercise.name}</h3>
                        <div className="video-container">
                            <iframe
                                width="560"
                                height="315"
                                src={selectedExercise.videoUrl}
                                title={selectedExercise.name}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ) : (
                    <div>
                        <button onClick={() => setSelectedCategory(null)}>Back to Categories</button>
                        <h3>{selectedCategory.category} Exercises</h3>
                        <ul>
                            {selectedCategory.exercises.map((exercise, index) => (
                                <li key={index} onClick={() => handleExerciseClick(exercise)}>
                                    {exercise.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            ) : (
                <div>
                    <h3>Categories</h3>
                    <ul>
                        {workoutsData.map((category, index) => (
                            <li key={index} onClick={() => handleCategoryClick(category)}>
                                {category.category}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Workouts;
