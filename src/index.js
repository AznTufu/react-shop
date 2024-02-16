import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import ProductsScreen from './pages/ProductsScreen';
import NotFound from './pages/NotFound';
import ProductScreen from './pages/ProductScreen';

import { Provider } from 'react-redux'
import { store } from './store'

import { StoreProvider } from './context/StoreContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
    errorElement: <NotFound />,
  },
  {
    path: '/products',
    element: <ProductsScreen /> ,
  },
  {
    path: '/products/:productId/comments',
    element: <ProductScreen /> ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
