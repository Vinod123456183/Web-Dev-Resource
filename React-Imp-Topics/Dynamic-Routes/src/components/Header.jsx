import React from "react";

import {Link} from 'react-router-dom'


function Header() {
  return <div>

    <Link to = '/'> Home  </Link>
    <Link to = '/products'> Products  </Link>
    <Link to = '/about' > About  </Link>
    <Link to = '/contact' > Contact  </Link>

  </div>;
}

export default Header;