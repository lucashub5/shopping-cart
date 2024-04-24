import Card from './Card_MyCart';

const MyCart = ({className, products, onQuantityChange}) => {
    const filteredProducts = products.filter(product => product.quantity !== 0);
    const total = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    return (
        <section className={className}>
            <h2>Shopping Bag</h2>
            <hr></hr>
            <ul className="mycart-list">
                {filteredProducts.map(product => (
                    <Card
                        key={product.id}
                        id={product.id}
                        photo={product.photo}
                        title={product.title}
                        price={product.price}
                        quantity={product.quantity}
                        onQuantityChange={onQuantityChange}
                    />
                ))}
            </ul>
            <hr></hr>
            <div className='mycart-total'>
                <h2>Total</h2>
                <h2>${total.toFixed(2)}</h2>
            </div>
        </section>
    )
}

export default MyCart;