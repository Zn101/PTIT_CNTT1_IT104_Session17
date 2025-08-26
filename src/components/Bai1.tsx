import React, {useState} from 'react'

export default function Bai1() {
  const [name, setName] = useState<string>("Nguyen A");
    return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
