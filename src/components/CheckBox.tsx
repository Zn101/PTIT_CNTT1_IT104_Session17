import React, { useState } from 'react';

export default function CheckBox() {
  const [activities, setActivities] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setActivities([...activities, value]);
    } else {
      setActivities(activities.filter((activity) => activity !== value));
    }
  };

  return (
    <div>
      <p>So thich: {activities.join(", ")}</p>

      <label>
        <input 
          type="checkbox" 
          value="Di choi" 
          onChange={handleChange} 
          checked={activities.includes("Di choi")} 
        />
        Di choi
      </label><br />

      <label>
        <input 
          type="checkbox" 
          value="Code" 
          onChange={handleChange} 
          checked={activities.includes("Code")} 
        />
        Code
      </label><br />

      <label>
        <input 
          type="checkbox" 
          value="Boi loi" 
          onChange={handleChange} 
          checked={activities.includes("Boi loi")} 
        />
        Boi loi
      </label><br />

      <label>
        <input 
          type="checkbox" 
          value="Nhay day" 
          onChange={handleChange} 
          checked={activities.includes("Nhay day")} 
        />
        Nhay day
      </label><br />
    </div>
  );
}

