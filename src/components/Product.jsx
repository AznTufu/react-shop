import { Link }  from 'react-router-dom';
import styled from 'styled-components';
import search from '../assets/svg/search-line.svg';

import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 250px;    
`
const Image = styled.img`
  width: 200px;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const StyledImg = styled.img`
    width: 20px;
    height: 20px;
`
const StyledButton = styled.button`
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #4154f1;
  cursor: pointer;
  text-decoration: none;
  width: max-content;
  font-weight: 700;
  &:hover {
    color: #4154f1;
    background-color: white;
    outline: 2px solid #4154f1;
    transition: all 0.2s ease-in-out;
  }
`;

const Product = ( {product} ) => {
  const { addToBasket } = useContext(StoreContext);

  const handleAdd = () => {
    addToBasket(product);
  }

  return (
    <ProductContent>
        <Image src={product.image} alt={product.title} />
        <Container>
            <div>    
                <div>{product.title}</div>
                <div> {product.price} € </div>
            </div>
            <div>
                <Link to={`/products/${product.id}/comments`}>
                    <StyledImg src={search} alt="search" />
                </Link>
                <StyledButton onClick={handleAdd}>
                    Ajouter au panier
                </StyledButton>
            </div>
        </Container>
    </ProductContent>
  )
}

export default Product
