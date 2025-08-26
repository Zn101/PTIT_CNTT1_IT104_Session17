import React, { useState } from 'react';

export default function Select() {
  const [country, setCountry] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <p>Thanh pho: {country}</p>
      <select value={country} onChange={handleChange}>
        <option value="">-- Chon thanh pho --</option>
        <option value="Ha Noi">Ha noi</option>
        <option value="Da Nang">Da nang</option>
        <option value="Ho Chi Minh">Ho Chi Minh</option>
      </select>
    </div>
  );
}
