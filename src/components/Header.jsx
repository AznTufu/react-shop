import React, {useContext} from 'react'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import cart from '../assets/svg/shopping-cart-line.svg'

const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    background-color: white;
    max-width: 1400px;
    margin: 20px auto;
    width: 100vw;
`
const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
`
const StyledImg = styled.img`
    width: 40px;
    height: 40px;
`
const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
`;
const CartContainer = styled(Link)`
  position: relative;
  display: flex;
  gap: 2px;
`;
const CartCount = styled.span`
  position: absolute;
  left: 32px;
  bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
  background-color: #FF5959;
  border-radius: 100%;
  padding: 8px 12px;
  line-height: 1;
`;

export default function Header() {
  const { products } = useContext(StoreContext);

  const totalProducts = products.reduce((total, product) => total + product.amount, 0);

  return (
    <Navbar>
      <NavContainer>  
        <StyledLink to="/"> Home </StyledLink>
        <StyledLink to="/products"> Products</StyledLink>
      </NavContainer>
      <CartContainer to="/">
        <StyledImg src={cart} alt="cart" />
        <CartCount> {totalProducts} </CartCount> 
      </CartContainer>
    </Navbar>
  )
}
