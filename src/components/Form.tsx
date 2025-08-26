import React, { useState } from 'react';

export default function Form() {
  let [title, setTitle] = useState<string>("");
  const handleChange = () => {
    setTitle(title)
  }

  return (
    <div>
      <input type="text" placeholder='Nhap noi dung' onChange={handleChange}/>
      <p>{title}</p>
    </div>
  );
}
