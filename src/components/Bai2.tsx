import React, {useState} from 'react'

interface Product {
  id: number,
  name: string,
  price: string,
  quantity: number
}

export default function Bai2() {
  const [product, setProduct] = useState<Product>({
    id: 1,
    name: "Coca cola",
    price: "1000$",
    quantity: 10
  });
    return (
    <div>
      <h1>Thong tin san pham</h1>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  )
}
