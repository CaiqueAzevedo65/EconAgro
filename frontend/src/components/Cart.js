import React from 'react';
import { useCart } from '../context/CartContext';
import { useCartLogic } from '../hooks/useCartLogic';
import '../Styles/Cart.css';

function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const { shipping, setShipping, promoCode, setPromoCode, calculateTotal } = useCartLogic();
  
  const { subtotal, total } = calculateTotal(cart);

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
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="cart-item-image" 
                  loading="lazy"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>R$ {Number(item.price).toFixed(2).replace('.', ',')}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                      aria-label={`Diminuir quantidade de ${item.name}`}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                      aria-label={`Aumentar quantidade de ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  className="remove-button"
                  onClick={() => removeFromCart(item.name)}
                  aria-label={`Remover ${item.name} do carrinho`}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="shipping-options">
              <label htmlFor="shipping">Frete:</label>
              <select
                id="shipping"
                value={shipping}
                onChange={(e) => setShipping(Number(e.target.value))}
              >
                <option value="5">Padrão - R$ 5,00</option>
                <option value="10">Expresso - R$ 10,00</option>
              </select>
            </div>

            <div className="promo-code">
              <label htmlFor="promoCode">Código Promocional:</label>
              <input
                id="promoCode"
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Digite o código"
              />
            </div>

            <div className="totals">
              <div className="subtotal">
                <span>Subtotal:</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="shipping-total">
                <span>Frete:</span>
                <span>R$ {shipping.toFixed(2)}</span>
              </div>
              <div className="total">
                <span>Total:</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              className="clear-cart-button" 
              onClick={clearCart}
            >
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