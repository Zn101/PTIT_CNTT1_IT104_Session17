import React, { useState } from 'react';

export default function CountText() {
  let [count, setCount] = useState<number>(0);
  const handleChange = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <textarea placeholder='Nhap noi dung' onChange={handleChange}/>
      <p>So ky tu: {count}</p>
    </div>
  );
}
