import styled from 'styled-components'
import Header from '../components/Header'
import BasketProduct from '../components/BasketProduct'

import { StoreContext } from '../context/StoreContext'
import React, { useContext } from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`
const HeaderContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
`
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 50px;
  margin: 50px 0;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
  font-size: 24px;
  font-weight: 400;
  gap: 50px;
  margin-top: 50px;
`
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  width: 100%;
  font-size: 24px;
  font-weight: 700;
`

export default function HomeScreen() {
  const { products, total } = useContext(StoreContext);

  const totalProducts = products.reduce((total, product) => total + product.amount, 0);
  return (
    <Container>
      <Header />
      <HeaderContainer>       
        <h2>Mon Panier</h2>
      </HeaderContainer>

      {totalProducts ? (
        <ProductContainer>
          {products.map((product, i) => (
            <BasketProduct         
              key={i} 
              product={product} 
            />
          ))}
          <PriceContainer>     
            <p>Total</p>
            <p>{total} €</p>
          </PriceContainer>
        </ProductContainer>
        ) : (
        <ContentContainer>
          <span>Votre panier est vide</span>
          <PriceContainer>     
            <p>Total</p>
            <p>{total} €</p>
          </PriceContainer>
        </ContentContainer>
      )}


    </Container>
  ) 
}
