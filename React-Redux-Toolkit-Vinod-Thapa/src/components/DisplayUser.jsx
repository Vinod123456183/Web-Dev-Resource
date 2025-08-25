import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";

function DisplayUser() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.user); // array from slice
  console.log(data);

  const delteteUser = (index) => {
    console.log("delete user");
    dispatch(removeUser(index));
  };

  return (
    <div>
      <h1>User Information</h1>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((user, index) => (
          <div key={index}>
            {user}

            <button
              style={{ padding: "2px", color: "red " }}
              onClick={() => delteteUser(index)}
            >
              <MdDeleteForever />
            </button>
          </div>
        ))
      ) : (
        <p>No users available</p>
      )}
    </div>
  );
}

export default DisplayUser;
