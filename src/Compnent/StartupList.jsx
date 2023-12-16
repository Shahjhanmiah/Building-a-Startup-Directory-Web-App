// src/StartupList.js
import  { useState, useEffect, useContext } from 'react';
import { MainContext } from './Context/AuthContext';

const StartupList = () => {
  const {startups, setStartups} = useContext(MainContext)
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch(`https://web-app-server-e6dx.onrender.com/Startup?filter=${filter}`)
      .then(response => response.json())
      .then(data => setStartups(data));
  }, [filter]);

  // const handleFilterChange = (event) => {
  //   console.log(event);
  //   setFilter(event.target.value);
  // };

  console.log({filter});

  const filteredStartups = startups;

  return (
    <div className='font-semibold'>
      <label htmlFor="industryFilter">Filter by Industry:</label>
      <select id="industryFilter" onChange={(e)=>setFilter(e.target.value)} className="p-2 mx-2">
        <option value="">All Industries</option>
        <option value="Technology">Technology</option>
        <option value="eCommerce">E-Commerce</option>
        <option value="Consumer Internet">Consumer Internet</option>
        {/* Add more options based on your startup domains */}
      </select>

      <ul className="list-disc mt-4">
        {filteredStartups?.map((startup) => (
          <li key={startup?._id}>{startup?.StartupName} - {startup?.Industry}</li>
        ))}
      </ul>
    </div>
  );
};

export default StartupList;
