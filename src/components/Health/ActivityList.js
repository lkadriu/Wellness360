import React from 'react';

const ActivityList = ({ activities }) => {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          {activity.name} - {activity.date.toLocaleString()}
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
