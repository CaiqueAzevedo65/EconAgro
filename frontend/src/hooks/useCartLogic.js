import { useState, useCallback } from 'react';

export const useCartLogic = () => {
  const [shipping, setShipping] = useState(5);
  const [promoCode, setPromoCode] = useState('');

  const calculateTotal = useCallback((cart) => {
    const subtotal = cart.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
      return sum + (price * item.quantity);
    }, 0);
    
    return {
      subtotal,
      shipping,
      total: subtotal + shipping
    };
  }, [shipping]);

  return {
    shipping,
    setShipping,
    promoCode,
    setPromoCode,
    calculateTotal
  };
};