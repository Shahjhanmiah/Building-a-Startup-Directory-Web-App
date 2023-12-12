// StartupList.js
import  { useState } from 'react';

const startupData = [
  { name: 'Tech Startup 1', industry: 'tech' },
  { name: 'Health Startup 1', industry: 'health' },
  { name: 'Finance Startup 1', industry: 'finance' },
  // Add more startup data as needed
];

const StartupList = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredStartups = filter === 'all' ? startupData : startupData.filter(startup => startup.industry === filter);

  return (
    <div>
      <label htmlFor="industryFilter">Filter by Industry:</label>
      <select id="industryFilter" onChange={handleFilterChange} className="p-2 mx-2">
        <option value="all">All Industries</option>
        <option value="tech">Technology</option>
        <option value="health">Healthcare</option>
        <option value="finance">Finance</option>
        {/* Add more options based on your startup domains */}
      </select>

      <ul className="list-disc mt-4">
        {filteredStartups.map((startup, index) => (
          <li key={index}>{startup.name} - {startup.industry}</li>
        ))}
      </ul>
    </div>
  );
};

export default StartupList;
