import React from 'react'
import { useGetProductsQuery } from '../Services/API';
import Header from '../components/Header';
import Product from '../components/Product';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
`

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  margin-top: 40px;
  gap: 60px;
`

export default function ProductsScreen() { 
  const { data, isLoading} = useGetProductsQuery()
  return (
    <div>
      <Header />
      <Container>
        <h1>Products</h1>
        <ProductsContainer>
          {
          !isLoading && data ? data.map((product) => (
              <Product
                key={product.id} 
                product={product} 
              />
            ))  : <div>Loading...</div>
          }
        </ProductsContainer>
      </Container>
    </div>
  )
}
