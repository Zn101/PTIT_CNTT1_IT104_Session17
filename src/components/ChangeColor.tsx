import React, {useState} from 'react'

export default function ChangeColor() {
  let [color, setColor] = useState<string>("black");
  const handleChange = () => {
    setColor(color= "red")
  }
    return (
    <div>
      <header style={{color: color}}>Tieu de van ban</header><br /><br />
      <button style={{border: '1px solid gray', borderRadius: '5px'}} onClick={handleChange}>Thay doi mau</button>    
    </div>
  )
}
