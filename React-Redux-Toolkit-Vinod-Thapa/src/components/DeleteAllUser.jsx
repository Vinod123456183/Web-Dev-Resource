import React from "react";
import { useDispatch } from "react-redux";
// import { removeAllUser } from "../store/slices/UserSlice";
import { clearAllUsers } from "../store/actions";

function DeleteAllUser() {
  const dispatch = useDispatch();

  const deleteAllData = () => {
    console.log("Delete All Data Pressed !");
    // dispatch(removeAllUser());
    dispatch(clearAllUsers());
  };

  return (
    <div>
      <button onClick={deleteAllData}>Delete All User</button>
    </div>
  );
}

export default DeleteAllUser;
