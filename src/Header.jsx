import BagIcon from './assets/shopping_bag_icon.svg'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import MyCart from './MyCart';


const Header = ({ dataFromCards, onQuantityChange }) => {
    const [quantityShop, setQuantityShop] = useState(0);
    const [myCartToggle, setMyCartToggle] = useState(false);

    useEffect(() => {
        if (dataFromCards) {
            const totalQuantity = dataFromCards.reduce((total, item) => total + item.quantity, 0);
            setQuantityShop(totalQuantity);
        }
    }, [dataFromCards]);

    return(
        <header>
            <h1>Shopping Cart</h1>
            <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
            </nav>
            <button className='header-shop-btn' onClick={() => {setMyCartToggle(!myCartToggle)}}>
            <p>{quantityShop}</p>
            <img src={BagIcon} alt="shopping cart icon" />
            </button>
            <MyCart 
                className={`my-cart ${myCartToggle ? 'open' : ''}`}
                products={dataFromCards}
                onQuantityChange={onQuantityChange}
            />
        </header>
    )
}

export default Header;