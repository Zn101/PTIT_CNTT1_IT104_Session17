import React, { useState } from 'react';

export default function CountText() {
  const [count, setCount] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
  };

  return (
    <div>
      <textarea 
        placeholder='Nhap noi dung' 
        onChange={handleChange}
      />
      <p>So ky tu: {count}</p>
    </div>
  );
}
