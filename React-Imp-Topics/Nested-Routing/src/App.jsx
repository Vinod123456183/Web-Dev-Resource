
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div >
      <h1> Heading As NavBar </h1>
      <Header />


    {/* Using OutLet  */}
    {/* Page se Load Kiya Hua Content */}
    <Outlet/>


    </div>
  );
}

export default App;
