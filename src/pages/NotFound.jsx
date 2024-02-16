import React from 'react'
import { Link }  from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 100vh;
    width: 100vw;
`

const Text = styled.div`
  font-size: 48px;
  text-align: center;
`
const TextSpan = styled.span`
  font-size: 128px;
  font-weight: 600;
  color: #4154f1;
`

const StyledLink = styled(Link)`
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #4154f1;
  cursor: pointer;
  text-decoration: none;
  width: max-content;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    color: #4154f1;
    background-color: white;
    outline: 2px solid #4154f1;
    transition: all 0.2s ease-in-out;
  }
`;

export default function NotFound() {
  return (
    <Content>
      <Text>
        <TextSpan>404</TextSpan>
        <br/> Page not found
      </Text>
      
      <StyledLink to="/">Go to home</StyledLink>
    </Content>
  )
}
