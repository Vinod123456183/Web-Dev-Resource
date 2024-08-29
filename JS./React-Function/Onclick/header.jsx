
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  // Put In variable
  const navigate = useNavigate();

  // Function name - handleClick  
  const handleClick = () => {
    navigate("/contact"); 
  };

  return (
      <button
        onClick={handleClick}
        className="bg-[#171616] rounded-xl p-3 px-7 mx-auto font-league-spartan font-semibold"
      >
        Let's <span className="text-blue-500">Talk</span>
      </button>
  );
};

export default Navbar;
