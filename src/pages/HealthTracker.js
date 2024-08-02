import React, { useState } from 'react';
import ActivityForm from '../components/Health/ActivityForm';
import ActivityList from '../components/Health/ActivityList';

const HealthTracker = () => {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <div className="container">
      <h2>Health Tracker</h2>
      <ActivityForm addActivity={addActivity} />
      <ActivityList activities={activities} />
    </div>
  );
};

export default HealthTracker;
