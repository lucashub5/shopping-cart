const Card = ({id, photo, title, price, quantity, onQuantityChange}) => {

    const handleDecrement = () => {
        if (quantity > 0) {
            onQuantityChange({ id, photo, title, price, quantity: quantity - 1 });
        }
      };
      
      const handleIncrement = () => {
        onQuantityChange({ id, photo, title, price, quantity: quantity + 1 });
      };

    return (
        <li className='main-card'>
            <div className="img-card">
                <img src={photo} alt='' />
            </div>
            <div className="card-texts">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <h4 className="card-price">${price}</h4>
                <div className="card-quantity">
                    <button onClick={handleDecrement}>-</button>
                    <h4>{quantity}</h4>
                    <button onClick={handleIncrement}>+</button>
                </div>
            </div>
        </li>
    )
}

export default Card;