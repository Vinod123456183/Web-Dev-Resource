import { useState } from "react";
export default function App() {
  const [count, setcount] = useState(0);
  return (
    <>
      <h2 className="text-center p-2" > Use State </h2>
      <div className="text-center p-2" >Count : {count}</div>
      <div className="flex flex-col p-5 gap-4" >
        <button className="pt-5 "  onClick={() => setcount(count + 1)}>Increment</button>
        <button className="pt-5 "  onClick={() => setcount(0)}>Reset</button>
        <button className="pt-5 "  onClick={() => setcount(count > 0 ? count - 1 : (count = 0))}>
          Decrement
        </button>
      </div>
    </>
  );
}
