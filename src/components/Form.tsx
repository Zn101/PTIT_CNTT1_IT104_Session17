import React, { useState } from 'react';

export default function Form() {
  const [title, setTitle] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Nhap noi dung" 
        value={title}
        onChange={handleChange} 
      />
      <p>{title}</p>
    </div>
  );
}
