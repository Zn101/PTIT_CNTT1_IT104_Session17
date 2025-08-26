import React, { useState } from 'react';

export default function Toggle() {
  const [visibility, setVisibility] = useState<string>("visible");

  const handleChange = () => {
    setVisibility(visibility === "visible" ? "hidden" : "visible");
  };

  return (
    <div>
      <button 
        style={{ border: '1px solid gray', borderRadius: '5px'}} 
        onClick={handleChange}
      >
        {visibility === "visible" ? "An" : "Hien"}
      </button>    

      <header style={{ visibility: visibility}}>
        Tiêu đề văn bản
      </header>
    </div>
  );
}
