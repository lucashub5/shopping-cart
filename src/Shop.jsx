import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import HomeSection from './HomeSection';
import ShopSection from './ShopSection';
import DefaultProfile from "./DefaultProfile";

const Shop = () => {
  const [dataFromCards, setDataFromCards] = useState([]);
  const { name } = useParams();

  const handleQuantityChange = (updatedData) => {
    const existingIndex = dataFromCards.findIndex(item => item.id === updatedData.id);
    
    if (existingIndex !== -1) {
      const newData = [...dataFromCards];
      newData[existingIndex] = updatedData;
      setDataFromCards(newData);
    } else {
      setDataFromCards(prevData => [...prevData, updatedData]);
    }
  };

    return (
      <>
        <Header
          onQuantityChange={handleQuantityChange}
          dataFromCards={dataFromCards}
        />
        {name === "home" ? (
          <HomeSection />
        ) : name === "shop" ? (
          <ShopSection 
            onQuantityChange={handleQuantityChange}
            dataFromCards={dataFromCards}
          />
        ) : (
          <DefaultProfile />
        )}
        <Footer/>
      </>
    )
}

export default Shop;