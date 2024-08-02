import React, { useState } from 'react';

const ActivityForm = ({ addActivity }) => {
  const [activity, setActivity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activity) return;
    const newActivity = {
      name: activity,
      id: Date.now(),
      date: new Date()
    };
    addActivity(newActivity);
    setActivity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        placeholder="Enter activity"
      />
      <button type="submit">Add Activity</button>
    </form>
  );
};

export default ActivityForm;
