import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card'

function ShopSection({ onQuantityChange, dataFromCards }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <ul className='shop-list'>
        {products.map(product => {
          const matchingProduct = dataFromCards.find(item => item.id === product.id);
          const quantityData = matchingProduct ? matchingProduct.quantity : 0;
          return (
            <Card
              key={product.id}
              id={product.id}
              photo={product.image}
              title={product.title}
              price={product.price}
              quantity={quantityData}
              onQuantityChange={onQuantityChange}
            />
          );
        })}
      </ul>
    </main>
  )
}

export default ShopSection;
