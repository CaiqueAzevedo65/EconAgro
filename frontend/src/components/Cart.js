import React from 'react';
import { useCart } from '../context/CartContext';
import { useCartLogic } from '../hooks/useCartLogic';
import { Container, Row, Col, Card, Button, Form, Image, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMinus, faPlus, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Cart.css';

// Imagem de fallback
const FALLBACK_IMAGE = 'https://placehold.co/100x100?text=Sem+Imagem';

function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const { shipping, setShipping, promoCode, setPromoCode, calculateTotal } = useCartLogic();
  
  const { subtotal, total } = calculateTotal(cart);

  const handleImageError = (e) => {
    e.target.src = FALLBACK_IMAGE;
    e.target.onerror = null;
  };

  return (
    <Container className="py-5 cart-page">
      <h2 className="mb-4 fw-bold text-dark">
        <FontAwesomeIcon icon={faShoppingBag} className="me-2 text-success" />
        Seu Carrinho
      </h2>

      {cart.length === 0 ? (
        <Card className="text-center p-5 shadow-sm empty-cart">
          <Card.Body>
            <h4 className="text-muted">Seu carrinho está vazio</h4>
            <p className="mb-4">Adicione alguns produtos deliciosos para começar!</p>
            <Button variant="primary" href="/" className="custom-btn-primary">
              Voltar para a Loja
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Row>
          <Col lg={8}>
            <div className="cart-items mb-4">
              {cart.map((item) => (
                <Card key={item.name} className="mb-3 shadow-sm border-0 cart-item-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col md={3} xs={12} className="text-center mb-3 mb-md-0">
                        <Image 
                          src={item.img || FALLBACK_IMAGE} 
                          alt={item.name} 
                          fluid 
                          rounded 
                          className="cart-item-image"
                          onError={handleImageError}
                        />
                      </Col>
                      <Col md={5} xs={12} className="mb-3 mb-md-0">
                        <h5 className="fw-bold mb-1">{item.name}</h5>
                        <p className="text-muted mb-0">R$ {Number(item.price).toFixed(2).replace('.', ',')}</p>
                      </Col>
                      <Col md={4} xs={12} className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center quantity-control">
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            className="rounded-circle p-0"
                            style={{ width: '30px', height: '30px' }}
                          >
                            <FontAwesomeIcon icon={faMinus} size="xs" />
                          </Button>
                          <span className="mx-3 fw-bold">{item.quantity}</span>
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="rounded-circle p-0"
                            style={{ width: '30px', height: '30px' }}
                          >
                            <FontAwesomeIcon icon={faPlus} size="xs" />
                          </Button>
                        </div>
                        <Button 
                          variant="outline-danger" 
                          size="sm"
                          onClick={() => removeFromCart(item.name)}
                          className="ms-3 rounded-circle p-0"
                          style={{ width: '30px', height: '30px' }}
                          title="Remover item"
                        >
                          <FontAwesomeIcon icon={faTrash} size="xs" />
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </div>
            
            <div className="d-flex justify-content-end mb-4">
               <Button variant="outline-danger" onClick={clearCart} size="sm">
                 Limpar Carrinho
               </Button>
            </div>
          </Col>

          <Col lg={4}>
            <Card className="shadow-sm border-0 bg-light cart-summary-card">
              <Card.Body className="p-4">
                <h5 className="fw-bold mb-4">Resumo do Pedido</h5>
                
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold text-muted small">FRETE</Form.Label>
                  <Form.Select 
                    value={shipping} 
                    onChange={(e) => setShipping(Number(e.target.value))}
                    className="form-select-custom"
                  >
                    <option value="5">Padrão - R$ 5,00</option>
                    <option value="10">Expresso - R$ 10,00</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold text-muted small">CÓDIGO PROMOCIONAL</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Digite o código"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="form-input-custom"
                    />
                    <Button variant="outline-secondary">Aplicar</Button>
                  </InputGroup>
                </Form.Group>

                <hr className="my-4" />

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Subtotal</span>
                  <span className="fw-bold">R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Frete</span>
                  <span className="fw-bold">R$ {shipping.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-4 total-row">
                  <span className="fs-5 fw-bold">Total</span>
                  <span className="fs-5 fw-bold text-success">R$ {total.toFixed(2)}</span>
                </div>

                <Button variant="success" className="w-100 btn-lg fw-bold custom-btn-primary text-white">
                  Finalizar Compra
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Cart;