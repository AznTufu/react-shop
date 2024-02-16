import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    padding: 1rem 0;
`
const StyledImg = styled.img`
    width: 100px;
    height: 90px;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 180px;
`
const TextContent = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin: 0;
`
const StyledButton = styled.button`
  color: red;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  background-color: white;
  border: none;
  padding: 0;
  text-align: start;
`;
const QuantityContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 16px;
  min-width: 100px;
  width: max-content;
`;
const QuantityText = styled.span`
  font-size: 24px;
`;
const QuantityButton = styled.button`
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-size: 32px;
  background-color: white;
  border: none;
  padding: 0;
  text-align: start;
`;

export default function BasketProduct({ product }) {
  const { removeFromBasket, updateQuantity, products } = useContext(StoreContext);
  const basketProduct = products.find(p => p.id === product.id);
  const amount = basketProduct ? basketProduct.amount : 0;

  const handleRemove = () => {
    removeFromBasket(product);
  }

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, amount + 1);
  };

  const handleDecreaseQuantity = () => {
    if (amount > 1) {
      updateQuantity(product.id, amount - 1);
    }
  };
  return (
    <Container>
      <StyledImg src={product.image} alt={product.title} />
      <TextContainer>
        <TextContent>{product.title}</TextContent>
        <TextContent>{product.price} €</TextContent>
        <StyledButton onClick={handleRemove}>Supprimer</StyledButton>
      </TextContainer>
      <QuantityContainer>
        <QuantityButton onClick={handleDecreaseQuantity}>-</QuantityButton>
        <QuantityText>{amount}</QuantityText>
        <QuantityButton onClick={handleIncreaseQuantity}>+</QuantityButton>
      </QuantityContainer>
   
    </Container>
  )
}
