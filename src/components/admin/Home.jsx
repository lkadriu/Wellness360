import React, { useState, useEffect } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const Home = () => {
  const [userCount, setUserCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [deletedUserCount, setDeletedUserCount] = useState(0);
  const [foodNameCount, setFoodCount] = useState(0);
  const [data, setData] = useState([
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ]);

  useEffect(() => {
    // Fetch user count
    fetch('http://localhost:5004/api/Account/count')
      .then(response => response.json())
      .then(data => setUserCount(data))
      .catch(error => console.error('Error fetching user count:', error));

    // Fetch category count
    fetch('http://localhost:5004/api/Kategoria/count')
      .then(response => response.json())
      .then(data => setCategoryCount(data))
      .catch(error => console.error('Error fetching category count:', error));

    // Fetch foods count
      fetch('http://localhost:5004/api/EmriUshqimit/count')
      .then(response => response.json())
      .then(data => setFoodCount(data))
      .catch(error => console.error('Error fetching foods count:', error));

    // Fetch deleted user count
    fetch('http://localhost:5004/api/Account/deletedcount')
      .then(response => response.json())
      .then(data => setDeletedUserCount(data))
      .catch(error => console.error('Error fetching deleted user count:', error));
  }, []);

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Foods</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>{foodNameCount}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Categories</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>{categoryCount}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Users</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{userCount}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Deleted Accounts</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>{deletedUserCount}</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
