import { useQuery } from '@tanstack/react-query';

const useproducts = () => {
  const fetchproducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Fetching products failed: ${error.message}`);
    }
  };

  const { data = [], isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchproducts,
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export default useproducts;
