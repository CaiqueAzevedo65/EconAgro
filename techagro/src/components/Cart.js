import React from 'react';
import { useCart } from '../context/CartContext';
import '../Styles/Cart.css';

function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
    return sum + (price * item.quantity);
  }, 0);

  return (
    <div className="cart-container">
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.name} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.name, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.name, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button 
                  className="remove-button"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: R$ {total.toFixed(2)}</h3>
            <button className="clear-cart-button" onClick={clearCart}>
              Limpar Carrinho
            </button>
            <button className="checkout-button">
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart; 