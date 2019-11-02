import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatToBrl } from '../util/money';

const { REACT_APP_API_URL } = process.env;

export default function useListProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchProducts = () => {
    setIsLoading(true);

    axios.get(`${REACT_APP_API_URL}/products`)
      .then(response => {
        setProducts(response.data.map(product => ({ ...product,  price: formatToBrl(product.price)})));
        setIsError(false);  
      })
      .catch(error => {
        console.error(error);
        setIsError(true);
      })
      .finally(() => setIsLoading(false))
  };

  useEffect(() => fetchProducts(), []);

  return [products, isLoading, isError, fetchProducts];
}