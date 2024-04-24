import DeleteIcon from './assets/delete_icon.svg'

const Card = ({id, photo, title, price, quantity, onQuantityChange}) => {

    const handleDecrement = () => {
        if (quantity > 0) {
            onQuantityChange({ id, photo, title, price, quantity: quantity - 1 });
        }
    };
      
    const handleIncrement = () => {
        onQuantityChange({ id, photo, title, price, quantity: quantity + 1 });
    };

    const handleDeleted = () => {
        onQuantityChange({ id, photo, title, price, quantity: 0 });
    } 

    return (
        <li className='mycart-card' key={id}>
            <div className="img-mycart">
                <img src={photo} alt='' />
            </div>
            <div className="mycart-texts">
                <h3 className='mycart-title'>{title}</h3>
                <h4 className="mycart-price">${price} per unit</h4>
                <div className="mycart-quantity">
                    <button onClick={handleDecrement}>-</button>
                    <h4>{quantity}</h4>
                    <button onClick={handleIncrement}>+</button>
                </div>
            </div>
            <h4 className="mycart-price">${(quantity * price).toFixed(2)}</h4>
            <button className='mycart-delete' onClick={handleDeleted}>
                <img src={DeleteIcon} alt='' />
            </button>
        </li>
    )
}

export default Card;