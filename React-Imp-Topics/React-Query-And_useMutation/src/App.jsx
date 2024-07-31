import './App.css';
import useproducts from './Hooks/useproducts';
import { useMutation } from '@tanstack/react-query';

function App() {
  const mutation = useMutation({
    mutationFn: () =>
      fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify({
          title: 'test product',
          price: 13.5,
          description: 'lorem ipsum set',
          image: 'https://i.pravatar.cc',
          category: 'electronic',
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json)),
  });

  const { isPending, data, error, isError } = useproducts();

  if (isPending) return <h1 className="text-center text-xl font-semibold mt-10">Loading.....</h1>;

  if (isError) return <h1 className="text-center text-xl font-semibold mt-10">Error</h1>;

  return (
    <>
      {mutation.isPending ? (
        <p>Adding</p>
      ) : (
        <>
          {mutation.isError ? <p>{mutation.error.message}</p> : null}
          {mutation.isSuccess && <p>Product Added.</p>}
          {/* <button onClick={() => mutation.mutate}>Add Product</button> */}
          <button onClick={() => mutation.mutate()}>Add Product</button>

        </>
      )}

      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center">
          {data.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-4 m-4 w-80 text-center"
            >
              <img src={product.image} alt={product.id} className="w-full h-auto rounded-md mb-4" />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-orange-600 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
