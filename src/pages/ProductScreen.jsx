import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useGetProductsQuery ,useGetProductCommentsQuery, useCreateProductCommentMutation } from '../Services/API'
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`
const StyledContent = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`
const StyledInput = styled.input`
  width: 200px;
`
const StyledButton = styled.button`
  width: 330px;
`

export default function ProductScreen() {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const { productId } = useParams();

    const productQuery = useGetProductsQuery();
    const productData = productQuery.data && productQuery.data.find(product => product.id === productId);
  
    const { data, isLoading } = useGetProductCommentsQuery(productId);
  
    const [ createProductComment ] = useCreateProductCommentMutation();

    const handleCreateComment = async () => {
      await createProductComment({ productId, username, comment });
      setUsername('');
      setComment('');
    };
    return (
      <Container>
        <Header />
        <h1>Nom du produit : {productData ? productData.title : 'Chargement...'}</h1>
        <StyledContent>
          <div>username : </div>  
          <StyledInput value={username} onChange={(e) => {
            setUsername(e.target.value)}
          } />
        </StyledContent>
        <StyledContent>
          <div>Commentaire : </div>  
          <StyledInput value={comment} onChange={(e) => {
            setComment(e.target.value)}
          } />
        </StyledContent>
        <StyledButton onClick={handleCreateComment}>
          Create comment
        </StyledButton>

        <ul>
          { 
          !isLoading ? data.toReversed().map((product) => (
              <li key={product.id}>
                <p>Username : {product.username}</p>
                <p>Commentaire : {product.comment}</p>
              </li>
            ))  : <div>Loading...</div>
          }
        </ul>
    </Container>
  );
}
