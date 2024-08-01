import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  console.log("Params : ", params);

  return (
    <div>
      ProductDetails inside Product Detaisl page
      {params.id}
    </div>
  );
}

export default ProductDetails;
