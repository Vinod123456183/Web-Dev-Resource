import {useQuery} from '@tanstack/react-query';


const useproducts = () => {
 
    const fetchproducts = async () => {

        const products =  await fetch('https://fakestoreapi.com/products');

        const data = await products.json();

        return data;

    }
    const {data , isPending , isError , error } = useQuery({
        queryKey:['products'],
        queryFn: fetchproducts,

    })    
    return {
        data,
        isPending,
        isError,
        error
    }
}

export default useproducts;